"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    /**
     * constractor declaration
     */
    function Department(id, n) {
        this.n = n;
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    //List of tdefined and declared method 
    Department.createEmployee = function (n) {
        return { name: n, d: new Date() };
    };
    Department.prototype.describe = function () {
        console.log("Department: (" + this.id + "): " + this.name);
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
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    /**
     *
     */
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    /**
     *
     */
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        //most secure way initializing properties
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            return 'no report reccorded';
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Asaph') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = 'text';
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee("Jedidah");
var accounting = new Department('D1', 'Accounting');
var mydepartment = new AccountingDepartment('D2', []);
var allDepartment = new ITDepartment('D0', []);
accounting.addEmployee("Asaph");
accounting.addEmployee("Mado Binene");
console.log(Department.createEmployee("Tirzah"));
console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo();
mydepartment.addEmployee("Asaph");
mydepartment.addEmployee('Mado');
mydepartment.mostRecentReport = 'Yeah I add you';
mydepartment.addReport('From the last test there something to be monitor');
console.log(mydepartment.mostRecentReport);
mydepartment.printReports();
mydepartment.printEmployeeInfo();
