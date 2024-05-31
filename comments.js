// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});