
var num1 = prompt("Enter The First Number :");
var num2 = prompt("Enter The Second Number :");


// function for addition 
function Add(n1,n2){
    return n1+n2;
}



// function for substraction 
function Substarction(n1,n2){
    return n1-n2;
}



// function for multiplication 
function Multi(n1,n2){
    return n1*n2;
}



// function for divison 
function Div(n1,n2){
    return n1/n2;
}



document.write("Addition Of Numbers :"+Add(num1,num2));
document.write('<br>');
document.write("Multiplication of Numbers :"+Multi(num1,num2));
document.write('<br>');
document.write("Divison of Numbers :"+ Div(num1,num2));
document.write('<br>');
document.write("Substraction of Numbers :" +Substarction(num1,num2))

