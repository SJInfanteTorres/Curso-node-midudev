// Read Files
import {readFile} from 'node:fs/promises'

// Metodo en async en Pararelo
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text, secondText]) => {
    console.log('Leyendo el primer archivo...');
    console.log(`Primer texto ${text}`)
    console.log(' ---> Hacer cosas mientras lee el archivo...\n')
    console.log('Leyendo el segundo archivo...');
    console.log(`Segundo texto ${secondText}`);
});