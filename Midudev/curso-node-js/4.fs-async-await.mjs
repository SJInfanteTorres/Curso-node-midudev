// Read Files
import {readFile} from 'node:fs/promises'

// Metodo Async-Await
console.log('Leyendo el primer archivo...');
const text = await readFile('./archivo.txt', 'utf-8')
    console.log(`Primer texto ${text}`)


console.log(' ---> Hacer cosas mientras lee el archivo...\n')

console.log('Leyendo el segundo archivo...');
const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log(`Segundo texto ${secondText}`);

 
 