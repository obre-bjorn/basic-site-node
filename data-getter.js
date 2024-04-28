const fs = require('fs')
const path = require('path')

fs.readFile('./pages/home.html','utf-8',(err,data) => {
    if(err){
        console.log(err)
    }
    console.log(data)
    
})
