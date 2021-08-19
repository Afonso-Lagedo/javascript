//old mode creat object
/*var obj ={
	prop1: 'Afonso'
};
console.log(obj);
*/

//propety out function
/*
var prop1 = "Afonso";
var obj = {
	prop1: prop1
};
console.log(obj);*/


//with ECMA6
//if name equal
/*var prop1 = 'Afonso';
var obj = {
	prop1
};
console.log(obj);*/


//for functions
/*function method1(){
	console.log("method1 is on");
}
var obj = {
	method1
};
obj.method1();
*/


//same function up

/*var obj = {
	sum: function sum(a,b) {
		return a+b;
	}
};
console.log(obj.sum(1,5));
*/
//sume function up, with ECMA 6
var obj = {
	sum(a,b) {//method pointing function
		return a+b;
	}
};

console.log(obj.sum(1,5));

//old mode of  propety  acess
/*var propName = 'Afonso';
var obj = {};
obj[propName+'teste concatenação'] = 'Afonso teste';
console.log(obj);
*/

//same function up with ECMA6
var propName = 'Afonso';
var obj = {
	[propName+'teste concatenação'] : 'Afonso teste'
};
console.log(obj);