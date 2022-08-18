import gateway from "fast-gateway";
import restana from "restana";
import { load } from "js-yaml";
import { readFileSync } from "fs";
import jwksClient from "jwks-rsa";
import { expressjwt } from "express-jwt";

try {
  const fileContents = readFileSync("./config.yml", "utf8");

  const data = load(fileContents);

  const server = gateway(data);
  server.start(8080);
} catch (err) {
  console.log(err);
}

const service = restana();

service.use(
  expressjwt({
    secret: jwksClient.expressJwtSecret({
      jwksUri: "http://localhost:5500/v1/auth/.well-known/jwks.json",
      rateLimit: true,
      timeout: 30000,
      cache: true,
    }),
    algorithms: ["RS256"],
  })
);

service.get("/service/get", (req, res) => res.send("Hello World!"));

service.start(3000);
