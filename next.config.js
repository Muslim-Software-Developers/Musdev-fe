module.exports = {
  async rewrites() {
    return [
      {
        source: '/404',
        destination: '/errors/404',
      },
      {
        source: '/error',
        destination: '/errors/_error',
      },
    ];
  },
};