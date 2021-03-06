interface Person {
    name: string;
    age: number;
    gender: string;
    firstDay: Date;

    introduction(profile: string): void;
}

let firstWorker : Person;

firstWorker = {
    name : 'Baraka',
    age : 13,
    gender: 'Male',
    firstDay: new Date(),
    introduction(profile: string) {
        console.log('My name is ' + this.name + ' ' + profile + ' '  + this.firstDay)
    }
}

firstWorker.introduction('I started working here on');

interface FullNames {
    firstName: string;
    middleName: string;
    lastName: string;
    displayFullNames(first: string, middle: string, last: string): void;
}

interface Assigned extends FullNames{
    assignmentNumber: number;
    duration: number;
    description: string;
    status: string;
}

class Job implements Person, Assigned{
    //name: string;
    //age: number;
    //gender: string;
    //firstDay: Date;

    introduction(profile: string){
        return;
    }
    assignmentNumber: number;
    duration: number;
    description: string;
    status: string;
    //firstName: string;
    //MiddleName: string;
    //lastName: string;
    displayFullNames(first: string, middle: string, last: string) {
        return;
    };

    get name() {
        if(this.name){
            return this.name;
        }
        return this.firstName;
    }

    set name(value : string){
        if(!value){
            throw new Error("Please a value for this value is mandataory")
        }
        this.name = value;
    }

    get gender() {
        if(this.gender){
            return this.gender;
        }
        return 'M';
    }

    set gender(value : string){
        if(!value){
            throw new Error("Please a value for this value is mandataory")
        }
        this.gender = value;
    }

    get firstDay() {
        if(this.firstDay){
            return this.firstDay;
        }
        return new Date();
    }

    set firstDay(value: Date){
        if(!value){
            this.firstDay = new Date();
        }
        this.firstDay = value;
    }

    get age() {
        if(this.age){
            return this.age;
        }
        return 0;
    }

    set age(x : number){
        if(!x){
            throw new Error("Please a value for this value is mandataory")
        }
        this.age = x;
    }


    get firstName() {
        if(this.firstName){
            return this.firstName;
        }
        return 'no report reccorded';
    }

    set firstName(z: string){
        if(!z){
            throw new Error("Please a value for this value is mandataory")
        }
        this.firstName = z;
    }

    get middleName() {
        if(this.middleName){
            return this.middleName;
        }
        return 'no report reccorded';
    }

    set middleName(z: string){
        if(!z){
            throw new Error("Please a value for this value is mandataory")
        }
        this.middleName = z;
    }

    get lastName() {
        if(this.middleName){
            return this.lastName;
        }
        return 'no report reccorded';
    }

    set lastName(z: string){
        if(!z){
            throw new Error("Please a value for this value is mandataory")
        }
        this.lastName = z;
    }
    
    /**
     *
     */
    constructor(n: number, m: number, l: string, string: string, x: number, y: Date, z: string) {
        this.assignmentNumber = n;
        this.duration = m;
        this.description = l;
        this.status = string;
    }
}

//Interface as anonimous function/interface
interface AddFunction{
    (a: number, b: number): number;
}

let add: AddFunction;
add = (firstInput: number, secondInput: number) => {
    return firstInput + secondInput;
}

//Optional variable in interface or class
interface MyOptionProperty {
    list?: [];
    str?: string;
}