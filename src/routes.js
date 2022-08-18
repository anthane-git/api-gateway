export default (server, routes) => {
	if (!server || !routes) return;

	server.get('/', (_, res) => {
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
};
