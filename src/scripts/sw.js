import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker');
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activate Service worker');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  const isChromeExtensionUrl = event.request.url.indexOf('chrome-extension://');
  if (event.request.method !== 'POST' && isChromeExtensionUrl !== 0) {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
