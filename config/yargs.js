const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el número máximo del factor en la multiplicación'
                })
                .check((argv, options) => {
                    if (isNaN(argv.base)) {
                        throw 'La base debe ser un numero'
                    }
                    return true;
                })
                .argv
            
module.exports = argv; 