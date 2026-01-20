import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import type { Lang } from '../api/endpoints';

export const SUPPORTED_LANGS: Lang[] = ['uz', 'ru'];

export function normalizeLang(maybe?: string): Lang {
  const l = (maybe || '').toLowerCase();
  return (SUPPORTED_LANGS as any).includes(l) ? (l as Lang) : 'uz';
}

export function useLang(): Lang {
  const params = useParams();
  const location = useLocation();
  return useMemo(() => {
    // Prefer :lang param; fallback to first path segment.
    const p = (params as any)?.lang as string | undefined;
    if (p) return normalizeLang(p);
    const seg = location.pathname.split('/').filter(Boolean)[0];
    return normalizeLang(seg);
  }, [params, location.pathname]);
}

export function withLang(path: string, lang: Lang) {
  const p = path.startsWith('/') ? path : `/${path}`;
  // Avoid double prefix.
  const parts = p.split('/').filter(Boolean);
  if (parts.length > 0 && SUPPORTED_LANGS.includes(parts[0] as any)) {
    parts[0] = lang;
    return `/${parts.join('/')}`;
  }
  return `/${lang}${p}`;
}
