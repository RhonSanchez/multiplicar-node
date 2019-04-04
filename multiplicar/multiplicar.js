const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) =>{
	return new Promise((resolve, reject) => {
	
		if ( !Number(base) ) {
			reject(`El valor base introducido ${ base } no es un número`.red);
			return;
		}

		if ( !Number(limite) ) {
			reject(`El valor límite introducido ${ limite } no es un número`.red);
			return;
		}

		console.log('==================================='.blue);
		console.log(`Tabla de ${ base }`.blue);
		console.log('==================================='.blue);

		for (let i = 0; i <= limite; i++) {
			console.log(`${ base } * ${ i } = ${ base * i }\n`); 
		}	
	});
}

let crearArchivo = ( base, limite = 10 ) => {
	return new Promise((resolve, reject) => {
	
		if ( !Number(base) ) {
			reject(`El valor introducido ${ base } no es un número`.red);
			return;
		}

		if ( !Number(limite) ) {
			reject(`El valor límite introducido ${ limite } no es un número`.red);
			return;
		}

		let data = '';

		for (let i = 0; i <= limite; i++) {
			data += `${ base } * ${ i } = ${ base * i }\n`;
		}

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
			if (err) reject (err)
			else
				resolve(`El archivo tabla-${ base }.`)	
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}