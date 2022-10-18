const state = {
    name: window.localStorage.getItem('name') || '',
    isAdmin: window.localStorage.getItem('isAdmin') || false,
    userHead: ''
};
const actions = {

};
const mutations = {
    USER_NAME(state, payLoad) {
        state.name = payLoad.name;
        state.isAdmin = payLoad.isAdmin;
        state.userHead = payLoad.userHead;
    }
}
export default {
    namespaced: true,
    state,
    actions,
    mutations
}