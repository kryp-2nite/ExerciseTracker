require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
require('./models/index')

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static('public'));
app.use(express.json());


//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
    console.log(req.url);
    if (req.body) {
        console.log("BODY BEING SENT: ", req.body);
    }
    next();
});

//need /api routes here later one!!!
app.use("/api", routes);

app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('exercise-tracker/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, './exercise-tracker/build', 'index.html'));
    })
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})