//iterator is a interface
//Generators is function with pause

/*
function teste() {
	console.log('Hello');

	console.log('from');
	
	console.log('function');
}

teste();
*/

//same function, with pause
/*function* teste() {//* is function with pause
	console.log('Hello');
	yield; //reserve word for pause
	console.log('from');
	yield 22; //passing value for function. If not passing value undefined
	console.log('function');
	yield;
}

const it = teste();
//tests of excutation
console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

//same function, with passing values for function 
/*function* teste() {
	console.log('Hello');
	yield; 
	console.log('from');
	const valor = yield 33; //when
	console.log(valor);
}

const it = teste();
//tests of excutation
console.log(it);

console.log(it.next());
console.log(it.next());
console.log(it.next('Test: passing value'));
*/

//exemple two
/*function* naturais (){
	let numero = 0;
	while(true){
		yield numero;
		numero++;
	}
}

const a = naturais();

console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
*/


//and now with object
const obj ={
	valores:[1,2,3,4],
	*[Symbol.iterator]() {
		for (var i = 0; i< this.valores.length; i++){
			yield this.valores[i];
		}
	}
};

for (let valor of obj){//for each element of obj...
	console.log(valor);
}

