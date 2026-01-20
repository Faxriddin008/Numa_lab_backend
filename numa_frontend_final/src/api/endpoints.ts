import http from "./http"; // ❗ named import emas, default bo‘lishi kerak

export type Lang = "uz" | "ru";

/**
 * Til bo‘yicha field olish
 * masalan: title_uz / title_ru
 */
export function pickLang<T extends Record<string, any>>(
  obj: T | null | undefined,
  base: string,
  lang: Lang
) {
  if (!obj) return "";
  const key = `${base}_${lang}`;
  return obj[key] ?? obj[base] ?? "";
}

/* =======================
   SITE SETTINGS
======================= */
export async function getSiteSettings() {
  const { data } = await http.get("/api/site-settings/");
  // backend ListAPIView → array qaytaradi
  return Array.isArray(data) ? data[0] : data;
}

/* =======================
   SEO
======================= */
export async function getSeo(pageKey: string) {
  const { data } = await http.get(`/api/seo/${pageKey}/`);
  return data;
}

/* =======================
   SLIDER
======================= */
export async function getSliders() {
  const { data } = await http.get("/api/sliders/");
  return data;
}

/* =======================
   ABOUT
======================= */
export async function getAbout() {
  const { data } = await http.get("/api/about/");
  return Array.isArray(data) ? data[0] : data;
}

/* =======================
   CHECKUPS
======================= */
export async function getCheckups() {
  const { data } = await http.get("/api/checkups/");
  return data;
}

/* =======================
   DOCTORS
======================= */
export async function getDoctors() {
  const { data } = await http.get("/api/doctors/");
  return data;
}

/* =======================
   CONTENT BLOCKS
======================= */
export async function getBlocks(params?: {
  page_key?: string;
  key?: string;
}) {
  const { data } = await http.get("/api/blocks/", {
    params,
  });
  return data;
}

/* =======================
   CONTACT
======================= */
export async function createContact(payload: {
  name: string;
  phone: string;
  message?: string;
}) {
  const { data } = await http.post("/api/contact/", payload);
  return data;
}
