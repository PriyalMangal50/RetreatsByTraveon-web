import { API_BASE_URL } from "../config/env";

function getAuthTokenFromStorage(): string | null {
  try {
    const raw = localStorage.getItem('auth');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const state = parsed?.state || parsed;
    return state?.token || null;
  } catch {
    return null;
  }
}

type HttpOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  auth?: boolean;
  signal?: AbortSignal;
  contentType?: 'json' | 'form';
};

export async function http<T = any>(path: string, opts: HttpOptions = {}): Promise<T> {
  const {
    method = 'GET',
    body,
    headers = {},
    auth = false,
    signal,
    contentType = 'json',
  } = opts;

  const url = path.startsWith('http') ? path : `${API_BASE_URL}${path}`;
  const finalHeaders: Record<string, string> = { ...headers };

  if (contentType === 'json' && body !== undefined) {
    finalHeaders['Content-Type'] = 'application/json';
  }

  if (auth) {
    const token = getAuthTokenFromStorage();
    if (token) finalHeaders['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers: finalHeaders,
    body:
      body === undefined
        ? undefined
        : contentType === 'json'
        ? JSON.stringify(body)
        : body, // e.g. FormData
    signal,
  });

  const text = await res.text();
  const data = text ? (() => { try { return JSON.parse(text); } catch { return text; }})() : null;

  if (!res.ok) {
    const message = (data && (data.message || data.error)) || `HTTP ${res.status}`;
    throw new Error(message);
  }

  return data as T;
}