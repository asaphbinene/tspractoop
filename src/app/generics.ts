const names : Array<string> = [];
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("at done")
    }, 2000)
})

promise.then(data =>{
    data.split('');
})

function merge<T, U>(objA: T, objB: U){
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Max'}, {age: 30});

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T){
    let descriptionText = 'Go no value';
    if(element.length === 1){
        descriptionText = 'Got 1 element.';
    } else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Asaph');
textStorage.addItem('Binene');
textStorage.addItem('Mado');
textStorage.removeItem('Binene')
console.log(textStorage.getItems());

interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title =  title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}
// Generic type is flexible then union type
