/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/testdouble/lineman/blob/master/config/application.coffee
 *   - https://github.com/testdouble/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {

    // API Proxying
    //
    // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
    // port as your lineman development server. By enabling the API proxy and setting the port, all
    // requests for paths that don't match a static asset in ./generated will be forwarded to
    // whatever service might be running on the specified port.
    //
    // server: {
    //   apiProxy: {
    //     enabled: true,
    //     host: 'localhost',
    //     port: 3000
    //   }
    // }

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: false

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: false
    
    loadNpmTasks: ["grunt-ember-templates", "grunt-browserify"],

    appendTasks: {
      common: ["clean:build", "emberTemplates", "build-index", "browserify"]
    },

    watch: {
      js: {
        files: ["app/js/**/*.js"],
        tasks: ["browserify"]
      },
      templates: {
        files: ["app/templates/**/*.hbs"],
        tasks: ["emberTemplates:app", "browserify"]
      }
    },

    emberTemplates: {
      options: {
        templateFileExtensions: ".hbs",
        templateCompilerPath: "bower_components/ember/ember-template-compiler.js",
        handlebarsPath: "bower_components/handlebars/handlebars.js"
      },
      app: {
        options: {
          templateBasePath: "app/templates"
        },
        files: {
          "app/.templates.js": "app/templates/**/*.hbs"
        }
      }
    },

    browserify: {
      options: {
        shim: {
          jquery: {
            path: "bower_components/jquery/jquery.js",
            exports: "jQuery"
          },
          handlebars: {
            path: "bower_components/handlebars/handlebars.runtime.js",
            exports: "Handlebars"
          },
          ember: {
            path: "bower_components/ember/ember.js",
            exports: "Ember",
            depends: {
              handlebars: "Handlebars",
              jquery: "jQuery"
            }
          }
        }
      },
      dev: {
        options: {
          debug: true
        },
        files: {
          "generated/js/app.js": ["app/.index.js"]
        }
      }
    },

    clean: {
      build: ['build']
    }

  }
};
