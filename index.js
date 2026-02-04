import express from 'express';
const app = express();
const PORT = 3000;

let logger = (req, res, next) => {
    console.log(`url: ${req.url}`);
    return next();
}

app.use(logger);

app.get('/', (req, res) => {
    res.send('Hello!')
});

app.get('/api', (req, res) => {
    res.json({ "message:": 123} )
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});