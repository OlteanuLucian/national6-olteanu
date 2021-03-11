console.log("JavaScript-ES6");
//var a will be declared first
console.log(a);
var a=6;
a=7;
console.log(a);

//console.log(b);
let b;
//console.log(b);
b=7;
//console.log(b);

var a =6;
console.log(a);


//scoping = let are scope la nivel de block
let c= "a sentence";
console.log(c);
if (true){
   let c = "a word";
  console.log(c);//scop intern
  //console.log(a);
}
console.log(c);//scop extern


//var are scope la nivel de functie si nu la nivel de block
var x = "a text";
console.log(x);
if (true){//code block
   var x = "a number";
  console.log(x);
}//code block
console.log(x);




var y =1;
function increment(){//function block
  var y = 2;
  y++;
  console.log(y);
}//function block
increment();
console.log(y);//print 3 apoi 1



//---------------function variations

//named function 
function namedFunction(a,b){
  //...instructions
  return;
}

//anonymous function numita si expression function
let anonymous = function(){
  console.log("this is anonymous");
}
anonymous();//apelare si print in consola




//---------ES6 arrow function is ALWAYS an anonymous function 

// no parameters
const noParams = () =>{
  //instructions
  console.log("this is arrow function with no paramaters")
} 
noParams();


//with parameters
const withParameters = (a,b)=>{
  return a>b;
}
const resultWithParameters = withParameters(3,4);
console.log(resultWithParameters);//boolean response in console.log


// no curly braces
const noCurly = () => 1 + 1;//o singura linie; nu necesita acolade
  //instructions
  const resultCurly = noCurly();
console.log(resultCurly);


//no parenthesis when you have one single parameter
const noParenthesis = a => a + 1;
const resultNoParenthesis = noParenthesis(5);
console.log(resultNoParenthesis);


//filter even numbers from an array
const array = [2,6,3,1,9,6];
const arrayEven = array.filter(element => element % 2 ? false : true);//ternary operator
console.log(arrayEven);

//ES5 style for the same problem as above
const arrayEvenES5 = array.filter(function(element){
  return element % 2 ? false : true;
});
console.log(arrayEvenES5);

//filter odd numbers
const arrayOdd = array.filter(element => element % 2);
console.log(arrayOdd);


// propria noastra filter function: ce e mai jos este inclus in filter :)

function ourFilter (originalArray, filterFunction){
  const filteredArray = [];
  for (const element of originalArray){
    if (filterFunction(element)){
      console.log("element passed condition", element);
        filteredArray.push(element);
    }
  }
  return filteredArray;
}
function isOdd(element){
  console.log(element % 2)
  return element % 2;
}

const resultOurOddArray = ourFilter(array, isOdd);
console.log(resultOurOddArray);