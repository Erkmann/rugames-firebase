export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RUGames',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600&display=swap' },
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-componentseE
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase'
  ],

  bootstrapVue: {
    icons: true
  },

  firebase: {
    config: {
      apiKey: "AIzaSyBhusBI1UAhuabDVXGSAFbQOxcN1_izN6Y",
      authDomain: "rugames-88.firebaseapp.com",
      projectId: "rugames-88",
      storageBucket: "rugames-88.appspot.com",
      messagingSenderId: "685219063149",
      appId: "1:685219063149:web:51acc89c3b41e7deac6664"
    },
    services: {
      auth: true,
      firestore: true
    },
    auth: {
      persistence: 'local', // default
      initialize: {
        onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        onAuthStateChangedAction: 'onAuthStateChangedAction',
        subscribeManually: false
      },
      ssr: false, // default
      emulatorPort: 9099,
      emulatorHost: 'http://localhost',
    },
    firestore: {
      memoryOnly: false, // default
      chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
      enablePersistence: true,
      emulatorPort: 8080,
      emulatorHost: 'localhost',
      settings: {
        // Firestore Settings - currently only works in SPA mode
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
