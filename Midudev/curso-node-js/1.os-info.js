// Modulos Nativos

const os = require('os')

// desde Em6 se hace asi
const os1 = require('node:os')

console.log('Informacion del sistema operativo:')
console.log('----------------------------------')

console.log('Nombre del sistema operativo ', os1.platform())
console.log('Version del sistema operativo ', os1.release())
console.log('Arquitectura ', os1.arch())
console.log('CPUs ', os1.cpus()) // <-- con esto vamos a poder escalar procesos en NodeJs
console.log('Memoria libre', os1.freemem() / 1024 / 1024) 
console.log('Memoria total', os1.totalmem() / 1024 / 1024)
console.log('Uptime', os1.uptime() / 60 / 60) // Esto nos dice cuando dias tiene mi ordenador encendido 