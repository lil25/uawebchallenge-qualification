import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
    sliderWidth: config.defaultWidth,
    sliderHeight: config.defaultHeight
});
