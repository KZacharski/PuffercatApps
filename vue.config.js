module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Puffercat Apps',
      themeColor: '#009473',
      msTileColor: '#001122',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
      manifestOptions: {
        "description": "The full catalog of apps created by Puffercat as well as ones currently in development. You can download all of my Android apps here, from the official source."
      }
  
      // configure the workbox plugin
    /*  workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      } */
    }
  }