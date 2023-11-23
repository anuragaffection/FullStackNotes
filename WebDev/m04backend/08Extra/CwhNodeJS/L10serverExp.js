// server using express js 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Home page ');
});

app.get('/about', (req, res) => {
    res.send('Welcome to  About page. We are on mission to Moon ');
});

app.get('/products/:id', function (req, res) {
    const productId = req.params.id
    res.send(`Product ID: ${productId}`)
})


const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

app.get('/users', (req, res) => {
    res.json(users);
});



app.post('/users', (req, res) => {
    const { name } = req.body;
    const id = users.length + 1;
    const user = { id, name };
    users.push(user);
    res.json(user);
});


// app.use(function (req, res, next) {
//     console.log(`${req.method} ${req.url}`)
//     next()
// })




app.listen(3000, () => {
    console.log("Server started on port 3000 ");
})

// http://localhost:3000/



// task
// res.json() vs res.send()