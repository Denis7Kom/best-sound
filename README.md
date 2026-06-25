# BEST SOUND — Concert Agency Website Prototype

Современный статический прототип сайта для концертного агентства **BEST SOUND**.

Проект остаётся быстрым frontend-прототипом: без базы данных, без backend и без внешних библиотек. Но текущая итерация уводит дизайн от дешёвой декоративной графики к более взрослой agency/editorial-подаче: сильная типографика, event index, tour board, journal/social-блок и нормальный SVG-wordmark.

## Что реализовано

- Новый профессиональный SVG-логотип `assets/logo.svg`.
- Hero-блок без эквалайзера, волн, толпы и псевдо-сцены.
- Editorial poster wall вместо дешёвой CSS-графики.
- Event index с поиском, фильтрами и quick-view модалкой.
- Данные концертов, услуг, маршрута и journal-блока вынесены в `src/data.js`.
- Capability matrix с чистыми SVG-иконками вместо emoji.
- Tour board вместо абстрактной карты.
- Journal/social-блок для кейсов, backstage notes и анонсов.
- Улучшенная коммерческая форма заявки:
  - имя;
  - телефон;
  - email;
  - тип клиента;
  - город;
  - дата;
  - бюджет;
  - описание задачи;
  - согласие на обработку данных.
- SEO / Open Graph / favicon.
- `robots.txt` и `sitemap.xml`.
- Базовая accessibility-поддержка:
  - skip-link;
  - `focus-visible`;
  - закрытие меню/модалки через `Escape`;
  - `prefers-reduced-motion`.

## Использованные дизайн-паттерны

Не копировались чужие ассеты, тексты или фирменный стиль. Взяты только общие паттерны крупных концертных и агентских сайтов:

- event search / фильтры / ticketing index;
- featured posters / show cards;
- tour / venue / partners navigation logic;
- news / social / journal zone;
- строгая агентская подача вместо перегруженной концертной графики.

## Структура проекта

```text
.
├── index.html
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
    └── styles.css
```

## Как запустить

Вариант 1 — открыть `index.html` напрямую в браузере.

Вариант 2 — запустить локальный статический сервер:

```bash
python -m http.server 8000
```

Потом открыть:

```text
http://localhost:8000
```

## Что важно понимать

Это не production-сайт и не финальная коммерческая версия. Это качественный frontend-прототип, который можно показывать как направление редизайна.

## Следующие шаги

1. Подставить реальные фото, постеры, контакты и афишу BEST SOUND.
2. Подключить отправку формы через Telegram bot, email API, CRM или backend.
3. Добавить реальные ссылки на билеты.
4. Сделать отдельные страницы артистов и концертов.
5. Провести Lighthouse-аудит.
6. Задеплоить на GitHub Pages, Netlify или Vercel.
