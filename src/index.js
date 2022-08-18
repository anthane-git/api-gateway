import fastGateway from 'fast-gateway';
import { expressjwt } from 'express-jwt';
import JwksClient from 'jwks-rsa';
import { load } from 'js-yaml';
import cors from 'cors';

import indexRoute from './routes.js';

export const server = config => {
	const {
		services: { routes, exclusions },
	} = load(config);

	const app = fastGateway({
		restana: {},
		middlewares: [
			cors({
				origin: ['http://localhost:4000'],
				credentials: true,
			}),
			expressjwt({
				secret: JwksClient.expressJwtSecret({
					jwksUri: `${process.env.AUTH_SERVICE}/auth/.well-known/jwks.json`,
					rateLimit: process.env.AUTH_SERVICE,
					timeout: 18 * 100 * 1000,
					cache: true,
				}),
				algorithms: ['RS256'],
			}).unless({ path: exclusions }),
		],
		routes,
	});

	indexRoute(app, routes);

	app.start(process.env.PORT || 3000);
};
