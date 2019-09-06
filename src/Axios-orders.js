import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://burger-builder-6a0c1.firebaseio.com/'
})


export default instance;