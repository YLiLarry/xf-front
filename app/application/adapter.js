import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
   urlForFindAll: function(url) {
      return url.replace(/^root\./,'');
   }
});
