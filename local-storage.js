define(function() {
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

  return {
    create: LocalStorage.create,
    read: LocalStorage.read,
    remove: LocalStorage.remove
  };

});
