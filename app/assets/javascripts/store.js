Reciclame.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.extend({
    url: 'http://' + window.location.host
  })
});

