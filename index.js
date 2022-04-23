const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = process.env.port || 5000
const cors = require('cors');
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('now i am practicing node self in my computer by using nodemon for solved reload problem')
})
const users = [
    { name: 'anik roy', id: 1, age: 23, hobby: 'guitar' },
    { name: 'sakil', id: 2, age: 24, hobby: 'vocal' },
    { name: 'rafiqul', id: 3, age: 25, hobby: 'bass baba' },
    { name: 'hirdoy', id: 4, age: 23, hobby: 'vocal' },
    { name: 'anik roy', id: 5, age: 23, hobby: 'music' },
]
app.get('/users', (req, res) => {

    console.log(req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else {
        res.send(users)
    }
})
app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
    res.send('post method success')
})

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    res.send(user)
})

app.listen(port, () => {
    console.log('this is my old port', port);
})