if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let a = Promise.resolve();
      return (
        s[e] ||
          (a = new Promise(async (a) => {
            if ("document" in self) {
              const s = document.createElement("script");
              (s.src = e), document.head.appendChild(s), (s.onload = a);
            } else importScripts(e), a();
          })),
        a.then(() => {
          if (!s[e]) throw new Error(`Module ${e} didn’t register its module`);
          return s[e];
        })
      );
    },
    a = (a, s) => {
      Promise.all(a.map(e)).then((e) => s(1 === e.length ? e[0] : e));
    },
    s = { require: Promise.resolve(a) };
  self.define = (a, i, n) => {
    s[a] ||
      (s[a] = Promise.resolve().then(() => {
        let s = {};
        const r = { uri: location.origin + a.slice(1) };
        return Promise.all(
          i.map((a) => {
            switch (a) {
              case "exports":
                return s;
              case "module":
                return r;
              default:
                return e(a);
            }
          })
        ).then((e) => {
          const a = n(...e);
          return s.default || (s.default = a), s;
        });
      }));
  };
}
define("./sw.js", ["./workbox-8778d57b"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/JG1IAIKu9lmL75BkJqHJ_/_buildManifest.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/JG1IAIKu9lmL75BkJqHJ_/_ssgManifest.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url:
            "/_next/static/chunks/2e72cf5b30cda9b5af4adc6148704f96ceaf813d.5858c56812fd1f98de2b.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url:
            "/_next/static/chunks/4e0513b4c0325ae23ba4777dbc251df96fc0713a.cb0fb7c8c25c2f7ef587.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/framework.0c239260661ae1d12aa2.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/main-d6530418cf3be78abed3.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/pages/_app-ca80eabb34721a5f43fb.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/pages/_error-b2e8d81a7624e665d650.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url:
            "/_next/static/chunks/pages/como-incrustar-7ae22cd78545ba936a9a.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/pages/embed-c4e7dfb04b4be85bd7e6.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/pages/index-f3f0b4e1913fdabea90b.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/polyfills-250f16924c392849df26.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/css/05daf97fba1c30e7bc06.css",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/css/1db712a9a43c9d9033aa.css",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/_next/static/css/982805b03e9d956379b7.css",
          revision: "JG1IAIKu9lmL75BkJqHJ_",
        },
        {
          url: "/data/20210104.json",
          revision: "b95028261531b8770b6c10c943ddd809",
        },
        {
          url: "/data/20210104.ods",
          revision: "bdcbf41b7e05e57b4fb56dc74534513d",
        },
        {
          url: "/data/20210107.json",
          revision: "4fc1bda25602c8a917d3e766515c9df5",
        },
        {
          url: "/data/20210107.ods",
          revision: "b8c7c0406a931c8a2f8966334829583b",
        },
        {
          url: "/data/20210108.json",
          revision: "bd661200e00f40864bd446779f0a31bb",
        },
        {
          url: "/data/20210108.ods",
          revision: "d4e27cc79bc72ec871d2bd5f751b192f",
        },
        {
          url: "/data/20210111.json",
          revision: "26ee2b8c51ed7892b955d77ebf59962b",
        },
        {
          url: "/data/20210111.ods",
          revision: "85d1e7c3e6ff3a9afbb9e44e2a4e8733",
        },
        {
          url: "/data/20210112.json",
          revision: "95aabac70eecc12ced6f49d27c677ce4",
        },
        {
          url: "/data/20210112.ods",
          revision: "273a578997a418caa178f3312efa78d3",
        },
        {
          url: "/data/20210113.json",
          revision: "a83a3bf4a186b3115499c9f7db7b9215",
        },
        {
          url: "/data/20210113.ods",
          revision: "6f736f863b441a0f3768439cea77f53a",
        },
        {
          url: "/data/20210114.json",
          revision: "f49e2752d351f8941e7198b6e435816b",
        },
        {
          url: "/data/20210114.ods",
          revision: "77c6aa86fd70cc43cfe90c6ecd690c09",
        },
        {
          url: "/data/20210115.json",
          revision: "b62174a510bd3aab9c3a877c263dd1b3",
        },
        {
          url: "/data/20210115.ods",
          revision: "c117b805dfc60cec90e620fd2dc31e8d",
        },
        {
          url: "/data/20210118.json",
          revision: "22c19eb74b92b1f5bbf584e80f2d7eba",
        },
        {
          url: "/data/20210118.ods",
          revision: "cb6d1c1361ba57c4c33e39268d44e47a",
        },
        {
          url: "/data/20210119.json",
          revision: "f7d8b9296b15abf03744ee2a6eb0b108",
        },
        {
          url: "/data/20210119.ods",
          revision: "cf9b9af29e9ebee43a78ce98c7a0d176",
        },
        {
          url: "/data/20210120.json",
          revision: "43e961d4abc8ed1154b5c537b04859a9",
        },
        {
          url: "/data/20210120.ods",
          revision: "21878c593712fa2c25e153a9b1a4a762",
        },
        {
          url: "/data/20210121.json",
          revision: "af0bc9bc1d2b87d8a0360e77b6118a18",
        },
        {
          url: "/data/20210121.ods",
          revision: "2a7d3a30da2bd46f763d9f7c8a38cb76",
        },
        {
          url: "/data/20210122.json",
          revision: "2c45dad0d0fb151d23b839311a78e2db",
        },
        {
          url: "/data/20210122.ods",
          revision: "1375866e0acb88a5f14544f4ee27a18b",
        },
        {
          url: "/data/20210125.json",
          revision: "538844b29ba0c23ea4db375053bd6bd6",
        },
        {
          url: "/data/20210125.ods",
          revision: "e2685b3793fe30b33446570f60a338d1",
        },
        {
          url: "/data/bbdd.json",
          revision: "c71a1bc8c6e138fdcb91c41d55514139",
        },
        {
          url: "/data/info.json",
          revision: "653f96188374e19b08528c2fe3eb24ef",
        },
        {
          url: "/data/latest.json",
          revision: "538844b29ba0c23ea4db375053bd6bd6",
        },
        { url: "/download.png", revision: "959eb9af48299214f718005ae6cb0bb7" },
        { url: "/embed.png", revision: "b88281243195e405ab1fcb3fb8fa0251" },
        { url: "/favicon.ico", revision: "a9738ede7ed395ba85047a6b765edefc" },
        {
          url: "/health_care.png",
          revision: "1e1d2ed42c4a9af5a8b48a158c240256",
        },
        {
          url: "/icon-144x144.png",
          revision: "c4cf6a2d395df31dbb3d22b3144a354a",
        },
        {
          url: "/icon-192x192.png",
          revision: "4d6b0ae4f9beffb86250e4119439ab5b",
        },
        {
          url: "/icon-36x36.png",
          revision: "70943d3634f14ee9beda15dde7a053a0",
        },
        {
          url: "/icon-48x48.png",
          revision: "e3ba6fccc8d474e1726d88825a2e7f35",
        },
        {
          url: "/icon-512x512.png",
          revision: "3df0d3f8ae93443c2c26299e5e26832e",
        },
        {
          url: "/icon-72x72.png",
          revision: "128557ffcc31396eb9cfcac85d0d3ff6",
        },
        {
          url: "/icon-96x96.png",
          revision: "9e801a89d7ec66405b1cb10187b3896d",
        },
        { url: "/manifest.json", revision: "bceb719e90a3c6243dacb8532cef7fe6" },
        { url: "/mapa.png", revision: "cc5d64ca5cefbabd0e897e32edfe67ba" },
        {
          url: "/moderna-logo.png",
          revision: "07c3a5706cdac049b74134ca05271fbf",
        },
        { url: "/og.png", revision: "e474788b1b12161aba38c791c210cb26" },
        {
          url: "/pfizer-logo.png",
          revision: "14b8411311aac60716a845ef5123150e",
        },
        { url: "/syringe.png", revision: "797dd97785a5b330ba3b405258707554" },
        { url: "/vacuna.png", revision: "ff108a8b5ba8453818662303fa0d49fc" },
        {
          url: "/vacunas-completas.png",
          revision: "a24d739c9fa054c56701c899b9b4a1f4",
        },
        { url: "/vercel.svg", revision: "26bf2d0adaf1028a4d4c6ee77005e819" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
