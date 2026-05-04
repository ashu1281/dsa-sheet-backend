# DSA Sheet Tracker

A full-stack DSA Sheet Tracker application built using React, TypeScript, Node.js, Express, and PostgreSQL.

The application helps users track their DSA preparation progress chapter-wise and difficulty-wise with JWT authentication and a modern responsive UI.

---

## Live URL

https://dsa.ashishgaikwad.in/

## Dummy User

```txt
1) Email: ashish@gmail.com
   Password: Ashish@123

2) Email: ashish2@gmail.com
   Password: Ashish2@123
```

---

## Features

- JWT Authentication
- User Registration & Login
- Dark / Light Theme Support
- Track Question Progress
- Chapter-wise Accordion UI
- Difficulty-wise Progress Tracking
- Search Questions by:
  - Question Name
  - Company Name
- PostgreSQL Database
- Fully Typed Frontend & Backend
- Responsive UI using MUI v6
- Clean and Scalable Architecture

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Material UI v6
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- PostgreSQL
- JWT Authentication
- node-pg-migrate

### Database
- PostgreSQL

---

## Project Architecture

### Frontend

```bash
src/
│
├── api/
├── components/
├── contexts/
├── layouts/
├── pages/
├── routes/
├── services/
├── theme/
├── types/
└── App.tsx
```

### Backend

```bash
src/
│
├── config/
├── features/
│   ├── auth/
│   ├── dsa/
│   └── progress/
│
├── middlewares/
├── migrations/
├── types/
├── utils/
└── server.ts
```

---

## Database Schema

Main Tables:
- users
- chapters
- questions
- question_levels
- companies
- question_companies
- user_question_progress

---

## Authentication

JWT-based authentication is implemented.

Protected APIs:
- DSA Sheet APIs
- Progress APIs

---

## Environment Variables

### Backend

Create `.env`

```env
PORT=8000

DATABASE_URL=your_postgresql_url

JWT_SECRET=your_secret
```

---

## Backend Setup

Install dependencies:

```bash
npm install
```

Run migrations:

```bash
npm run migrate:up
```

Run development server:

```bash
npm run dev
```

---

## Frontend Setup

Install dependencies:

```bash
npm install
```

Create `.env`

```env
VITE_API_BASE_URL=http://localhost:8000/api
```

Run frontend:

```bash
npm run dev
```

---

## Deployment

### Frontend
- Vercel

### Backend
- Render

### Database
- PostgreSQL

---

## Future Improvements

- Notes Feature
- Revision Tracker
- Bookmark Questions
- Company Filters
- Streak System
- Contest Tracker

---

## Author

Ashish Gaikwad
