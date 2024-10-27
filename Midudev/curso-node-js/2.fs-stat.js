// File System
// es uno de los modulos mas importante de NodeJs

const fs = require('node:fs'); // => a partir de Node 16 se recomienda node:

const stats = fs.statSync('./archivo.txt')  // Ejemplo sincrono

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size , // el tamanio en bytes
)