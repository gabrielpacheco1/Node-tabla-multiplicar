const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors'); 

console.clear();

//console.log(argv);
//console.log('base yargs: ',argv.base);

/*
const [, , arg3 = 'base=5']= process.argv;
const [, base = 5]= arg3.split('='); //lo separo en 2 tomando el caracter '='
console.log(base);
*/
//const base=2;


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(colors.black.bgWhite(nombreArchivo, 'creado')))
    .catch(err => console.log(err));

