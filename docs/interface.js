"use strict";
let firstWorker;
firstWorker = {
    name: 'Baraka',
    age: 13,
    gender: 'Male',
    firstDay: new Date(),
    introduction(profile) {
        console.log('My name is ' + this.name + ' ' + profile + ' ' + this.firstDay);
    }
};
firstWorker.introduction('I started working here on');
class Job {
    /**
     *
     */
    constructor(n, m, l, string, x, y, z) {
        this.assignmentNumber = n;
        this.duration = m;
        this.description = l;
        this.status = string;
    }
    //name: string;
    //age: number;
    //gender: string;
    //firstDay: Date;
    introduction(profile) {
        return;
    }
    //firstName: string;
    //MiddleName: string;
    //lastName: string;
    displayFullNames(first, middle, last) {
        return;
    }
    ;
    get name() {
        if (this.name) {
            return this.name;
        }
        return this.firstName;
    }
    set name(value) {
        if (!value) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.name = value;
    }
    get gender() {
        if (this.gender) {
            return this.gender;
        }
        return 'M';
    }
    set gender(value) {
        if (!value) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.gender = value;
    }
    get firstDay() {
        if (this.firstDay) {
            return this.firstDay;
        }
        return new Date();
    }
    set firstDay(value) {
        if (!value) {
            this.firstDay = new Date();
        }
        this.firstDay = value;
    }
    get age() {
        if (this.age) {
            return this.age;
        }
        return 0;
    }
    set age(x) {
        if (!x) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.age = x;
    }
    get firstName() {
        if (this.firstName) {
            return this.firstName;
        }
        return 'no report reccorded';
    }
    set firstName(z) {
        if (!z) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.firstName = z;
    }
    get middleName() {
        if (this.middleName) {
            return this.middleName;
        }
        return 'no report reccorded';
    }
    set middleName(z) {
        if (!z) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.middleName = z;
    }
    get lastName() {
        if (this.middleName) {
            return this.lastName;
        }
        return 'no report reccorded';
    }
    set lastName(z) {
        if (!z) {
            throw new Error("Please a value for this value is mandataory");
        }
        this.lastName = z;
    }
}
let add;
add = (firstInput, secondInput) => {
    return firstInput + secondInput;
};
