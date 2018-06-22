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
      setWorks (state, data) {
        state.works = data
        console.log('Works set')
        console.log('state.works : ' + state.works['-LFFA0OCQkwrgPklDLFl'].date)
      }
    },
    actions: {
      async nuxtServerInit ({commit}) {
        console.log('[INIT]')
        return axios.get(`https://book-73f3b.firebaseio.com/data.json`)
          .then((response) => {
            console.log('Got a response from axios')
            const {data} = response
            commit('setWorks', data)
          })
      }

    }
  })
}

export default store