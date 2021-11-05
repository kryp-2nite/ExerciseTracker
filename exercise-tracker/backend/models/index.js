const mongoose = require('mongoose');
const db = mongoose.connection;
const configs = {
	useNewUrlParser: true,
};

mongoose.connect(process.env.DB_URL, configs);



db.on('error', console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("connected to Exercise Tracker Cloud Cluster");
});

module.exports = {
    User: require('./User'),
    Exercise: require('./Exercise'),
}