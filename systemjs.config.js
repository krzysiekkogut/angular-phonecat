(function(global) {
  System.config({
    paths: {
      "npm:": "/node_modules/"
    },
    map: {
      rxjs: "npm:/rxjs",
      "@angular": "npm:@angular",
      app: "/app",
      "angular2-in-memory-web-api": "npm:angular2-in-memory-web-api"
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
