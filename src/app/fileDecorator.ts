//Standard decorator
function Logger(constructor: Function) {
    console.log('Logging ...');
    console.log(constructor);
}//Decorator factory
function Muntu(){
    return function(constructor: Function) {
        console.log('Logging ...');
        console.log(constructor);
    }
}




//Calling the decorator factory
@Muntu()

//Calling the decorator standard
@Logger
class Indivudi {
    name = 'Asaph';

    /**
     *
     */
    constructor() {
       console.log('Create a individu object ...') 
    }
}

const pers = new Indivudi();
console.log(pers);

//Using the decorator factory give more possibility to use parametter 
//and argument used of the decorator
//Decorator can be add also to the property, accessor, method
//Decorator run when class is define not instance of class
//The rutern from decorotor at accessor or method has return that type script can use but not at class and property

