import { server } from 'gas-react';

server.on('hello', ({ body }) => `Hello ${body}`);

// The below are all valid (Albeit a little useless (at the moment))
server.on('helloPromise', ({ body }) => new Promise((resolve) => resolve(`Hello ${body}`)));

server.on('helloAsync', async ({ body }) => `Hello ${body}`);
