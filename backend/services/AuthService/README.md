# Auth Service

Мікросервіс для аутентифікації користувачів на платформі HelPaw. Підтримує реєстрацію, логін та видачу JWT-токенів.

---

## 🛠 Технології

- C# ASP.NET Core
- PostgreSQL
- Entity Framework Core
- Docker / Docker Compose
- JWT Authentication
- EF Core Migrations (auto-apply on container start)

---

## 🚀 Швидкий старт (з GitHub)

```bash
git clone https://github.com/GongoTeam/helpaw.git
cd helpaw/backend
cp .env.example .env
./dev.sh
```

> ⚠️ Для запуску потрібен Docker + Docker Compose

---

## ⚙️ Налаштування `.env`

```env
JWT_SECRET=YourSuperSecretKey
AUTH_DB_NAME=authdb
AUTH_DB_USER=postgres
AUTH_DB_PASS=123
AUTH_DB_PORT=5432
```

> `JWT_SECRET` має бути довгий (32+ символи)

---

## 📦 API

### POST `/api/auth/register`

```json
{
  "email": "user@example.com",
  "password": "string",
  "role":"Volunteer"
}
```

### POST `/api/auth/login`

```json
{
  "email": "user@example.com",
  "password": "string"
}
```

Response:

```json
{
  "token": "jwt-token-here"
}
```

---

## 🗃 Міграції

Застосовуються автоматично при старті контейнера.

Створити нову міграцію:

```bash
dotnet ef migrations add AddFieldToUser --project AuthService
```

---

## 🧠 Тестування

```bash
curl -X POST http://localhost:5001/api/auth/register  -H "Content-Type: application/json"  -d '{"email":"test@pet.com", "password":"123456"}'
```

---
