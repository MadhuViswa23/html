function validateForm() 
{
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  
  if (name === "") 
  {
    alert("Name cannot be empty");
    return false;
  
  } else if (password.length < 6)
   {
    alert("Password must be at least 6 characters long");
    return true;
  
  } 
  return true;
}





















/*for(let i=0;i<=100;i++)
{
let output="";
if(i % 3 === 0){
   output += i + "FIZZ" 
}
else if(i % 5 === 0){
   output+= i + "BUZZ" 
}
else if (i % 3 === 0 &&   i % 5 ===0)
{
   output+= i + "FIZZBUZZ" 
}
else{
    console.log("no")
}
}




let sum = 0;

for (let i = 1; i < 10; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}

console.log("The sum of multiples of 3 and 5 under 10 is:", sum);








var student=["Madhu" "preethi", "pradeep", "prakash","jeni","siyana"];
document.write(student);
num1= 12;
num2= 23;
if(num1>num2){
  document.write("num1 is largest num");
}
if(num1<num2){
  document.write("num2 is largest num");
}
else{
  document.write("num1 and num2 are equal when num1==num2")
}







const week = "thursday";
switch (week) {
  case "monday":
    console.log(" red dress.");
    break;
  case "tuesday":
    console.log("white dress");
    break; 
  case "wednesday":
    console.log("black dress");
    break;
  case "thursday":
    console.log("purple dress");
    break;
  case "friday":
    console.log("yellow dress");
    break;
  case "saturday":
    console.log("orange dress");
    break;
  case "sunday":
    console.log("green dress");
    break;
  default:
    console.log("Invalid day entered.");
    break;
}





for(let i=0;i<=15;i++)
{
if(i % 2 === 0){
    console.log(i +   " even");
}
  else{
    console.log(i +  "  odd");
  }
}





const num1 = 3;
const num2 = -7;
const num3 = 2;
const product = num1 * num2 * num3;


if (product > 0) 
{

 alert( "The sign is + ");
} else if (product < 0)
 {

 alert( "The sign is -");
} 






const input= 4;

if (input < 0) {
  console.log("consider as negative number");
} else if (input >0){


console.log("consider as positive  number");
}
 
document.getElementById("demo").innerHTML = input;*/

/*ex2*/

