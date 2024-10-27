// Process
// Este proporciona informacion y control sobre el proceso actual de ejecucion

// Argumentos
console.log(process.argv)

// metodo current working directory, nos dice desde donde se a inicializado
process.cwd

// controlar los eventos
process.on('exit', () =>{
    // limpiar los recursos o consola
})

// controlar el proceso y salida
process.exit(1)