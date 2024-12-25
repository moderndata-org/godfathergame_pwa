'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "327bd0966ec8f082bf842d72732f5766",
"assets/AssetManifest.bin.json": "31bd82d6e9a468ddfd03a698c3fbfdef",
"assets/AssetManifest.json": "b6592b9e83a9ba91b6f268d091604e05",
"assets/FontManifest.json": "8d2df29d5c53c72e729d235dfe58e15e",
"assets/fonts/MaterialIcons-Regular.otf": "3e94f18186cdcca01263beff2b930435",
"assets/lib/assets/fonts/almarai_extra_bold.ttf": "5270f5e7ab01259e282604276871946f",
"assets/lib/assets/fonts/almarai_regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/lib/assets/fonts/CinemaFont.ttf": "2f6586493bff79458403588692558b7e",
"assets/lib/assets/fonts/iransans.ttf": "550e81f9cd5c875d772e8a97e19bbef4",
"assets/lib/assets/images/a.jpg": "a8a808b7233befe7bd1881b0ae3aa0fb",
"assets/lib/assets/images/a.png": "ae7ee08a7e1384f1c06ae507d53d326f",
"assets/lib/assets/images/back-1.jpg": "d7564cee767021ed9c6e219a3763a595",
"assets/lib/assets/images/bazpors.jpg": "9c36e104efd93fd5766141456de84ae2",
"assets/lib/assets/images/bazpors_back.png": "9b2d6af64e87f3cc16573c610069ba03",
"assets/lib/assets/images/bg_front.png": "88c7085589b48029d03f9b95f20b9b2c",
"assets/lib/assets/images/bg_frontCard.png": "f8f6cbd33493d58bdfe39694ffcf560d",
"assets/lib/assets/images/bg_leader_board.svg": "e62ed1abe6e8b8bce4fb20beff4c937a",
"assets/lib/assets/images/black_man.jpg": "1bc7ceb1df605347ae86e97806783d4b",
"assets/lib/assets/images/bot.png": "61d34d8cd8df52c7d6cc38de589620fc",
"assets/lib/assets/images/champion.png": "841e7e504b16422a1d80ed2e1d8c346c",
"assets/lib/assets/images/citizen.png": "2c0349c93d33ee42676c6b0dd8979dc9",
"assets/lib/assets/images/crown.svg": "f535f2421b1e3fcd15d386eb87ce47f2",
"assets/lib/assets/images/doctor.png": "6164485338a9ed8ae0f803896b289e99",
"assets/lib/assets/images/doctor_bazpors.jpg": "06ab8ac78dac3f72fecf1918f8b4c953",
"assets/lib/assets/images/dollar.png": "0c1d4e1700f745b628fcac96fa5ae5dc",
"assets/lib/assets/images/gift_code.png": "ffab2e73afed4048038feef4cda03700",
"assets/lib/assets/images/girl.png": "30cf15eaaa36422fabe318fd653e6459",
"assets/lib/assets/images/godfather.png": "44a94a2f783e88fdfa4cc7e332640470",
"assets/lib/assets/images/godFather_back.png": "25b25b6c87f70e1c82440d79b1ded912",
"assets/lib/assets/images/godfhater.jpg": "734d9cad67f4b2664caaedd0842f8003",
"assets/lib/assets/images/goodman.png": "e32ec232187bc6251ec9cd00e809aca2",
"assets/lib/assets/images/hamsharikin.jpg": "c7e8f6883e4263cf03f148a9f00ebef3",
"assets/lib/assets/images/images1.png": "60abbdd9bb21332a167bd26d7ec98d16",
"assets/lib/assets/images/jack.jpg": "91cb749d7dc6c09ab0439ce7bf58e193",
"assets/lib/assets/images/karagah.jpg": "046e6a0c97a6db8aa8c6cbec596ea870",
"assets/lib/assets/images/keine.png": "c9eebb22227956bfc2abd57fbc6cdc2d",
"assets/lib/assets/images/konstantin.png": "c0dabb0feb5677f69bfcba735d26a158",
"assets/lib/assets/images/leon.png": "d3ec148a003b5810b001bfb3d2943eb5",
"assets/lib/assets/images/mafia.jpg": "810496b946fade6e990ba417005e4694",
"assets/lib/assets/images/mafia.png": "3cae1c0415bd2c729ba683868c460edd",
"assets/lib/assets/images/mafia_head.jpg": "0256f457bdbf3ed0b40209d2471082db",
"assets/lib/assets/images/mafia_nights_back.png": "e4ae9f9c953a79f92c5286037ead8b10",
"assets/lib/assets/images/man.png": "21f6d679471028df54cba483e8f229f3",
"assets/lib/assets/images/matador.png": "c50f04a3b6c0fbd606d9d5ed8194c21a",
"assets/lib/assets/images/mohaghegh.jpg": "e9f586a8ef93358c6de4ba22101de837",
"assets/lib/assets/images/nato.jpg": "b60704dd2943fccc7530cb1b1628702c",
"assets/lib/assets/images/nostradamos.png": "4bbab2784c7c4d862f87e6218317641b",
"assets/lib/assets/images/profile_image.png": "60c70b0f421792599a126305b83ae91e",
"assets/lib/assets/images/Removal.png": "1f542cf2919c3874e1afb152eb92bec1",
"assets/lib/assets/images/roeintan.jpg": "802d5f2949dc44dc225f2b2ffad1b2d6",
"assets/lib/assets/images/shayad.jpg": "48321664f8e28f7ed964b53b420c46d1",
"assets/lib/assets/images/sniper.jpg": "14f8da38c0de67cc6d28c81145ebb682",
"assets/lib/assets/images/street.jpg": "f9ca31b454131187f1e780b2b322fbb9",
"assets/lib/assets/lottie/ic_empty.json": "1364b16f8027360deb948ed969ab0f40",
"assets/lib/assets/lottie/ic_empty_cafe.json": "a756eb5e58aeb93b5640f611cd8d17d0",
"assets/lib/assets/svgs/bg_selected_bottom_nav.svg": "10bb5e9a0fa5e151e940567e736a10e7",
"assets/lib/assets/svgs/bg_wheel.svg": "00f9971789224ce5f9fcca25d6f1d660",
"assets/lib/assets/svgs/ic_course.svg": "879340f8fae94b8e4c15ee0e64b2d8d3",
"assets/lib/assets/svgs/ic_delete.svg": "42f1c228346a69d8b2e4c44af490f0f4",
"assets/lib/assets/svgs/ic_fact.svg": "88e5a030dfdaa3d8d3f4ed3b5fdd8493",
"assets/lib/assets/svgs/ic_game.svg": "584bcdbef6ccad7a44877df015e88051",
"assets/lib/assets/svgs/ic_gift_code.svg": "d9682baf2d7591dd9bd44bc3eceeecd2",
"assets/lib/assets/svgs/ic_home.svg": "71075069443ea66e99753a627d3a8ea9",
"assets/lib/assets/svgs/ic_person.svg": "282e4b3de6f97b69effb545d6630614c",
"assets/lib/assets/svgs/send.svg": "dfd74b429f814f3130cf97cc9a03a8cf",
"assets/lib/assets/svgs/table_leg.svg": "d66419401bba10a5e30c9ccc55402505",
"assets/lib/assets/svgs/wheel_cursor.svg": "f97eb91d54dc528a1660ac7ffa8b7167",
"assets/NOTICES": "5f3a6db4a0dbb572228e5e60fc7c98e9",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d3d82f277bbf00fe47a78e5135e57433",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0d8cf79cca6c2bf5cd33b3a64a755c6b",
"icons/Icon-192.png": "943159fb490ea5b8db9bc556729605d8",
"icons/Icon-512.png": "eabf8234bf1d59711b4132cddc9d12fe",
"icons/Icon-maskable-192.png": "943159fb490ea5b8db9bc556729605d8",
"icons/Icon-maskable-512.png": "eabf8234bf1d59711b4132cddc9d12fe",
"index.html": "64281b5e422a6babd14a3c60a7b5b4de",
"/": "64281b5e422a6babd14a3c60a7b5b4de",
"main.dart.js": "9bd305d3a23e94e6625f93cca071919d",
"manifest.json": "af3bcd1d05e4040174d1a7b4639e308a",
"version.json": "72702f5cd3632d23a75660c2c4b30362"};
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
