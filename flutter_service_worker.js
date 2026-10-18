'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "02002fbe340c68790d881299cbda9d12",
"assets/AssetManifest.bin.json": "70e20909b970946caf1151291fb56c0a",
"assets/assets/branding/city-home.png": "90cfa23edf2cbb181b4064670ca6da4e",
"assets/assets/branding/logo-rc.png": "4e99a15dbc123156e126aa942834eef5",
"assets/assets/branding/logo-violet.png": "32ea9e17dfacc9eb75153d8f75f0dc4d",
"assets/assets/branding/welcome-cuautla.png": "993c79934e12e60e17045feec93610bf",
"assets/assets/fonts/Manrope-400.ttf": "b0256c80254625ded1dcdb778066a136",
"assets/assets/fonts/Manrope-500.ttf": "83eacee0e64f00f4d95d34d7b4fc5ffb",
"assets/assets/fonts/Manrope-600.ttf": "884edd41b09969697f5ca2cedc10f461",
"assets/assets/fonts/Manrope-700.ttf": "53551361bbfdf25b0d83922b42f55fc2",
"assets/assets/fonts/Manrope-800.ttf": "53234819989c1e23a9051c29763937e8",
"assets/assets/identity/back.png": "7a18ae6b6ca67d8f23ba4575bcfdc0e4",
"assets/assets/identity/front.png": "628cc7213c43a4384dbc37da16f8f8e8",
"assets/assets/renewal/auth/city.webp": "5efc856e9478608c04adad6a7f8437fc",
"assets/assets/renewal/auth/lock.webp": "ef5ccfdec906d53582f2785bf5e5304f",
"assets/assets/renewal/auth/logo.webp": "435bb90b8c41ba97ec4dfde3cc69dae4",
"assets/assets/renewal/auth/people.webp": "0d20c52eae382ed095f40a3bf00eca68",
"assets/assets/renewal/auth/recovery.webp": "48e437972f134ee1a16c31108dbc252f",
"assets/assets/renewal/auth/reset.webp": "e0d068344aed2a8798cfc0c83c116359",
"assets/assets/renewal/cuautla-cityscape-header.webp": "cd467968d978cf7343fc32df349ff6d0",
"assets/assets/renewal/cuautla-cityscape.png": "90cfa23edf2cbb181b4064670ca6da4e",
"assets/assets/renewal/favicon.svg": "41eaaffbfd91dd864ca21d6e2f5a70c1",
"assets/assets/renewal/icons/3d/activity.webp": "74d3bc31a2c33f13a1c93150618c3e2b",
"assets/assets/renewal/icons/3d/bell-header.webp": "99f5a112655a943b788344c3099e76a5",
"assets/assets/renewal/icons/3d/bell.webp": "c4103fc78c14c320d8567dca375f3168",
"assets/assets/renewal/icons/3d/bulb.webp": "939692e5580a1300a8a695e671f11f69",
"assets/assets/renewal/icons/3d/camera.webp": "32e0b7cf2b4c061ae7bce7bff80caac4",
"assets/assets/renewal/icons/3d/car.webp": "8417d8844c27ed8b37bcd9c429fefecb",
"assets/assets/renewal/icons/3d/cone.webp": "0968c524fbf7f333a731ee9f009d5afc",
"assets/assets/renewal/icons/3d/contact-anonymous.webp": "606f44683ffe17e414d7e974db282a9d",
"assets/assets/renewal/icons/3d/contact-citizen.webp": "64df577c63c1acd8934852106dd1a2f8",
"assets/assets/renewal/icons/3d/contact-phone.webp": "106759e0c84b0ea18d1cf2d22ca6c0d8",
"assets/assets/renewal/icons/3d/contact-plus.webp": "b4d115320438634cc43f83cb99870cfd",
"assets/assets/renewal/icons/3d/contact-police.webp": "73d9d09ee5aff8e33991014f8ec640be",
"assets/assets/renewal/icons/3d/contact-protection.webp": "f15f689111530e255d85b77d00e6cfde",
"assets/assets/renewal/icons/3d/contact-woman.webp": "8e0056f7ff91e8d3db00d15010f47552",
"assets/assets/renewal/icons/3d/emergency.webp": "e21df63e090a81bbd1740aecda0997b4",
"assets/assets/renewal/icons/3d/gallery.webp": "a1cfca4ca7a4bbb64fc3b2eaeafa9812",
"assets/assets/renewal/icons/3d/home.webp": "7a3ddb70cc6d123546d4a67ddd493028",
"assets/assets/renewal/icons/3d/map-white.webp": "76b8ce762c40d462c8c8b4c105d50c6e",
"assets/assets/renewal/icons/3d/map.webp": "70c00006eebff5606668328ca144a476",
"assets/assets/renewal/icons/3d/megaphone-white.webp": "1a6bbbff8e9eb6fa6382ca2b38596156",
"assets/assets/renewal/icons/3d/megaphone.webp": "2163a7a9d76e4aa5f5f26d2837871138",
"assets/assets/renewal/icons/3d/more.webp": "9f17f540f7666518b4c0738fd77ca2de",
"assets/assets/renewal/icons/3d/paw.webp": "743e5e8a078b97e543d23d3e1646577e",
"assets/assets/renewal/icons/3d/pin.webp": "048169c3586b7b65c8dc232d5cbf73dd",
"assets/assets/renewal/icons/3d/plus.webp": "60101fe8db40ef544c0c61114fe6c092",
"assets/assets/renewal/icons/3d/profile-menu.png": "c792e3691d10c7cbf0e3d414a7a13bbd",
"assets/assets/renewal/icons/3d/reports.webp": "d67a2490ac734f034e96807127422aba",
"assets/assets/renewal/icons/3d/robbery.webp": "e2ee3d4ae1561d733e6ecd087bc4a683",
"assets/assets/renewal/icons/3d/shield-header.webp": "791770bd6a89b5ca653047139d6d67fe",
"assets/assets/renewal/icons/3d/shield.webp": "91fb1422dd46bb4c5c1643c126616d9b",
"assets/assets/renewal/icons/3d/spray.webp": "ba485215b551c909ce4344ba17ba851e",
"assets/assets/renewal/icons/3d/user.webp": "53f4d5e10d7978a34706849a8bfd457a",
"assets/assets/renewal/icons/3d/users.webp": "9629154436f65858bba50e834563cd40",
"assets/FontManifest.json": "1587220875f19ced3d64574595719b34",
"assets/fonts/MaterialIcons-Regular.otf": "84133b8880b9b95485bd25bd0a431800",
"assets/NOTICES": "24da5cd57ccdfe5c468b68f113be3d25",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.svg": "fd5b9b115442a9af728448c1360a21bd",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "da77500dc66404a9b830d8ea27429f0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e22f5ec5c98952c921ebeea62ce25357",
"/": "e22f5ec5c98952c921ebeea62ce25357",
"main.dart.js": "810b450dde6204348e02b9810c18ab4b",
"manifest.json": "a7e8e563c2f7120a7d3a484da2ae2195",
"maps/citizen-map.css": "2f3fee8ff424f7412e014a88717abe0b",
"maps/citizen-map.js": "30e9b3acd55e1fe4e02a99db6b7435d7",
"vendor/maplibre-gl-4.7.1/LICENSE.txt": "c73ffe791f71e9dbcf26aeff3d6269ac",
"vendor/maplibre-gl-4.7.1/maplibre-gl.css": "1fa5e6194ed240e1d03a1f886c3f3076",
"vendor/maplibre-gl-4.7.1/maplibre-gl.js": "6ea6d232e156e699ea38efe706c1fa5e",
"version.json": "0509b01b5127315374078d46c3760d9d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
