import files from '@/data/files'
  
const fetchFiles = new Promise((resolve) => {
  setTimeout(() => {
    resolve(files);
  }, 4750);
});

const sendFile = (file) => {
  debugger;
  return new Promise((resolve) => {
    let fileToAdd = {
        name: file.name,
        cid: getId(16),
        type: file.type,
        owner: true,
        size: file.size,
        peers: 1,
        crypted: false
    }
    setTimeout(() => {
      resolve(fileToAdd);
    }, 950);
  })
};

const sendFileToCrypt = () => {
  return new Promise((resolve) => {
  setTimeout(() => { 
    resolve(getId(16));
  }, 750);
})}

const getId = (length) => {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}

export { fetchFiles, sendFileToCrypt, sendFile };