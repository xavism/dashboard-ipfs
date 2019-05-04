import { fetchFiles, sendFileToCrypt, sendFile } from '@/api';

const getFiles = (context) => {
  return new Promise((resolve, reject) => {
    fetchFiles
    .then((response) => {
      context.commit('FILES_RETRIEVED', response);
      resolve(response);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    })
  })
}

const cryptFile = (context, id) => {
  return new Promise((resolve, reject) => {
    sendFileToCrypt(id)
    .then((response) => {
      context.commit('FILE_CRYPTED', id);
      resolve(response);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    })
  })
}

const addFile = (context, file) => {
  return new Promise((resolve, reject) => {
    sendFile(file)
    .then((response) => {
      debugger;
      context.commit('FILE_ADDED', response);
      resolve(response);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    })
  })
}


export default {
  getFiles, cryptFile, addFile
};