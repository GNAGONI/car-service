const pages = require('./pages');

const webPackageJson = require('../package.json');
const { maxAge } = require('./middlewares');

module.exports = server => {
  server.get('/_next/static/*', maxAge(2628000));

  /**
   * Prevent indexation from search engines
   * (out of 'production' environment)
   */
  server.get('/robots.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (process.env.NODE_ENV !== 'production' || process.env.ROBOTS_DISALLOW) {
      res.send('User-agent: *\nDisallow: /');
    } else {
      res.send('User-agent: *\nAllow: /');
    }
  });

  // TODO: remove healthcheck endpoint
  server.get('/health', (req, res) => {
    const webPackageVersion = webPackageJson.version;
    const apiClientPackageVersion = webPackageJson.dependencies['@car-service/api-client'];
    const commonPackageVersion = webPackageJson.dependencies['@car-service/common'];
    const reduxPackageVersion = webPackageJson.dependencies['@car-service/redux'];

    res.status(200).json({
      '@car-service/web': webPackageVersion,
      '@car-service/api-client': apiClientPackageVersion,
      '@car-service/common': commonPackageVersion,
      '@car-service/redux': reduxPackageVersion,
    });
  });

  return pages.getRequestHandler(server.next);
};
