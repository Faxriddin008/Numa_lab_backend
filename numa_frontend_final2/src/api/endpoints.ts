import { http } from './http';

export type Lang = 'uz' | 'ru';

export function pickLang<T extends Record<string, any>>(obj: T, base: string, lang: Lang) {
  const key = `${base}_${lang}`;
  return (obj as any)?.[key] ?? (obj as any)?.[base] ?? '';
}

export async function getSiteSettings() {
  const { data } = await http.get('/api/site-settings/');
  return Array.isArray(data) ? data[0] : data;
}

export async function getSeo(pageKey: string) {
  const { data } = await http.get(`/api/seo/${pageKey}/`);
  return data;
}

export async function getSliders() {
  const { data } = await http.get('/api/sliders/');
  return data;
}

export async function getAbout() {
  const { data } = await http.get('/api/about/');
  return Array.isArray(data) ? data[0] : data;
}

export async function getCheckups() {
  const { data } = await http.get('/api/checkups/');
  return data;
}

export async function getDoctors() {
  const { data } = await http.get('/api/doctors/');
  return data;
}

export async function getBlocks(params?: { page_key?: string; key?: string }) {
  const { data } = await http.get('/api/blocks/', { params });
  return data;
}

export async function createContact(payload: { name: string; phone: string; message?: string }) {
  const { data } = await http.post('/api/contact/', payload);
  return data;
}
