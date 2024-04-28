const http = require('node:http')
const fs = require('fs')

const server = http.createServer((req,res) =>{
    let path = './pages/'
    // ^ Header writing can be this
        //* res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
    // ^ OR 
    // res.writeHead(200, {'Content-Type': 'text/plain'})

    switch (req.url){
        case '/': 
            path += 'home.html'
            res.statusCode = 404;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 404;
            break;
        case '/contact':
            path += 'contact-me.html';
            res.statusCode = 404;
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    fs.readFile(path, (err,data) => {

        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()

        }

    })
   
})

server.listen(9000, ()=>{
    console.log('Listening on port 9000')
})

