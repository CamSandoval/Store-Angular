//the pricipal function of typescript is the use of typing between the varables

const username: string | number = 'CamSandoval';
const age : number = 80;

//Also using the typing on a function
const sum = (a: number, b: number)=>{
  return a + b;
}

sum (5,4);


//Sintax of classes in typescript
class Person{
  //Private atributes
  private age:number;
  lastname:string;
  constructor(age:number,lastName:string){
    this.age = age;
    this.lastname=lastName;
  }
  get getAge(){
    return this.age;
  }
}

//other form about class
class Person2{
  constructor(private age:number,public lastName:string){

  }
}
const juan = new Person(15,'Sandoval');
//We couldnt see the aribute age, because it is privete
//juan.age // IN AN ERROR
console.log(juan.getAge);
const david = new Person2(19,'Herrera');


