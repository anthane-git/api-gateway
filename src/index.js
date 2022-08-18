import fastGateway from 'fast-gateway';
import { expressjwt } from 'express-jwt';
import JwksClient from 'jwks-rsa';
import { load } from 'js-yaml';

import indexRoute from './routes/index.route.js';

export const server = config => {
	const {
		services: { routes, exclusions },
	} = load(config);

	const jwkConfig = {
		jwksUri: `${process.env.AUTH_SERVICE}/auth/.well-known/jwks.json`,
		rateLimit: true,
		timeout: 18 * 100 * 1000,
		cache: true,
	};

	const app = fastGateway({
		restana: {},
		middlewares: [
			expressjwt({
				secret: JwksClient.expressJwtSecret(jwkConfig),
				algorithms: ['RS256'],
			}).unless({ path: exclusions }),
		],
		routes,
	});

	indexRoute(app, routes);

	app.start(process.env.PORT || 3000);
};
