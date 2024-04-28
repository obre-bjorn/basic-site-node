const http = require('node:http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    let path = './pages/'
    // ^ Header writing can be this
        // * res.statusCode = 200;
        //* res.setHeader('Content-Type', 'text/plain')
    // ^ OR 
    res.writeHead(200, {'Content-Type': 'text/html'})

    switch (req.url){
        case '/': 
            path += 'home.html'
            break;
        case '/about':
            path += 'about.html';
            break;
        case '/contact':
            path += 'contact-me.html'
            break;
        default: 
            path += '404.html'
            break;

    }

    fs.readFile(path, (err,data) => {

        if(err){
            throw err;
        }else{
            res.write(data)
            res.end()

        }

    })


    
   
})

server.listen(9000, ()=>{
    console.log('Listening on port 9000')
})

