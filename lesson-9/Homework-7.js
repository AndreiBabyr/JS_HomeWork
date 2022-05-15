// Функциональный стиль.

function Animal(name) {
    var foodAmount = 50;

    var self = this;
   
    function formatFoodAmount()  {
       return foodAmount + 'гр.';
        
    }
 
    self.dailyNorm = function(amount) {
        if ( !arguments.length ) return formatFoodAmount();

        if ( amount < 50 ) {
            throw new Error ( 'Корма мало !');
        }

        if ( amount > 100 ) {
            throw new Error ( 'Слишком много корма !' );
        }
        
        foodAmount = amount;
    };
    
    this.name = name;
    
    self.feed = function() {
        console.log( 'Насыпаем в миску' + ' ' + self.dailyNorm() + ' ' + 'корма.' );
    };
    
}

function Cat(name) {
    Animal.apply(this, arguments);

var animalFeed = this.feed;
this.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
    return this;
    };

this.stroke = function() {
    console.log('Гладим кота');
    return this;
    };
    
}

var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(80));
barsik.feed().stroke();

// Прототипный стиль.

function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function() {
       return this._foodAmount + 'гр.';
        
    }
 
Animal.prototype.dailyNorm = function(amount) {
        if ( !arguments.length ) return this._formatFoodAmount();

        if ( amount < 50 ) {
            throw new Error ( 'Корма мало !');
        }

        if ( amount > 100 ) {
            throw new Error ( 'Слишком много корма !' );
        }
        
        this._foodAmount = amount;
    };
    
Animal.prototype.feed = function() {
        console.log( 'Насыпаем в миску' + ' ' + this.dailyNorm() + ' ' + 'корма.' );
    };
    

function Cat(name) {
    Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.constructor = Cat;

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
    };

Cat.prototype.stroke = function() {
    console.log('Гладим кота');
    return this;
    };
 
var barsik = new Cat('Барсик');

console.log(barsik.dailyNorm(80));
barsik.feed().stroke();