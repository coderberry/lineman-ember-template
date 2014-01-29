module("Integration - Index", {
  setup: function() {
    Ember.run(App, App.advanceReadiness);
  },
  teardown: function() {
    App.reset();
  }
});

test("/", function() {
  visit("/");

  andThen(function() {
    equal(find("h1").text(), "Welcome to Ember.js", "Application header is rendered");
  });
});
