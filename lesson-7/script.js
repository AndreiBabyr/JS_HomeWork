function Cat() {
    
    var foodAmount = 50;
    
    function formatFoodAmount(foodAmount) {
       return foodAmount + ' ' + 'гр';
    }
    
    this.feed = function() {
        console.log('Насыпаем в миску' + this.formatFoodAmount() + 'корма.')
        
    };

    this.dailyNorm = function() {
        if (!arguments.lenght) return this.feed();

        if (foodAmount < 50) {
            throw new Error('Корма мало !');
        }

        if (foodAmount > 100) {
            throw new Erorr('Корма уже много !');

        } 
        
        dailyNorm = foodAmount;
    };    
}


var eatCat = new Cat(); 
eatCat.dailyNorm = 99; 
 
console.log(eatCat.dailyNorm);

