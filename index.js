import gateway from "fast-gateway";
import jwksClient from "jwks-rsa";
import { readFileSync } from "fs";
import { expressjwt } from "express-jwt";
import { config } from "dotenv";
import { load } from "js-yaml";
import "dotenv/config";

config({ path: `.env.${process.env.NODE_ENV}` });

const fileContents = readFileSync("./config.yml", "utf8");

const { routes } = load(fileContents);

const server = gateway({
  restana: {},
  middlewares: [
    expressjwt({
      secret: jwksClient.expressJwtSecret({
        jwksUri: "http://localhost:5500/v1/auth/.well-known/jwks.json",
        rateLimit: true,
        timeout: 18 * 100 * 1000,
        cache: true,
      }),
      algorithms: ["RS256"],
    }).unless({ path: ["/", "/favicon.ico"] }),
  ],
  routes,
});

server.get("/", (_, res) => {
  const endpoints = [];

  routes.map(({ name, prefix }) => {
    endpoints.push({
      name,
      host: `${process.env.HOST}${
        process.env.PORT && `:${process.env.PORT}`
      }${prefix}`,
    });
  });

  res.send(endpoints);
});

server.start(process.env.PORT || 3000);
