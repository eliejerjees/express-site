// routes.js

// import express, create router
import express from 'express';
const router = express.Router();

// move routes from index.js here
router.get('/', (req, res) => {
    res.send('Hello!')
});

router.get('/api', (req, res) => {
    res.json({ "message:": 123} )
});

// export module
export default router;
