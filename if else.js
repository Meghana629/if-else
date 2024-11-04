const score = 85;

const grade = (score >= 90) ? 'A' :
              (score >= 80) ? 'B' :
              (score >= 70) ? 'C' :
              (score >= 60) ? 'D' : 'F';

console.log(`Your grade is: ${grade}`);



const age = 48;

const isAdult = (age >= 18) ? 'You are an adult.' : 'You are not an adult.';
console.log(isAdult);

var day="sunday";
if(day==="saturday" || day==="sunday"){
console.log("its a weekend")
}
else{
     console.log("its not a weekend");
     }

a = 21;
var citizenship=true;
if(age>=18 && citizenship){
    console.log("elgible for voting")
}
else{
    console.log("not elgible for voting")
}

var username=prompt("enter your name");
var password=prompt("enter your password ");

var password="12345";
if((username.toUpperCase()==="ADMIN")&&(password===password)){
    console.log("your logged in successfully ");
}
else{
    console.log("you entered wrong credentials...plz check");
}