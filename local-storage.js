define(['jquery'], function() {
  var LocalStorage = {
    create: function(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    read: function(key) {
      return $.parseJSON(localStorage.getItem(key));
    },
    remove: function(key) {
      localStorage.removeItem(key);
    }
  };
});
