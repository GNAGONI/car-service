const dotenv = require('dotenv');

const http = require('http');
const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');

const routes = require('./routes');
const { loggerMiddleware, logger } = require('./logger');

dotenv.config({ path: '../../.env' });

const server = express();

const env = process.env.NODE_ENV;
const dev = env === 'development';
const port = process.env.PORT || 3000;

const app = next({ dev });
server.next = app;

app.prepare().then(() => {
  server.use(loggerMiddleware.logger);

  server.use(cookieParser());

  server.use(routes(server, app));
  server.use(loggerMiddleware.errorLogger);

  const httpServer = http.createServer(server);

  httpServer.on('error', err => {
    logger.error(`Can't start server on http://localhost:${port} in ${env} environment. %s`, err);
  });

  httpServer.listen(port, () => {
    logger.info(`Ready on http://localhost:${port} in ${env} environment`);
  });
});
