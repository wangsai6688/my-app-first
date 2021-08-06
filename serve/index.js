const express = require('express')

const app = express()

app.get('/products', function(req,res){
    res.json({'success':true})
})

const PORT = process.env.PORT || '3001'
 
app.listen(PORT,function(){
    console.log('I am running!')
})




// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/products', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))