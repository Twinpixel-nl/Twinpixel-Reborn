export type Lang = 'nl' | 'en';

export const pathFor = (lang: Lang, slug?: string) =>
  `/${lang}/${slug ? `${slug.replace(/^\/|\/$/g, '')}/` : ''}`;

export const swapLang = (pathname: string) =>
  pathname.startsWith('/en/')
    ? pathname.replace(/^\/en(\/|$)/, '/nl$1')
    : pathname.replace(/^\/nl(\/|$)/, '/en$1');
