# API Gateway

[![Restana](https://img.shields.io/badge/Restana-%23000000.svg?style=for-the-badge&logo=FastAPI&logoColor=white)](https://restana.21no.de/)
[![Node](https://img.shields.io/badge/nodeJS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/)
[![JWT/JSON Web Token](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)

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
