# Cashwise (Voice-first Money Manager)

## Stack
- Frontend: React + Vite + Tailwind, React Router, TanStack Query, Supabase JS
- Backend: FastAPI + SQLModel (SQLite)

## Local Setup

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Create `.env.local` from `.env.example`:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_API_URL=http://localhost:8000
```

### Backend
```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload --port 8000
```
Copy `.env` from `.env.example` if needed.

## Features (MVP)
- Voice-first UI (button placeholder), mobile-first screens
- Track income/expense, basic loans, insights placeholders
- Supabase email magic-link auth scaffold
- FastAPI CRUD for transactions and loans