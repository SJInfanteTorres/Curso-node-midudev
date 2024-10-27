// Read Files

const fs = require('node:fs');


// si se corre la linea anterior solo nos devolvera un buffer, es decir memoria que no podemos entender
// para poder entenderlo hay que modificarlos
console.log('Leyendo el primer archivo...');
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);

console.log('Leyendo el segundo archivo...');
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
console.log(secondText)
