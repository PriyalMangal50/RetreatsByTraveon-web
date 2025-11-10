import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setLastRoute } from '../utils/lastLocation';

export default function RouteChangeTracker() {
  const { pathname } = useLocation();
  useEffect(() => { setLastRoute(pathname); }, [pathname]);
  return null;
}