const express= require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Thank you for calling me bro from 420')
})

app.listen(4000, ()=>console.log("420 port is now ranning"))