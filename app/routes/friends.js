import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('friend');
  },
  actions: {
    save: function(){
      console.log('+--- save action bubbled up to friends route');
      return true;
    },
    cancel: function() {
      console.log('+--- cancel action bubbled up to friends route');
      return true;
    },
    delete: function(friend) {
      friend.destroyRecord().then(() => {
        this.tranitionTo('friends.index');
      });
    }
  }
});
