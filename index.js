let personm_1={
    firstName:"Abu Al Shahriar",
    lastName:"Rifat",
    dob:'11-13-1995',
    fuulName:function(){
        console.log(
            `First-Name:${this.firstName}
            Last-Name:${this.lastName}
            `
            )
    }

}

let person_2={
    firstName:"Kifawat",
    lastName:"Shawnewaz",
    fullName:()=>{
        console.log(`FirstName:${this.firstName}
        lastName:${this.lastName}`
        )
    }
}


class person{
   constructor(f_name,l_name,date_B){
      this.firstName=f_name;
      this.lastName=l_name;
      this.dob=date_B;
     
   }
    CalculateAge(){
    let birthday=new Date(this.dob);
    let diff=Date.now()-birthday.getTime();
    let ageDate=new Date(diff);
    return Math.abs(ageDate.getUTCFullYear()-1970);
   }
   CallculatingMyage(curerentAge){
    console.log(`My age is ${curerentAge-this.dob}`)
   }

}

let p1=new person("Abu Al Shahriar","Rifat",'11-30-1998');
let p2=new person("Shahriar","Rifat",1998)
let MyAge=p1.CalculateAge();
console.log(p1.firstName);
console.log(MyAge)
let age=p2.CallculatingMyage(2023);
console.log(age);

class Person{
    constructor(f_name,l_name){
        this.firstName=f_name;
        this.lastName=l_name;
    }

    getName(){
        return `Hello ${this.firstName} ${this.lastName}`
    }

    static test(){
        console.log("I am testing");
    }
}

class Customer extends Person{
    constructor(f_name,l_name,phone,membership){
        super(f_name,l_name);
        this.phone=phone;
        this.membership=membership;
    }
    MyShopping(){
        console.log(`I have bought ${this.phone} 
        and I have got ${this.membership}`)
    }
}


let C1=new Customer('Shahriar','Rifat','poco x2,','web_dev_membership');
console.log(C1.firstName);
console.log(C1.membership);
console.log(C1.getName());
console.log(C1.MyShopping());

let staticExam=new Person("Abu Al Shahriar","Rifat");
console.log(Person.test());




