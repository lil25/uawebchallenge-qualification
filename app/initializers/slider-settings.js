import SliderSettings from '../services/slider-settings';

export function initialize(container, application) {
    var sliderSettings = SliderSettings.create();
    
    application.register('slider-settings:current', sliderSettings, {
        instantiate: false
    });

    application.inject('component', 'SliderSettings', 'slider-settings:current');
    application.inject('controller', 'SliderSettings', 'slider-settings:current');
    application.inject('route', 'SliderSettings', 'slider-settings:current');
}

export default {
    name: 'slider-settings',
    initialize: initialize
};
