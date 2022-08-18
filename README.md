# API Gateway

This service is scaffolded on Restana which is a super fast, minimalist framework.

## Configuring Proxies

Specify proxy routes in `./config.yml`.

```yaml
routes:
  - name: service-name
    prefix: "/service-prefix"
    target: "http://localhost:6969"
```
