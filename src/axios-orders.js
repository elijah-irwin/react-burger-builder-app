import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-42c1b.firebaseio.com/'
});

export default instance;

