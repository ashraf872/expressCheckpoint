const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

app.use(date = (req,res, next)=>
{
    let currentDate = new Date().getHours();
    if (currentDate >=8 && currentDate<=18)
    {
        next()

    }
    else{
        res.status(503).send('Our office is Closed');
    }
})
app.get('/', (req, res) => {
    res.send('Welcome to our Service!')
  })

app.get('/Contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public/Contact.html'));
  });
app.get('/Home', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public/Home.html'));
});

app.get('/Services', (req, res) => {
    res.sendFile(path.join(__dirname, '/Public/OurServices.html'));
});


app.use(express.static(__dirname + '/public'))

app.listen(3000,(err) =>
{
    if (err) console.log('error')
    else console.log('ok')
})