"use strict";
class Department {
    /**
     * constractor declaration
     */
    constructor(id, n) {
        this.n = n;
        this.employees = [];
        this.name = n;
        this.id = id;
    }
    //List of tdefined and declared method 
    static createEmployee(n) {
        return { name: n, d: new Date() };
    }
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    /**
     *
     */
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    /**
     *
     */
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //most secure way initializing properties
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        return 'no report reccorded';
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name === 'Asaph') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = 'text';
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Jedidah");
const accounting = new Department('D1', 'Accounting');
const mydepartment = new AccountingDepartment('D2', []);
const allDepartment = new ITDepartment('D0', []);
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
