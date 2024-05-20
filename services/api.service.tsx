import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/',
});


export const getFolloweesGroup = async () => {
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

export const getFollowees = async (username:string) => {
  try {
    const response = await Api.get(`followees/${username}/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pegar os followees do usuário ' + username, error);
    throw error;
  }
};

export const getUserDetail = async (username:string) => {
  try {
    const response = await Api.get(`users/${username}/`);
    return response.data;
  } catch (error) {
    console.error('Erro ao pegar os followees do usuário ' + username, error);
    throw error;
  }
};