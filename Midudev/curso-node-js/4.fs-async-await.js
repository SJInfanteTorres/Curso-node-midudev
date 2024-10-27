// Read Files
const {readFile} = require('node:fs/promises')

// Metodo Async-Await
// Esto se puede hacer con una function autoinvocada

// IIFE - Inmediatly invoked function expression
;(
async () => {
    console.log('Leyendo el primer archivo...');
    const text = await readFile('./archivo.txt', 'utf-8')
    console.log(`Primer texto ${text}`)
    console.log(' ---> Hacer cosas mientras lee el archivo...\n')
    console.log('Leyendo el segundo archivo...');
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log(`Segundo texto ${secondText}`);    
}
)() // los segundos parentesis significa que la invocamos de una vez


 