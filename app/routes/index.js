import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.peekAll('fav');
    },
    
    setupController: function(controller, model) {
        controller.set('model', model);
    },
    
    clearData: function() {
        this.controllerFor('index').clearData();
    }.on('deactivate')
});
