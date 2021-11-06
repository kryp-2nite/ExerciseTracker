require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
require('./models/index')



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', "build")));
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})