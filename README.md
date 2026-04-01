# Homework 64 — Express, Passport та Sessions

## Опис
У цьому проєкті оновлено Express сервер та додано авторизацію за допомогою Passport.

Реалізовано:
- локальну авторизацію через email та password
- збереження сесії через express-session
- захищений маршрут `/protected`
- маршрути для реєстрації, входу та виходу

## Технології
- Node.js
- Express.js
- Passport
- Passport Local
- express-session

## Запуск
```bash
npm install
npm start
```
##  Маршрути
- POST /auth/register
- POST /auth/login
- GET /auth/logout
- GET /protected
##  Додатково
- сесія зберігається у cookies
- використовується httpOnly
- застосовано MVC структуру