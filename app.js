const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>Express Demo App</h1> <p> Version : 2 </p>')
})

app.get('/products',(req,res)=>{
    res.send([
        {
            productId:101,
            price:100
        },
        {
            productId:102,
            price:200
        },
    ])
})

app.listen(3000,()=>{
    console.log(`listening on port 3000`);
})