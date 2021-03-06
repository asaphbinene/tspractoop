class Department {

    //Class properties declaration
    private id: string;
    public name : string;
    protected employees : string[] = [];

    /**
     * constractor declaration 
     */
    constructor( id: string, public n: string, ) {
        this.name = n;
        this.id = id;
    }

    //List of tdefined and declared method 
    static createEmployee(n: string){
        return { name: n, d : new Date()}
    }
    describe( this: Department ) {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    /**
     *
     */
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;

    //most secure way initializing properties
    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        return 'no report reccorded';
    }

    set mostRecentReport(value : string){
        if(!value){
            throw new Error("Please a value for this value is mandataory")
        }
        this.addReport(value)
    }
    /**
     *
     */
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string){
        if(name === 'Asaph'){
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = 'text';
    }

    printReports(){
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee("Jedidah")

const accounting = new Department('D1', 'Accounting');

const mydepartment = new AccountingDepartment('D2', []);

const allDepartment = new ITDepartment('D0', [])


accounting.addEmployee("Asaph");
accounting.addEmployee("Mado Binene");
console.log(Department.createEmployee("Tirzah"))

console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo()


mydepartment.addEmployee("Asaph");
mydepartment.addEmployee('Mado');

mydepartment.mostRecentReport = 'Yeah I add you';
mydepartment.addReport('From the last test there something to be monitor');
console.log(mydepartment.mostRecentReport);
mydepartment.printReports();
mydepartment.printEmployeeInfo();
