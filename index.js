import express from 'express';
import path from "path";
import { URL } from "url";
import router from "./route.js";

const app = express();
const PORT = 3000;

// middleware: log the url
let logger = (req, res, next) => {
    console.log(`url: ${req.url}`);
    next();
}

// middleware added to each request
app.use(logger);

// make all files inside /public available using static
const __filename = new URL("", import.meta.url).pathname;
const __dirname = new URL(".", import.meta.url).pathname;
app.use(express.static(path.join(__dirname, './public')));

// import file for routes
app.use('/', router);

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});