/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({ modulePathPrefix: "workbox-v3.6.3" });

workbox.core.setCacheNameDetails({ prefix: "gatsby-plugin-offline" });

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    url: "webpack-runtime-b45fb83981524b0827a4.js"
  },
  {
    url: "styles.3b7ecbfc4cee77a322a1.css"
  },
  {
    url: "styles-8d3db5124725dcff78a7.js"
  },
  {
    url: "framework-a38040c4749cf445737f.js"
  },
  {
    url: "532a2f07-90998a82f05212e4338d.js"
  },
  {
    url: "1bfc9850-971af728525fbd8ab97f.js"
  },
  {
    url: "app-55748022add7690abee7.js"
  },
  {
    url:
      "component---node-modules-gatsby-plugin-offline-app-shell-js-09003857852cdd5f749f.js"
  },
  {
    url: "offline-plugin-app-shell-fallback/index.html",
    revision: "cbd1724dd36583de7f978f84a0abd22a"
  },
  {
    url: "page-data/offline-plugin-app-shell-fallback/page-data.json",
    revision: "b5ab388f8273e28df71b718becb9b0fe"
  },
  {
    url: "page-data/sq/d/2220561337.json",
    revision: "da3ac740b678a74b660f0b50b10b9ec5"
  },
  {
    url: "page-data/app-data.json",
    revision: "8a2dcefceef619cb1cff91d63e2b46be"
  },
  {
    url: "polyfill-b4c19884e237349d4e5a.js"
  },
  {
    url: "manifest.webmanifest",
    revision: "f1e81f57fca8d8dbc2a246dddaea8a3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /(\.js$|\.css$|static\/)/,
  workbox.strategies.cacheFirst(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:.*\page-data\/.*\/page-data\.json/,
  workbox.strategies.networkFirst(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
  workbox.strategies.staleWhileRevalidate(),
  "GET"
);
workbox.routing.registerRoute(
  /^https?:\/\/fonts\.googleapis\.com\/css/,
  workbox.strategies.staleWhileRevalidate(),
  "GET"
);

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`);

const { NavigationRoute } = workbox.routing;

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url);
  pathname = pathname.replace(new RegExp(`^`), ``);

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`);
  if (!resources || !(await caches.match(`/app-55748022add7690abee7.js`))) {
    return await fetch(event.request);
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request);
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`;
  return await caches.match(offlineShell);
});

workbox.routing.registerRoute(navigationRoute);

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources));
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear());
  }
};

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data;
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data);
});
