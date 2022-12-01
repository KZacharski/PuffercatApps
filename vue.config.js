module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Puffercat Apps',
      themeColor: '#009473',
      msTileColor: '#001122',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'default',
  
      // configure the workbox plugin
    /*  workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      } */
    }
  }