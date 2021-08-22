//EXAMPLE ONE

/*
function teste1(callback) {
	setTimeout(function(){
		callback('Afonso');
	}, 1000);
}

function teste2(callback) {
	setTimeout(function(){
		callback('Silva');
	}, 1000);
}

//calling two  functions

function teste(){
	teste1(function(a){
		var processa1 = a.split('');

	teste2(function(b){
		var processa2 = b.split('');

	setTimeout(function(){
		console.log(processa1, processa2);
	},1000);
	
	});
	});
}	

teste();
*/


//EXAMPLE TWO
//with data handling
/*
function teste1(callback) {
	setTimeout(function(){
		callback('Afonso');
	}, 1000);
}

function teste2(callback) {
	setTimeout(function(){
		callback('Silva');
	}, 1000);
}

//calling two functions

function teste(){
	try {
		teste1(function(a){
			var processa1 = a.split('');

		try{	
			teste2(function(b){
				var processa2 = b.split('');

			try{
				setTimeout(function(){
					console.log(processa1, processa2);
				},1000);
			}catch(err){
				//error
			}

			});
		}catch(err){
			//error
		}
		});
	} catch(err){
		//error
	}
}	

teste();

*/


//EXAMPLE THREE
//with Promises   
//STATUS: pending, fulfilled, rejected
/*
const teste1 = new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Afonso');
	}, 1000);
});

const teste2 = new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Silva');
	}, 1000);
});

console.log(teste1);//pending
teste1.then(a => console.log(a));//get if correct

console.log(teste2);//pending
teste2.then(a => console.log(a));//get if correct
*/


//EXAMPLE FOUR
//with error   

/*const teste1 = new Promise((certo, errado)=>{
	//throw: pause function, and get first catch block 
	throw new Error('Algo de errado');
	setTimeout(function () {
		certo('Afonso');
	}, 1000);
});

const teste2 = new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Silva');
	}, 1000);
});

console.log(teste1);//pending
teste1
	.then(a => console.log(a))
	.catch(error => console.log(error));//if exist error
*/

//EXAMPLE FIVE
//invocation of new promises
//promises in promises
/*
const testeA = new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Afonso');
	}, 1000);
});

const testeB = new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Silva');
	}, 1000);
});

testeA
	.then(a => {
		console.log(a);
		return testeB;
	})
	.then(b => console.log(b))
	.catch();

*/


//EXAMPLE SIX
//with functions
/*
const testeA = () => new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Afonso');
	}, 1000);
});

const testeB = () => new Promise((certo, errado)=>{
	//SIMULATED ERROR: throw new Error('teste de erro');
	setTimeout(function () {
		certo('Silva');
	}, 1000);
});

//1)
//testeA()
//	.then(a => {
//		console.log(a);
//		return testeB();
//	})
//	.then(b => console.log(b))
//	.catch(error=> console.log('ops, erro'));
//2)or two promise did execute in same time 
Promise.all([testeA(), testeB()]).then(c => {
	console.log(c);  
});

*/


//EXAMPLE SEVEN
//same function with time not equal

const testeA = () => new Promise((certo, errado)=>{
	setTimeout(function () {
		certo('Afonso');
	}, 1500);//after
});

const testeB = () => new Promise((certo, errado)=>{
	//SIMULATED ERROR: throw new Error('teste de erro');
	setTimeout(function () {
		certo('Silva');
	}, 1000);
});

//promise that runs first, in case testeB time:1500
Promise.race([testeA(), testeB()]).then(c => {
	console.log(c);  
});


