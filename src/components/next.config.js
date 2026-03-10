module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
    unoptimized: true,
  },
}