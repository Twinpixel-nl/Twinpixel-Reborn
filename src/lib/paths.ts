export type Lang = 'nl' | 'en';

// NL is default at root ("/"). EN stays under "/en/".
export const pathFor = (lang: Lang, slug?: string) => {
  const clean = (slug ?? '').replace(/^\/+|\/+$/g, '');
  if (lang === 'en') return `/${lang}/${clean ? `${clean}/` : ''}`;
  // nl
  return `/${clean ? `${clean}/` : ''}`;
};

export const swapLang = (pathname: string) => {
  // Map between root (nl) and /en/*
  if (pathname === '/') return '/en/';
  if (pathname.startsWith('/en/')) {
    // strip /en prefix
    return pathname.replace(/^\/en(\/|$)/, '/');
  }
  // Add /en prefix to root-based path
  return pathname.startsWith('/') ? `/en${pathname}` : `/en/${pathname}`;
};
