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

const accounting = new Department('D1', 'Accounting');

const mydepartment = new AccountingDepartment('D2', []);

const allDepartment = new ITDepartment('D0', [])


accounting.addEmployee("Asaph");
accounting.addEmployee("Mado Binene");

console.log(accounting);
accounting.describe();
accounting.printEmployeeInfo()


mydepartment.addEmployee("Asaph");
mydepartment.addEmployee('Mado');

mydepartment.addReport('From the last test there something to be monitor');
mydepartment.printReports();
mydepartment.printEmployeeInfo();
