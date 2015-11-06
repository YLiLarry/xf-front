import Ember from 'ember';

export default Ember.Controller.extend({
   rootProduct: Ember.inject.controller("root.product"),
   actions: {
      search: function() {
         var keyword = this.get('keyword')
         if (keyword) {
            this.transitionToRoute('root.product');
         }
         this.get('rootProduct').set('keyword', keyword);
      },
      searchKeyUp: function() {
         var keyword = this.get('keyword')
         if (! keyword || keyword.length === 0) {
            this.get('rootProduct').set('keyword', keyword);
         }
      }
   }
});
