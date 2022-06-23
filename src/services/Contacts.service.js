import axios from 'axios';

const baseUrl = '';

// Retorna todos os contatos
const getAll = async(token, path) => {
  if(!token)
    throw new Error('Error: token is not defined');

  if(!path)
    return axios.get(`${baseUrl}/api/Contato/${token}`);
  
  return axios.get(`${baseUrl}${path}/${token}`);
}


// Cadastra um novo contato
const post = (path, token, data) => {
  const [ nome, telefone, email, dataNascimento ] = data;
  return axios.post(`${baseUrl}${path}/${token}`, {
    nome: nome,
    telefone: telefone,
    email: email,
    ativo: true,
    dataNascimento: dataNascimento
  });
}


// Exclui um contato
const deleteItem = (id, token) => {
  if(!token)
    throw new Error('Error: token is not defined');
  return axios.delete(`${baseUrl}/api/Contato/${token}/${id}`)
}


// Edita um contato existente
const put = (id, token, data) => {
  if(!token)
    throw new Error('Error: token is not defined');


  return axios.put(`${baseUrl}/api/Contato/${token}/${id}`, {
    nome: data.nome,
    telefone: data.telefone,
    email: data.email,
    dataNascimento: data.dataNascimento
  });
}

const ContactService = {getAll, post, deleteItem, put};
export default ContactService;