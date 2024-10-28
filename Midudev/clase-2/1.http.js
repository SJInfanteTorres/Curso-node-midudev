
const http = require('node:http')
const fs = require('node:fs')

const desirePort = process.env.PORT ?? 1234

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    
    if (req.url === '/') {
        res.end('<h1>Wellcome to my website</h1>')
    }else if (req.url === '/imagen-cute.png') {
        fs.readFile('./image.png', (err,data) =>{
        if (err){
            res.statusCode = 500
            res.end('<h1>Error Internal Server</h1>')
        } else {
            res.setHeader('Content-Type', 'image/png')
            res.end(data)
        }
    })
    }else if (req.url == '/contact') {
        res.end('<h1>Contact</h1>')
    } else {
        res.statusCode = 404 // not found
        res.end('<h1>404</h1>')
    }
   
})

server.listen(desirePort, ()=>{
    console.log('Server listening on port http://localhost:',desirePort)
})

