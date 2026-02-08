import express from 'express';
const app = express();
const PORT = 3000;

// log the url
let logger = (req, res, next) => {
    console.log(`url: ${req.url}`);
    return next();
}

// middleware added to each request
app.use(logger);

// check if user is logged in
let auth = (req, res, next) => {
    if(true)
        return next();
stack
    // redirect to sign in page
    res.redirect('/signin');
}

// add middleware to this request only
app.get('./dashboard', auth, (req, res) => {
    res.send('Hello Admin!')
})

app.get('/', (req, res) => {
    res.send('Hello!')
});

app.get('/api', (req, res) => {
    res.json({ "message:": "Hello, world!"} )
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});