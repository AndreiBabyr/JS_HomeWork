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