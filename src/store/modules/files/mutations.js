const FILES_RETRIEVED = (state, files) => {
    state.files = files;
  };

const FILE_CRYPTED = (state, id) => {
    let file = state.files.find(f => f.cid === id);
    file.crypted = true;
  };
const FILE_DECRYPTED = (state, id) => {
    let file = state.files.find(f => f.cid === id);
    file.crypted = false;
};
const FILE_ADDED = (state, file) => {
    state.files.push(file);
};
  
  export default {
    FILES_RETRIEVED,
    FILE_CRYPTED,
    FILE_DECRYPTED,
    FILE_ADDED
  };