import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://manager-api-dev.licitardigital.com.br',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    origin: 'https://dev.licitardigital.com.br',
  },
});

export default instance;
