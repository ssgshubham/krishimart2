const express = require('express')
const app = express()
app.use(express.static('public'));

const port = process.env.PORT || 3000

app.post('/previous', (req, res) => {
    const currentPage = parseInt(req.body.page);
  
    const previousPage = currentPage - 1;
    

    res.redirect(previousPage === 1 ? '/welcome' : '/assessment');
});



app.get('/', async (req, res) => {
    res.sendFile(__dirname + "/public/1.html")
})

app.get('/ps', async (req, res) => {
    res.sendFile(__dirname + "/public/2.html")
})

app.get('/faq', async (req, res) => {
    res.sendFile(__dirname + "/public/3.html")
})

app.get('/thank', async (req, res) => {
    res.sendFile(__dirname + '/public/thank.html')
})


app.get('/result', async (req, res) => {
    res.sendFile(__dirname + '/public/4.html')
})





app.listen(port, console.log("success listening at " + port))

