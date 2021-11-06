import tellExerciseTrackerTo from "../api/tellExerciseTrackerTo";

function setToken(token) {
    console.log('SETTING TOKEN: ', token);
    if (token) {
        localStorage.setItem('token', token);
        // Also add to the auth header
        tellExerciseTrackerTo.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        localStorage.removeItem('token');
        tellExerciseTrackerTo.defaults.headers.common['Authorization'] = null;
    }
}

function getToken() {
    let token = localStorage.getItem('token');
    tellExerciseTrackerTo.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    console.log('GETTING TOKEN FROM LOCAL STORAGE AND SETTING HEADERS: ', token);

    if (token) {
        //Check if expired, remove if it is expired
        const payload = JSON.parse(atob(token.split('.')[1]));
        console.log('DECODED PAYLOAD: ', payload);
        //JWT's exp is expressed in seconds, not milliseconds, so convert
        if (payload.exp < Date.now() / 1000) {
            localStorage.removeItem('token');
            tellExerciseTrackerTo.defaults.headers.common['Authorization'] = null;
            token = null;
        }
    }
    return token;
}

function getUserFromToken() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export { setToken, getToken, getUserFromToken}