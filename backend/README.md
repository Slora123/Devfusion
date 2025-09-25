# Cashwise Backend

## Setup

- Python 3.10+
- Install dependencies (recommended: Poetry)

```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload --port 8000
```

Env vars:

- `DATABASE_URL` (default `sqlite:///./cashwise.db`)
- `CORS_ORIGINS` (default `http://localhost:5173`)