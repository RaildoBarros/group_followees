import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/',
});


export const getFollowees = async () => {
  try {
    const response = await Api.get('followee/');
    return response.data;
  } catch (error) {
    console.error('Erro ao pegar os seguidos ', error);
    throw error;
  }
};

export const getGroups = async () => {
  try {
    const response = await Api.get('group/');
    return response.data;
  } catch (error) {
    console.error('Erro ao pegar os grupos ', error);
    throw error;
  }
};

export const getGroupDetail = async (id:number) => {
  try {
    const response = await Api.get(`group/${id}/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pegar os detalhes do grupo ', error);
    throw error;
  }
};