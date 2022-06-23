import axios from 'axios';

const baseUrl = '';

const register = (userName) => {
  return axios.post(baseUrl, {
    nome: userName
  });
}

export default register;
