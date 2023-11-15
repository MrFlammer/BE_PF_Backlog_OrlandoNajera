const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');

app.use('/', require('./router'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000, () => {
    console.log('SERVER corriendo en http://localhost:5000');
});