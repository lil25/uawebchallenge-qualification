import Ember from 'ember';

export default Ember.Controller.extend({
    sliderWidth: Ember.computed(function() {
        return this.get('SliderSettings.sliderWidth');
    }),
    sliderHeight: Ember.computed(function() {
        return this.get('SliderSettings.sliderHeight');
    }),
    
    actions: {
        saveSettings: function(sliderWidth, sliderHeight) {
            this.set('SliderSettings.sliderWidth', sliderWidth);
            this.set('SliderSettings.sliderHeight', sliderHeight);
            
            this.transitionToRoute('index');
        }
    }
});
