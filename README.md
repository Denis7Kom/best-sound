# BEST SOUND — Concert Agency Website Prototype

Современный статический прототип сайта для концертного агентства **BEST SOUND**.

Проект остаётся быстрым frontend-прототипом: без базы данных, без backend и без внешних библиотек. Новая итерация добавляет production-readiness слой: официальные публичные данные, страницу политики обработки данных, mailto-заявку и подготовку к деплою через GitHub Pages.

## Что реализовано

- Профессиональный SVG-логотип `assets/logo.svg`.
- Hero-блок без эквалайзера, волн, толпы и псевдо-сцены.
- Editorial poster wall вместо дешёвой CSS-графики.
- Event index с поиском, фильтрами и quick-view модалкой.
- Официальные опубликованные даты и архивные события BEST SOUND в `src/data.js`.
- Контактный email собирается в JS из частей и используется для `mailto:` заявки.
- Форма заявки открывает готовое письмо менеджеру.
- Добавлен trust/about-блок с официальными тезисами: опыт, репутация, география, события.
- Capability matrix с чистыми SVG-иконками вместо emoji.
- Tour board на основе опубликованного маршрута Alessandro Safina 2026.
- Journal/social-блок для кейсов, backstage notes и анонсов.
- `privacy.html` — базовая страница политики обработки персональных данных для прототипа.
- SEO / Open Graph / favicon.
- `robots.txt` и `sitemap.xml`.
- Базовая accessibility-поддержка:
  - skip-link;
  - `focus-visible`;
  - закрытие меню/модалки через `Escape`;
  - `prefers-reduced-motion`.

## Источник данных

Часть данных взята с официального сайта BEST SOUND:

- слоган: «Наши концерты — произведение искусства»;
- контакты;
- опубликованные даты тура Alessandro Safina 2026;
- архивные события Joe Lynn Turner и Federico Paciotti;
- заявленные преимущества: опыт более 20 лет, сотни событий, тысячи зрителей, широкая география.

Важно: на дату проверки **25 июня 2026** опубликованные на официальном сайте даты февраля–марта 2026 уже относятся к прошедшим событиям. Поэтому в прототипе они отмечены как `Official listing` / `Archive`, а не как будущая афиша.

## Структура проекта

```text
.
├── index.html
├── privacy.html
├── README.md
├── robots.txt
├── sitemap.xml
├── assets/
│   ├── favicon.svg
│   ├── logo.svg
│   └── og-preview.svg
└── src/
    ├── app.js
    ├── data.js
    ├── production.css
    └── styles.css
```

## Как запустить локально

Вариант 1 — открыть `index.html` напрямую в браузере.

Вариант 2 — запустить локальный статический сервер:

```bash
python -m http.server 8000
```

Потом открыть:

```text
http://localhost:8000
```

## Как включить GitHub Pages

Через настройки репозитория:

```text
Settings → Pages → Build and deployment → Deploy from a branch → main → /root
```

После merge в `main` сайт должен быть доступен по адресу:

```text
https://denis7kom.github.io/best-sound/
```

Я пытался добавить GitHub Actions workflow для Pages, но GitHub-интеграция заблокировала создание workflow-файла. Поэтому в этой итерации оставлена ручная инструкция через Settings → Pages.

## Что ещё нужно для настоящего production

- Подставить реальные фото и постеры, полученные от клиента.
- Подключить серверный канал заявок: Telegram bot через backend, CRM, Formspree/Getform или email API.
- Добавить реальные ticket-ссылки, если билеты продаются через внешних операторов.
- Сделать отдельные страницы артистов, концертов и туров.
- Подготовить юридически проверенную privacy policy с реквизитами оператора данных.
- Прогнать Lighthouse и мобильную QA-проверку после деплоя.
