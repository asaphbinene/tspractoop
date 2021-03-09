"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("at done");
    }, 2000);
});
promise.then(function (data) {
    data.split('');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
var mergeObj = merge({ name: 'Max' }, { age: 30 });
function countAndDescribe(element) {
    var descriptionText = 'Go no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStorage.prototype.getItems = function () {
        return __spreadArray([], this.data);
    };
    return DataStorage;
}());
var textStorage = new DataStorage();
textStorage.addItem('Asaph');
textStorage.addItem('Binene');
textStorage.addItem('Mado');
textStorage.removeItem('Binene');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// Generic type is flexible then union type
