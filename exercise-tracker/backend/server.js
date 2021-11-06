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
    app.use(express.static('exercise-tracker/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './exercise-tracker/build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})