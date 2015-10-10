import Ember from 'ember';

export default Ember.Component.extend({
    selectCategoryHandler: function() {
        this.sendAction('selectCategory', this.$('select').val());
    },
    
    actions: {
        selectCategory: function() {
            this.selectCategoryHandler();
        }
    }
});
