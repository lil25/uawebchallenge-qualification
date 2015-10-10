import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['swiper-slide'],
    imgUrl: Ember.computed('slide', function() {
        return 'http://lorempixel.com/' + this.get('SliderSettings.sliderWidth') + '/' + this.get('SliderSettings.sliderHeight') + this.get('slide.picUrl');
    }),
    
    addToFavouritesHandler: function() {
        this.sendAction('addToFavourites', this.get('slide.picUrl'));
    },
    
    actions: {
        addToFavourites: function() {
            this.addToFavouritesHandler();
        }
    }
});
