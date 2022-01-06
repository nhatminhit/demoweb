const { urlencoded } = require('express');
const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const router = require('./routers');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


connectDB();

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './views');

router(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server is running on port " + PORT));