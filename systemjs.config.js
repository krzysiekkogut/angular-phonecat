(function(global) {
  System.config({
    map: {
      rxjs: "/node_modules/rxjs",
      "@angular": "/node_modules/@angular",
      app: "/app",
      "angular2-in-memory-web-api": "/node_modules/angular2-in-memory-web-api",
      "@angular/upgrade/static":
        "/node_modules/@angular/upgrade/bundles/upgrade-static.umd.js"
    },
    packages: {
      app: {
        main: "main.js",
        defaultExtension: "js"
      },

      "@angular/platform-browser": {
        main: "bundles/platform-browser.umd.js"
      },

      "@angular/core": {
        main: "bundles/core.umd.js"
      },

      "@angular/http": {
        main: "bundles/http.umd.js"
      },

      "@angular/compiler": {
        main: "bundles/compiler.umd.js"
      },

      "@angular/compiler-cli": {
        main: "index.js"
      },

      "@angular/router": {
        main: "bundles/router.umd.js"
      },

      "@angular/upgrade": {
        main: "bundles/upgrade.umd.js"
      },

      "@angular/forms": {
        main: "bundles/forms.umd.js"
      },

      "@angular/common": {
        main: "bundles/common.umd.js",
        defaultExtension: "js"
      },

      "@angular/platform-browser-dynamic": {
        main: "bundles/platform-browser-dynamic.umd.js"
      },

      "@angular/platform-server": {
        main: "bundles/platform-server.umd.js"
      },

      rxjs: {
        main: "./index.js",
        defaultExtension: "js"
      },

      "rxjs/operators": {
        main: "./index.js",
        defaultExtension: "js"
      },

      "angular2-in-memory-web-api": {
        main: "./index.js",
        defaultExtension: "js"
      }
    }
  });
})(this);
