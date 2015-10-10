import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
    currentState: 'all',
    isFavourites: Ember.computed.equal('currentState', 'favourites'),
    isAll: Ember.computed.equal('currentState', 'all'),
    currentCategory: config.defaultCategory,
    categories: [
        {
            id: 'sports',
            name: 'Спорт'
        },
        
        {
            id: 'food',
            name: 'Їжа'
        },
        
        {
            id: 'city',
            name: 'Міста'
        },
        
        {
            id: 'transport',
            name: 'Транспорт'
        },
        
        {
            id: 'technics',
            name: 'Техніка'
        },
        
        {
            id: 'cats',
            name: 'Кошенятки'
        }
    ],
    slideList: Ember.computed('currentCategory', 'isFavourites', function() {
        var tmpArray = [];
        
        if(this.get('isFavourites')) {
            tmpArray = this.get('model');
        }
        else {
            for(let i = 0; i < config.defaultQuantity; i++) {
                tmpArray.push({picUrl: '/' + this.get('currentCategory') + '/' + (i + 1)});
            }
        }
        
        return tmpArray;
    }),
    
    clearData: function() {
        this.set('currentCategory', config.defaultCategory);
    },
    
    setStateHandler: function(state) {
        this.set('currentState', state);
    },
    
    addToFavouritesHandler: function(imgUrl) {
        this.store.createRecord('fav', {
            id: Math.random().toString(32).slice(2) + Date.now() + Math.random().toString(32).slice(2),
            picUrl: imgUrl
        });
    },
    
    selectCategoryHandler: function(category) {
        this.set('currentCategory', category);
    },
    
    actions: {
        setState: function(state) {
            this.setStateHandler(state);
        },
        
        addToFavourites: function(imgUrl) {
            this.addToFavouritesHandler(imgUrl);
        },
        
        selectCategory: function(category) {
            this.selectCategoryHandler(category);
        }
    }
});
