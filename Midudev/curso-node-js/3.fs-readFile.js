// Read Files

const fs = require('node:fs');


// Para leer un fichero de manera sincrona
// const text = fs.readFileSync('./archivo.txt');
// si se corre la linea anterior solo nos devolvera un buffer, es decir memoria que no podemos entender
// para poder entenderlo hay que modificarlos
// console.log('Leyendo el primer archivo...');
// const text = fs.readFileSync('./archivo.txt', 'utf-8');
// console.log(text);

// console.log('Leyendo el segundo archivo...');
// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8');
// console.log(secondText)

// Metodo Asincrono
console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{
    console.log(`Primer texto ${text}`);
});
console.log(' ---> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err,text)=>{
    console.log(`Segundo texto ${text}`);
});

// Con esto se puede crear la version de promesa de una que no sea promesa
const {promisify} = require('node:util');
const readFilePromise = promisify(fs.readFile);

console.log('Leyendo el primer archivo como PROMESA...\n');
fs.readFilePromise('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(`Primer texto ${text}`)
});
console.log(' ---> Hacer cosas mientras lee el archivo de PROMESA...')

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8', (err,text)=>{
    console.log(`Segundo texto ${text}`);
});