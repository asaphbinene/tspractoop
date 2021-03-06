"use strict";
var firstWorker;
firstWorker = {
    name: 'Baraka',
    age: 13,
    gender: 'Male',
    firstDay: new Date(),
    introduction: function (profile) {
        console.log('My name is ' + this.name + ' ' + profile + ' ' + this.firstDay);
    }
};
firstWorker.introduction('I started working here on');
var Job = /** @class */ (function () {
    /**
     *
     */
    function Job(n, m, l, string, x, y, z) {
        this.assignmentNumber = n;
        this.duration = m;
        this.description = l;
        this.status = string;
    }
    //name: string;
    //age: number;
    //gender: string;
    //firstDay: Date;
    Job.prototype.introduction = function (profile) {
        return;
    };
    //firstName: string;
    //MiddleName: string;
    //lastName: string;
    Job.prototype.displayFullNames = function (first, middle, last) {
        return;
    };
    ;
    Object.defineProperty(Job.prototype, "name", {
        get: function () {
            if (this.name) {
                return this.name;
            }
            return this.firstName;
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "gender", {
        get: function () {
            if (this.gender) {
                return this.gender;
            }
            return 'M';
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.gender = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "firstDay", {
        get: function () {
            if (this.firstDay) {
                return this.firstDay;
            }
            return new Date();
        },
        set: function (value) {
            if (!value) {
                this.firstDay = new Date();
            }
            this.firstDay = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "age", {
        get: function () {
            if (this.age) {
                return this.age;
            }
            return 0;
        },
        set: function (x) {
            if (!x) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.age = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "firstName", {
        get: function () {
            if (this.firstName) {
                return this.firstName;
            }
            return 'no report reccorded';
        },
        set: function (z) {
            if (!z) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.firstName = z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "middleName", {
        get: function () {
            if (this.middleName) {
                return this.middleName;
            }
            return 'no report reccorded';
        },
        set: function (z) {
            if (!z) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.middleName = z;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "lastName", {
        get: function () {
            if (this.middleName) {
                return this.lastName;
            }
            return 'no report reccorded';
        },
        set: function (z) {
            if (!z) {
                throw new Error("Please a value for this value is mandataory");
            }
            this.lastName = z;
        },
        enumerable: false,
        configurable: true
    });
    return Job;
}());
var add;
add = function (firstInput, secondInput) {
    return firstInput + secondInput;
};
