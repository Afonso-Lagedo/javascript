/*function produto(a,b){
	return a* b;
}
console.log(produto(2,3));
console.log(produto(2));//not a number, undefined 
*/

/*function produto(a,b){
	b= b || 1;// if B is false, b =1
	return a*b;
}
console.log(produto(2));
console.log(produto(5,0));// 0 is false value in javascript, b = 1
*/

//idem up, version two

/*function produto(a,b){
	b = typeof b === 'undefined' ? 1 : b;//verification of type, if undefined, b=1;
	return a*b;
}
console.log(produto(2,0));
console.log(produto(2)); 
*/

//idem up, version three with conditional

/*function produto(a,b){
	if(b = typeof b === 'undefined') {;//verification of type, if undefined, b=1;
		b=1;
	}
	return a*b;
}
console.log(produto(2,0));
console.log(produto(2)); 
*/

//idem up, version four with new declaration default

/*function produto(a,b=1){//default value is one
	return a*b;
}
console.log(produto(2,0));
console.log(produto(2)); 
*/

//idem up, version four with new declaration default
/*function produto(a,b=a){//for exemple (b=a, a) is error, variable a is not declareted
	return a*b;
}
console.log(produto(2,0));
console.log(produto(2)); 
*/

//lazy evaluation
function numeroAleatorio (){//ever when acionatied will genereted new random number 
	return Math.random()*10;
}

function produto(a,b=numeroAleatorio()){//for exemple (b=a, a) is error, variable a is not declareted
	return a*b;
}
console.log(produto(2));