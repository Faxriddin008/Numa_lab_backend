# NUMA Diagnostics Backend (Django)

This backend is built to match the React frontend API calls:

- GET /api/site-settings/
- GET /api/seo/<page_key>/
- GET /api/sliders/
- GET /api/about/
- GET /api/checkups/
- GET /api/doctors/
- GET /api/blocks/?page_key=home&key=hero
- POST /api/contact/

## Quick start

```bash
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

## Admin

- http://127.0.0.1:8000/admin/

## JWT

- POST /api/auth/token/
- POST /api/auth/token/refresh/

## Admin stats (JWT, admin only)

- GET /api/admin/stats/

## Bitrix24 integration

When a contact is created via `POST /api/contact/`, it can automatically send a lead to Bitrix24.

Set env:

- `BITRIX_ENABLED=1`
- `BITRIX_WEBHOOK_BASE=...`
