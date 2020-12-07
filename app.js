const express = require('express');
const {Liquid} = require('liquidjs');
const db = require('./Model/index');
const route = require('./route');

const app = express();
const engine = new Liquid();
const port = 22228;

app.engine('liquid', engine.express());
app.set('views', './View');
app.set('view engine', 'liquid');

app.use(route);
app.use(express.static('public'))

app.listen(port, async () => {
    global.db = await db();
    console.log(`Example app listening at http://localhost:${port}`)
})