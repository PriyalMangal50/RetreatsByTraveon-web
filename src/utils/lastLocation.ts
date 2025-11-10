const KEY = 'lastRoute';

const AUTH_BLOCKLIST = new Set<string>([
  '/login',
  '/signup',
  '/admin/login',
  '/verify-email',
]);

export function setLastRoute(pathname: string) {
  if (!pathname || AUTH_BLOCKLIST.has(pathname)) return;
  try { localStorage.setItem(KEY, pathname); } catch {}
}

export function getLastRoute(): string | null {
  try { return localStorage.getItem(KEY); } catch { return null; }
}

export function clearLastRoute() {
  try { localStorage.removeItem(KEY); } catch {}
}