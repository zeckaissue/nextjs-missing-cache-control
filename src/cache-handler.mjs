import { CacheHandler } from '@neshca/cache-handler';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
CacheHandler.onCreation(async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Let's imagine we're using a map
  // in which values are shared via the network
  // between all your Next.js app instances.
  const cacheStore = new Map();

  const handler = {
    async get(key) {
      console.log('get', key);
      await wait(1000)
      return null
      return await cacheStore.get(key);
    },
    async set(key, value) {
      await cacheStore.set(key, value);
    },
    async revalidateTag(tag) {
      // Iterate over all entries in the cache
      for (const [key, { tags }] of cacheStore) {
        // If the value's tags include the specified tag, delete this entry
        if (tags.includes(tag)) {
          await cacheStore.delete(key);
        }
      }
    },
    // Optional: Implement the delete method
    // if your cache store doesn't support automatic time-based key expiration.
    // It will be called when the get method returns expired data.
    async delete(key) {
      await cacheStore.delete(key);
    },
  };

  return {
    handlers: [handler],
    ttl: { estimateExpireAge: (staleAge) => staleAge * 10 }, // 10 time more than stale age
  };
});

export default CacheHandler;