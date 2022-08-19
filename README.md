# API Gateway

This service is scaffolded on Restana which is a super fast, minimalist framework.

## Configuring Proxies

Specify proxy routes in `./config.yml`.

```yaml
routes:
  - name: service-name
    prefix: '/service-prefix'
    target: 'http://localhost:6969'

cors:
  - 'http://localhost:6000'

exclusions:
  - '/identity-api'
  - '/favicon.ico'
  - '/'
```

`routes` - service url to proxy (w/authentication).
`cors` - list of origins to enable cors.
`exclusions` - paths to exclude authentication.

## Commands

```bash
npm start
```

Runs the app in production mode.

<br>

```bash
npm run dev
```

Runs the app in development mode.
