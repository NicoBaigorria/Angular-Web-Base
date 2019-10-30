const express = require('express');
const app = express();
const path = require('path');

app.use(expres.urlencoded({exteded: false}));
app.use(express.json());

app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'contact.component.html')));

app.listen(3000, () => {
    console.log('server on port 3000');
});