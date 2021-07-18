import apiRouter from './api/api.router'
import {connectToDb} from "./common/mongoDb/mongo";
import {errorHandler} from "./api/core/error.handler";

const cors = require('cors');

const express = require('express')
const app = express()
const port = 3000
const jsonParser = express.json();

app.use(jsonParser);

app.use(cors());
app.options('*', cors());

connectToDb().then(() => console.log('Connected to database'));

app.set('view engine', 'pug')

app.use('/api', apiRouter)

app.use((req, res, next) => {
    const {forbidden} = req.query;
    if (forbidden){
        res.status(401).send('Forbidden');
    }
    next();
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
