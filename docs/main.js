"use strict";
var Department = /** @class */ (function () {
    /**
     *
     */
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var accounting = new Department('Accounting');
accounting.addEmployee("Asaph");
accounting.addEmployee("Mado Binene");
accounting.employees[2] = "Gabriel";
console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo();
