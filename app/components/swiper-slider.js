import Ember from 'ember';

export default Ember.Component.extend({
    swiperInstance: null,
    
    initSlider: function() {
        var self = this;
        var swiper = self.$('.swiper-container')
            .css({
                'width': self.get('SliderSettings.sliderWidth'),
                'height': self.get('SliderSettings.sliderHeight')
            })
            .swiper({
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                onDestroy: function() {
                    setTimeout(function() {
                        self.initSlider();
                    }, 1);
                }
            });
        
        this.set('swiperInstance', swiper);
    }.on('didInsertElement'),
    
    destroySlider: function() {
        var self = this;
        var swiper = self.get('swiperInstance');
        
        if(swiper) {
            swiper.destroy(true, true);
            
        }
    }.observes('slideList.[]')
});
