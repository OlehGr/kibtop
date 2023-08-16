# Сonfiguration Project for "Test Product Built (with server connection through Wireguard)"

## Сonfiguration Django API
Сreate file **.env** path **services/backend** \
Full path - **services/backend/.env**
```
SECRET_KEY=django-insecure-vb)gz!fyub+2#m0v%nrjjxwbmk@&-^g*m3ayusu1va*@7nc=-0
DJANGO_SETTINGS_MODULE='settings.settings'
POSTGRES_HOST=postgresql
POSTGRES_DB=postgres
POSTGRES_USER=postgres
POSTGRES_PASSWORD=pvlsazrmhjejwthkvrhlncwxuk
POSTGRES_PORT=5432
REDIS_URL="redis://redis:6379/0"

# SOCIAL SETTINGS
URL=https://kibtop-api.olehgr.site
SOCIAL_SECRET=301749986500-7om8alf4e578d7qr

GOOGLE_CLIENT_ID=871422155316-9nm0epdi3l85gb301j2djr8agnrncgsn.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

# EMAIL CREDENTIALS
EMAIL_HOST=amsterdam.smtp.bz
EMAIL_PORT=465
EMAIL_HOST_USER=info@kibtop.com
EMAIL_HOST_PASSWORD=9j0drwBK9wGW
```

## Сonfiguration Next.js Client
Сreate file **.env** path **services/frontend** \
Full path - **services/frontend/.env**
```
GOOGLE_CLIENT_ID=871422155316-9nm0epdi3l85gb301j2djr8agnrncgsn.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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

FACEBOOK_CLIENT_ID=701881914838681
FACEBOOK_CLIENT_SECRET=c19cb4c04e28a17e1e81a5333bdf5372

JWT_SECRET=b330938c7d540642dce9896a099dffb8

NEXT_PUBLIC_MAP_API_KEY=AIzaSyCXmFZqU8q2Y1CLRKDne0UjXdfkfxCxOJ4

NEXT_PUBLIC_DOMAIN=kibtop.olehgr.site
NEXT_PUBLIC_API_DOMAIN=kibtop-api.olehgr.site
NEXTAUTH_URL=https://kibtop.olehgr.site
NEXT_PUBLIC_WEBSOCKET_URL=wss://kibtop-api.olehgr.site

NEXT_PUBLIC_IS_DEPLOY=1
```


# Launching Project

```
cd ./services
docker compose up --build
```

**Api links:** 

Swagger - https://kibtop-api.olehgr.site/api/docs/ 

![img.png](readme_img/img.png)

Redoc - https://kibtop-api.olehgr.sit/api/docs/redoc/

![img_1.png](readme_img/img_1.png)

**Client links:** \
Main page - https://kibtop-api.olehgr.site

**Creating Admin user**
```
docker ps
```
```
# Сonclusion ...
...
<id container api>      backend     "sh -c ' python mana…"   1 minutes ago   Up 1 minutes   0.0.0.0:8000->8000/tcp   api
...
```
```
docker exec -ti <id container api> python manage.py createsuperuser
```
