//Destructuring Assignment

/*
var arr = ['corsa', 'fusca', 'mustang'];
//old mode of passing values for variables of old mode
var car1 = arr[0];
var car2 = arr[1];
var car3 = arr[2];

console.log(arr);
console.log(car1+car2+car3);

*/
// using destructuring
/*
var [car1, car2, car3] = ['corsa ', 'uno ', 'camaro'];

console.log(car1+car2+car3);
*/



//array inside array
/*
var arr=['mustang', ['camaro']];
var car =arr[1][0];
console.log (car); 

var [car1, [car2]] = ['mustang ', ['camaro']];
console.log(car1,car2);
*/



/*
//in Object
var obj = {
	name: 'Afonso'
}
var nome = obj.name;

console.log(nome);
//Alert: Destructuring not creat a object or array
//Same example up with Destructuring
var {name} = obj;//alert: propety name equal a variable name 
console.log(name);

var {name: name2} = obj;//destructuring name variable  and playing inside name2 variable
//not altered the object
console.log(name2);
*/



//with object inside object
//old mode

/*var obj = {
	name:'Afonso',
	props: {
		age:26
	}
};
*/

/*var teste = obj.props.age;
console.log(teste);*/

//with destructuring
/*var {
 	props: {age : age2}  
 } = obj;
console.log(age2);
*/

//same function up, with objects and vectors
/*
var obj ={
	nome: 'Afonso',
	props:{
		age: 27,
		time:['Corinthians', '49ers']
	}
 }

var {
	props: {
		age : age2, 
		time: [soc, fa]}
} = obj;

//old mode; var soc = obj.props.time[0];

console.log(fa);
*/



//example2
/*
var arr = [{name:'Afonso', age:27}];
//OLD MODE var pessoa = arr[0].name;

var [{name}]=arr;
console.log(name);

//or
var [{name: firstName}]=arr;
console.log(firstName);
*/


/*destructuring it work with VAR LET CONST*/

//in functions
//old mode
function sum(arr){
	return arr[0]+arr[1];
}

console.log(sum([5,5]));

//with destructuring
function sum2([a,b] = []){
	return a+b;
}
console.log([2,4]);

//with default values
function sum3([a,b]=[1,0]){
	return a+b;
}
console.log(sum3());

//with object
function sum4({a, b}){
	return a+b;
}
console.log(sum4({a:4, b:5}));