import os
import requests
from .models import BitrixLog


def bitrix_enabled() -> bool:
    return os.environ.get('BITRIX_ENABLED', '0') == '1'


def bitrix_webhook_base() -> str:
    # Example: https://YOUR_DOMAIN.bitrix24.com/rest/1/xxxxxxxx
    return os.environ.get('BITRIX_WEBHOOK_BASE', '').rstrip('/')


def send_lead(name: str, phone: str, message: str = '') -> None:
    if not bitrix_enabled():
        return

    base = bitrix_webhook_base()
    if not base:
        BitrixLog.objects.create(ok=False, endpoint='', payload={'name': name, 'phone': phone, 'message': message}, response={}, error='BITRIX_WEBHOOK_BASE is empty')
        return

    endpoint = f"{base}/crm.lead.add.json"
    payload = {
        'fields': {
            'TITLE': f'NUMA Contact: {name}',
            'NAME': name,
            'PHONE': [{'VALUE': phone, 'VALUE_TYPE': 'WORK'}],
            'COMMENTS': message or '',
            'SOURCE_DESCRIPTION': 'Website contact form',
        }
    }

    try:
        r = requests.post(endpoint, json=payload, timeout=12)
        r.raise_for_status()
        data = r.json() if r.content else {}
        BitrixLog.objects.create(ok=True, endpoint=endpoint, payload=payload, response=data, error='')
    except Exception as e:
        BitrixLog.objects.create(ok=False, endpoint=endpoint, payload=payload, response={}, error=str(e))
