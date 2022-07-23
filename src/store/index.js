import { createStore, } from "vuex";
import { api } from '../service/api'

export const Store = createStore({
    state: {
        email: '',
        newEmail: '',
        answerCreate: '',
        answerRead: [],
        answerUpdate: '',
        answerDelete: ''
    },
    mutations: {
        CreateEmail(state) {
            api.post('create', {
                "email": `${state.email}@gmail.com`
            }).then((res, req) => {
                console.log(res, req);
                state.answerCreate = res.data.message
            }).catch((error) => {
                console.log(error);
                state.answerCreate = error.response.data.message
            })
        },
        ReadEmail(state) {
            if (state.answerRead.length == 0) {
                api.get('read')
                .then((res) => {
                    state.answerRead = res.data
                }).catch((error) => {
                    console.log(error);
                    state.answerRead = error.response.data.message
                })
            }else state.answerRead.length = 0
        },
        UpdateEmail(state) {
            api.put('update', {
                "emailAtual": `${state.email}@gmail.com`,
                "emailNovo": `${state.newEmail}@gmail.com`
            }).then((res, req) => {
                console.log(res, req);
                state.answerUpdate = res.data.message
            }).catch((error) => {
                console.log(error);
                state.answerUpdate = error.response.data.message
            })
        },
        DeleteEmail(state) {
            api.post('delete', {
                "email": `${state.email}@gmail.com`
            }).then((res, req) => {
                console.log(res, req);
                state.answerDelete = res.data.message
            }).catch((error) => {
                console.log(error);
                state.answerDelete = error.response.data.message
            })
        }
    },
    actions: {
        CreateEmail: (context) => context.commit('CreateEmail'),
        ReadEmail: (context) => context.commit('ReadEmail'),
        UpdateEmail: (context) => context.commit('UpdateEmail'),
        DeleteEmail: (context) => context.commit('DeleteEmail'),

    }
})