export class Person {
    firstname : string = "John";
    lastname : string = "Doe";
    age : number = 25;
    static COUNTRY : string = "Thailand";

    getFullName(){
        return `${this.firstname} ${this.lastname}`;
        
    }
    setAge(age:number){
        return this.age = age;
    }
    getAge(){
        return this.age
    }
}