import Ember from 'ember';

export default Ember.Controller.extend({
   actions: {
      search: function() {
         if (this.get('searchText')) {
            this.transitionToRoute('root.product');
            window.scroll(0,500)
         }
      }
   }
});
