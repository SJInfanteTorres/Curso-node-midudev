const { stat } = require('node:fs')
const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')


// fs.readdir(folder)
//     .then(files =>{
//         files.forEach(file =>{
//             console.log(file)
//         }) 
//     })
//     .catch(err =>{
//         if (err){
//             console.error('Error al leer el directorio: ',err)
//             return;
//         }
//     })

//     console.log('Empieza nuevo codigo \n')

const folder = process.argv[2] ?? '.'
async function ls(directory) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (err) {
        console.error(pc.red('🙅‍♂️No se a podido leer el directorio Marisco', folder))
        process.exit(1);
    }
    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath)
        } catch (err) {
            console.error(pc.redBright('☠️No se puedo leer upssy'))
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? 'd' : 'f'
        const fileSize = stats.size.toString()
        const fileModifed = stats.mtime.toLocaleString()

        return `${pc.green(fileType)}, ${pc.yellow(file.padEnd(25))}, ${pc.blue(fileSize.padStart(10))}, ${pc.red(fileModifed)}`
    })
    const fileInfo = await Promise.all(filesPromises)
    fileInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)