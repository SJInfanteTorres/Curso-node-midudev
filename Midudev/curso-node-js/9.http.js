// crear una appi desde 0 con node

const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desirePort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
    console.log('Request received')
    res.end('Que fue marisquiiin')
})

findAvailablePort(desirePort).then(port => {
    server.listen(port, () => {
        console.log(`Server is listening on port http://${server.address().port}`)
    })
})
// // siempre estar en un puerto vacio el 0 busca automaticamente el que este disponible
// server.listen(0, () => {
//     // y para saber que puerto tomo podermos usar lo siguiente
//     console.log(`Server is listening on port http://${server.address().port}`)
// })/*  */
// })/*  */