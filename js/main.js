//symbols (identifier)

/*
const identificador = Symbol();
console.log(identificador);

//passing value, only identification

const id = Symbol('test');
console.log(id);

//test showing what one Symbol isn't equal a other Symbol
const id1 = Symbol('test1');
const id2 = Symbol('test1');
console.log(id1 === id2); // is false
*/


/*
const id = Symbol('test');

const obj = {
	[id]: 'propety value'
};

console.log(obj);
//alert
console.log(Object.keys(obj));// return attributes of objects
console.log(Object.getOwnPropertySymbols(obj));// return attributes of Symbol
*/


//well know symbols

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

for (let i in arr){//para cada elemento me traga a posição
	console.log(it.next());
}
console.log(it.next());//finished

//with String
const str = 'Afonso';
for (let value of str){
	console.log(value);
}

//with object

const obj ={
	values: [1,2,3,4],
	[Symbol.iterator](){
		let i = 0;
		return{
			next: () => {
				i++;

				return{
					value: this.values[i -1],
					done: i > this.values.length 
				};
			}
		};
	}
};

const teste = obj[Symbol.iterator]();

console.log(teste.next());
console.log(teste.next());
console.log(teste.next());
console.log(teste.next());
console.log(teste.next());

for (let valor of obj){
	console.log(valor);
} 

const arr2 = [...obj];
console.log(arr2);