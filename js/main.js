//EXEMPLE 1:get reference
/*fetch('/javascript/js/data.json').then(responseStram => {
	console.log(responseStram);
});
*/


//EXEMPLE 2: get values
/*fetch('/javascript/js/data.json').then(responseStram => {
	responseStram.json().then(valor => {
		console.log(valor);
	});
});
*/


//EXEMPLE 3: same function, promise in localization not equal
/*fetch('/javascript/js/data.json')
	.then(responseStram => responseStram.json())
	.then(valor => {
		console.log(valor);
});
*/


//EXEMPLE 4: with error of rede
/*fetch('http://localhost:666/javascript/js/data.json')
	.then(responseStram => responseStram.json())
	.then(valor => {
		console.log(valor);
}).catch(erro =>{
	console.log('EROUUUUU: ', erro);
});
*/


//EXEMPLE 5: with error
/*fetch('/javascript/js/dataERROR.json')
	.then(teste => {
		if(teste.status === 200){
			return teste.json();
		}else{
			throw new Error('TESTE ERRO');
		}
	})	
	.then(valor => {
		console.log(valor);
	})
	.catch(erro =>{
		console.log('EROUUUUU: ', erro);
});
*/

//ASYNC and AWAIT

//tranformated function in promise
/*const teste = async () =>{
	return 12345;
};*/

//return promise
//console.log(teste());

//return values of function
//teste().then(valor =>{
//	console.log(valor);
//});

//return values of function with error
/*teste().then(valor =>{
	throw new Error('EROUUUUUU');//force error
}).catch(erro =>{//if error
	console.log(erro);
});
*/

//EXAMPLE2 used Await
/*const tempo = () =>
	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(123456);
		},2000);
	});

const exemplo = async () => {
	const valor = await tempo();// used promise resolved
	console.log(valor);
	const valor2 = await fetch('/javascript/js/data.json').then(a =>
		a.json()
		);
	return valor2;
};

exemplo()
	.then(data =>{
		console.log(data);
	}); 
*/
//EXAMPLE 3: procesand os dois await ao mesmo tempo 

const tempo = () =>
	new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve(123456);
		},2000);
	});

const exemplo = async () => {
	const valor = await Promise.all([
	tempo(),
	fetch('/javascript/js/data.json').then(a => a.json())
	]);
	return valor;
};

exemplo()
	.then(data =>{
		console.log(data);
	});