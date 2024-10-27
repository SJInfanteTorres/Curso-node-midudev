const fs = require('node:fs/promises')

// es para leer el directorio
// pidamos que lea el directorio acutal
fs.readdir('.',(err,files) =>{
    if(err){
        console.error('Error al leer el directorio: ',err)
        return;
    }

    files.forEach(file =>{
        console.log(file)
    })
})


// de la siguiente manera se puede hacer como promesa
fs.readdir('.')
    .then(files =>{
        files.forEach(file =>{
            console.log(file)
        }) 
    })
    .catch(err =>{
        if (err){
            console.error('Error al leer el directorio: ',err)
            return;
        }
    })