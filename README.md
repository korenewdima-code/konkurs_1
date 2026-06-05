# Конкурс рецептов — Едим Дома

Лендинг конкурса рецептов, собранный из макета Google Stitch.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес из терминала (обычно http://localhost:5173).

## Сборка

```bash
npm run build
npm run preview
```

Статика для деплоя — в папке `dist/`.

## Стек

- [Vite](https://vite.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) с дизайн-токенами из Stitch
- Шрифты Rubik, Work Sans и Material Symbols

## Структура

- `index.html` — разметка лендинга
- `src/style.css` — Tailwind и кастомные стили (флажки, анимации)
- `tailwind.config.js` — цвета, типографика, отступы из макета
- `src/main.js` — кнопки «Участвовать» ведут на edimdoma.ru
