const axios = require('axios')

export const state = {
    tests: [],
    test: {}
}

export const mutations = {
    setTests(state, data) {
        state.tests = data
    },
    setTest(state, data) {
        state.test = data
    }
}

export const actions = {
    getAllTests({ commit }) {
        return axios.get('http://localhost:8080/test')
            .then(res => {
                commit('setTests', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },
    getTestById({ commit }, id) {
        return axios.get('http://localhost:8080/test/' + id)
            .then(res => {
                commit('setTest', res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const getters = {}