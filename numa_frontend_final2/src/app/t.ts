import type { Lang } from '../api/endpoints';

const dict = {
  nav_home: { uz: 'Bosh sahifa', ru: 'Главная' },
  nav_about: { uz: 'Biz haqimizda', ru: 'О нас' },
  nav_services: { uz: 'Xizmatlar', ru: 'Услуги' },
  nav_doctors: { uz: 'Shifokorlar', ru: 'Врачи' },
  nav_checkups: { uz: 'Check-up', ru: 'Чек-ап' },
  nav_prices: { uz: 'Narxlar', ru: 'Цены' },
  nav_blog: { uz: 'Blog', ru: 'Блог' },
  nav_contact: { uz: 'Aloqa', ru: 'Контакты' },
  book: { uz: 'Qabulga yozilish', ru: 'Записаться' },
  name: { uz: 'Ism', ru: 'Имя' },
  phone: { uz: 'Telefon', ru: 'Телефон' },
  message: { uz: 'Xabar', ru: 'Сообщение' },
  send: { uz: 'Yuborish', ru: 'Отправить' },
  admin: { uz: 'Admin', ru: 'Админ' },
  login: { uz: 'Kirish', ru: 'Войти' },
  logout: { uz: 'Chiqish', ru: 'Выйти' },
};

export function tr(key: keyof typeof dict, lang: Lang) {
  return (dict as any)[key]?.[lang] ?? (dict as any)[key]?.uz ?? key;
}
