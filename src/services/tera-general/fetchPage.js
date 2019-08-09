const request = require('request-promise-native');

const log = require('../../config/log');
const cache = require('../cache/cache');

async function fetchTeraPage(url, cacheTime = 0, ignoreCache = false) {
  let html;
  try {
    const key = cache.generateKey(url);
    const cachedData = await cache.client.get(key);
    if (cachedData && !ignoreCache) {
      log.debug('[Tera/FetchPage] Returning cached data.', key);
      return cachedData;
    }
    html = await request(url);
    if (cacheTime) {
      if (typeof cacheTime === 'number' && cacheTime > 0) {
        cache.client.set(cache.generateKey(url), html, 'EX', cacheTime);
      } else {
        cache.client.set(cache.generateKey(url), html);
      }
    }
    return html;
  } catch (e) {
    log.error('Failed to fetch page:', url);
    throw e;
  }
}

module.exports = fetchTeraPage;
