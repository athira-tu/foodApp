import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://anasksunil.pythonanywhere.com/',
  });

  export default instance;