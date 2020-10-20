import axios from 'axios';

const instance = axios.create({
    baseURL:'https://mini-udemy-app.firebaseio.com/'
});

export default instance;