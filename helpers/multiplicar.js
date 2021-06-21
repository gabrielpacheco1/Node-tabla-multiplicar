const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar, hasta) => {


    try {
        let salida='';
        let consola='';

        for(let i=1; i<=hasta; i++){
            let result= base * i;
            salida += `${base} * ${i} = ${result}\n`;
            consola += `${base}`.green + `  *  ${i} = `+ ` ${result}`.yellow +`\n`;
            result=0;
            
        }
        
        if(listar) {
            console.log("===================".rainbow);
            console.log(colors.bold(`    Tabla del`, `${base}`.green));
            console.log("===================".rainbow);
            console.log(consola);
        }

        /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`);
        });*/

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
    
}

module.exports = {
    crearArchivo: crearArchivo
}