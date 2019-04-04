const opts = {
	base:	{
		demand: true,
		alias: 'b'
	},
	limite: {
		alias: 'l',
		default: 10
	}
}

const argv = require('yargs')
				.command('Listar', 'Imprime en consola la tabla de multiplicar', opts)
				.command('Crear', 'Genera un archivo con la tabla de multiplicar', opts)
				.help()
				.argv;

module.exports = {
	argv
}