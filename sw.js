const VERSION = 'v1'

self.addEventListener('install', event => {
  event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
  const request = event.request
  //get
  if (request.method !== 'GET') {
    return
  }

  // buscar en cache
  event.respondWith(cachedResponse(request))

  // Actualizar el cache
  event.waitUntil(updateCache(request))
})

async function precache(){
  const cache = await caches.open('VERSION')
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/03.01.-Configurando Tracks.mp4',
  ])
}

async function cachedResponse (request) {
  const cache = await caches.open('VERSION')
  const response = await cache.match(request)
  return response || fetch(request) // El fetch permite contestar con lo que dio la red ya que no lo tenemos en cache, si no lo hacemos nunca obtendremos resultado
}

// Con esto podemos saber que el usuario siempre estará recibiendo la información actualizada cada vez que se haga un request
async function updateCache (request) {
  const cache = await caches.open('VERSION')
  const response = await fetch(request)
  return cache.put(request, response)
}