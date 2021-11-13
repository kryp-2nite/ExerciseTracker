require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
require('./models/index')

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


/* ====  Routes & Controllers  ==== */
// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});

//IS THE REACT FULL STACK MAGIC MIDDLEWARE
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/
app.use((req, res, next) => {
    console.log(req.headers);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('exercise-tracker/build'));
    
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, './exercise-tracker/build', 'index.html'));
//     })
// }

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
