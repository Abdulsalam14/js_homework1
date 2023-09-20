//1

function BlackBackground(){
    if(confirm("Press OK change background color.") ==true){
        document.getElementById("body").style.backgroundColor="black";
    }
    else{
        alert("Canceled.")
    }
}

//2

function CheckAge(){
    var result=prompt("Enter age:");
    if(result!=null){
        let age=Number.parseInt(result);
        if(isNaN(age)){
            alert("Enter age!");
        }
        else if(age<18){
            alert("Your age is less than 18");
        }
        else{
            alert("Welcome")
        }
    }
}


//3

class Person{
    constructor(name,surname,password){
        this.name=name;
        this.surname=surname;
        this.password=password;
    }
    getfullname(){
        return this.name+" "+this.surname;
    }
}

let person1=new Person("person1","person10","12345");


function PrintFullname(){
    let newtext=document.createElement("p");
    newtext.innerHTML=person1.getfullname();
    newtext.style.textTransform="uppercase";
    document.body.appendChild(newtext);
}
