//forma tradicional de declarar função
function teste(value){
	console.log(value);
}

teste('test');

//anônima

var teste2 = function(value){
	console.log(value);
};

teste2('test two');

//exemplo soma
var oldSum = function(a,b){
	return a+b;
};

console.log(oldSum(5,5));

//EXEMPLO SOMA Arrow function =>
var sum = (a,b) => a+b;// (parâmentro) => retorno
console.log(sum(5,5));

//caso tenha uma condicional por exemplo
var sum2 =(a,b) => {
	if (a>b){
		return a+b;
	}
	else{
		return a-b;
	}
}

console.log(sum2(3,5));

//objeto literal
/*old form    
	var obj = {};
*/

//new form

var obj = ()=> ({test: 123});
console.log(obj());

//modelo de função construtura 
function Car(){
	this.foo = 'bar'
}

console.log(new Car());//gerando objeto através da construtora
//erro se eu tentar fazer o mesmo com Arrow functions
/*
	var Car = () =>{
		this.foo = 'bar';
	}
*/

console.log("#############");
//hoisting
host('teste hoisting');// used function before of declaretion
function host(value) {
	console.log(value);
}
//hosting doesn't work with Arrow Function

console.log("###good aplication of Arrow function###");
var a ={
	show: function show(){
		this.b('teste');
		//the contex of invocation of setTimeout is in global scope
		setTimeout( () => { //function for executed one function after a time
			this.b('after 1000ms'); //with arrow function I have sure it is what is my object
		},1000);
	},
	b: function b(value) {
		console.log(value);
	}
};

a.show();