import axios from '~/plugins/axios'
import Vuex from 'vuex'


const store = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      works: []
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      setWorks: (state, { data }) => {
        state.works = data
        console.log('Works set')
      }
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        console.log('[INIT]')
        await axios.get(`https://book-73f3b.firebaseio.com/data.json`).then((response) => {
            console.log('Got a response from axios')
            commit('setWorks', { data: response.data })
          }, (err) => {
            console.log(err)
          })
      }

    },
    getters: {
      works(state) {
        return state.works
      }
    }
  })
}

export default store