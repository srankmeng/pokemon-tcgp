import { router, handleNotFound } from './controllers/index.js';

const server = Bun.serve({
  port: 3333,
  async fetch(request) {
    const url = new URL(request.url);
    const routeKey = `${request.method} ${url.pathname}`;

    const handler = router[routeKey];
    if (handler) {
      return await handler();
    }

    return handleNotFound();
  },
});

console.log(`Server running at http://localhost:${server.port}`);
