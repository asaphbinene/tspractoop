"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//Standard decorator
function Logger(constructor) {
    console.log('Logging ...');
    console.log(constructor);
} //Decorator factory
function Muntu() {
    return function (constructor) {
        console.log('Logging ...');
        console.log(constructor);
    };
}
//Calling the decorator factory
let Indivudi = class Indivudi {
    /**
     *
     */
    constructor() {
        this.name = 'Asaph';
        console.log('Create a individu object ...');
    }
};
Indivudi = __decorate([
    Muntu()
    //Calling the decorator standard
    ,
    Logger,
    __metadata("design:paramtypes", [])
], Indivudi);
const pers = new Indivudi();
console.log(pers);
//Using the decorator factory give more possibility to use parametter 
//and argument used of the decorator
//Decorator can be add also to the property, accessor, method
//Decorator run when class is define not instance of class
//The rutern from decorotor at accessor or method has return that type script can use but not at class and property
