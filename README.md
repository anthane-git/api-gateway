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

`routes` - proxy routes with authentication
`exclusions` - authentication exclusions

## Inside the project root, you can run some built-in commands:

### `npm start`

Runs the app in production mode.<br>

### `npm run dev`

Runs the app in development mode.<br>
