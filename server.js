import apiRouter from './api/api.router'
import {connectToDb} from "./common/mongoDb/mongo";
import {users} from "./common/mongoDb/users";
import {errorHandler} from "./api/core/error.handler";

const express = require('express')
const app = express()
const port = 3000
const jsonParser = express.json();

app.use(jsonParser);

connectToDb().then(() => console.log('Connected to database'));

app.set('view engine', 'pug')

app.use('/api', apiRouter)

app.use('/index', (req, res) =>{
    res.render('index', {
        title: 'Test title',
        name: users[0].name,
        age: users[0].age
    })
})

app.use((req, res, next) => {
    const {forbidden} = req.query;
    if (forbidden){
        res.status(401).send('Forbidden');
    }
    next();
})

app.get('/users/:id', (req, res) => {
    if(req.params.id){
        const user = users.find(user => user.id == req.params.id)
        if(user){
            res.json(user);
        }
        else{
            res.status('404').send('Not Found')
        }

    }
    return res.status('404').send('Not Found')

})

app.get('/users', (req, res) => {
    const {sort} = req.query;
    if (sort){
        res.json(users.sort((a, b) => {
            if (a[sort] > b[sort]) return 1
            else if (a[sort] < b[sort]) return -1
            else return 0
        }))
    }
    else res.json(users);
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Bye World!')
})

app.get('/:parameter', (req, res) => {
    res.send('Hello u write: ' + req.params.parameter)
})

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
