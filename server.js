const http = require('node:http')

const server = http.createServer((req,res) =>{
    
    // ^ Header writing can be this
        // * res.statusCode = 200;
        //* res.setHeader('Content-Type', 'text/plain')
    // ^ OR 
    res.writeHead(200, {'Content-Type': 'text/plain'})
    console.log(req.url)

    res.end('Hello World!')
   
})

server.listen(9000, ()=>{
    console.log('Listening on port 9000')
})

