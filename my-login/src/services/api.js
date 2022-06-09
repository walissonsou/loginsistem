import axios from 'axios';

// configurações padroes
export const api = axios.create({
  baseURL:'http://localhost:5000',
});

export const getRepositories = async(userId, query) => {
  let url = `/users/${userId}/repositories`

  if(query !== '') {
    url += `?q=${query}`
  }
  //http://localhost:5000/users/ID/repositories/?q=xx
  return api.get(url);
};
