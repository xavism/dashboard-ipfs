const addLog = (context, log) => {
  return new Promise((resolve) => {
      context.commit('ADD_LOG', log);
      resolve();
})
}


export default {
    addLog
};