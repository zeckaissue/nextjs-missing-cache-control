
const nextConfig = {
  /* config options here */
  cacheHandler: require.resolve('./src/cache-handler.mjs'),
  headers: async () => {
    return [
      // {
      //   source: '/isr-page',
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'public, max-age=60, s-maxage=60, stale-while-revalidate=60',
      //     },
      //   ],
      // },
    ];
  }
};

module.exports = nextConfig;
