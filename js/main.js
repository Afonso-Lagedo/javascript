/*function soma(a,b) {
	return a+b;
}

console.log(soma(5,2));
*/

//unlimited arguments for same function up
/*function soma(a,b){
	var valor = 0;

	for (var i=0; i < arguments.length; i++){
		valor += arguments[i];
	}

	return valor;
}

console.log(soma(1,2,3,4));
*/



//same function up with rest operator ...      prototype of arguments is object, prototype of reset is array
/*function soma(...elementos){
	return elementos.reduce((a,b) => a+b,0);//reduce: execut a function defined for you for each element of vector, in case a+b and position initial, in case 0
}
console.log(soma(1,2,3,4));
*/


//get the rest function
/*function teste(a,b,...resto){
	console.log(a,b,resto);
}
console.log(teste(1,2,3,4));//a, b and rest
*/



/*
const soma = (...argumentos) => argumentos.reduce((a,b)=> a+b, 1);//initial value is one 

const teste =(...arg) => {
	return soma.apply(undefined, arg);// passing of function soma for function teste
};

console.log(teste(1,2,3,4,5));
*/

//same function up with spread operator "break arrguments"
/*const soma = (...argumentos) => argumentos.reduce((a,b)=> a+b, 2);//initial value is two
const teste =(...arg) => {
	return soma(...arg);// passing of function soma for function teste
};

console.log(teste(1,2,3,4,5));
*/


//spread operator in strings
/*const str = 'Afonso Silva';

function teste(...argumentos) {
	console.log(argumentos);
}

teste(...str);// passing arguments, obs.: String is character join 
*/


//spread operator in arrays
const arr = [1,2,3,4];

function teste (){
	console.log(arguments);//for get all arguments 
}

teste(...arr);  

//constructing array with spread 
//old array join
/*
const arr2 = arr.concat([5,6,7,8]);

console.log(arr2);
*/


//same function up with spread operator
const arr2 = [...arr, 5,6];
console.log(arr2);

const arr3 = [...arr2, ...arr, 0, 0];
console.log(arr3);

const arrClone = [...arr];
console.log(arrClone);

//creating of objects iteraveis with spread operator

const obj ={
	atributo1:123
};

const obj2 ={
	...obj,
	atributo2: 'teste'
};


//obs.: it is error: const obj2=[...obj]; // in case obj2 isn't iteravel
console.log(obj2);

//overwrite
const objeto={
	a:123
};
const objeto2={
	...objeto,
	a:'Afonso teste'
};

console.log(objeto2);

//clone
/*
const a ={
	t:123
}

const b=a;

b.t=456;
console.log(a);//overwrite propety 
console.log(b);
*/
const a ={
	t:123
}

const b ={
	...a
}

b.t=456;
console.log(a);//not overwrite propety
console.log(b);