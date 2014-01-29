/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/testdouble/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    // As an example, to override the file patterns for
    // the order in which to load third party JS libs:
    js: {
      spec: [
        "bower_components/qunit/qunit/qunit.js",
        "bower_components/sinon/lib/sinon.js",
        "spec/helpers/**/*.js",
        "spec/**/*.js"
      ]
    }

  };
};
