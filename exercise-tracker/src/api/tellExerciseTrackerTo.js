import axios from 'axios';

let HOST;

if (process.env.NODE_ENV !== 'production') {
    HOST = 'http://localhost:3000/api/';
} else {
    HOST = "https://frozen-garden-03722.herokuapp.com/api"
}

export default axios.create({
    baseURL: HOST,
    headers: { 
        'Content-type': 'application/json',
    },
});