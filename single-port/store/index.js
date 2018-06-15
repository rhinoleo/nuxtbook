import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
      counter: 0,
      works: [
          {
            "id": 0,
            "label": 'nostopnocity',
            "img": [
                './assets/works/nostopnocity/01.jpg',
                './assets/works/nostopnocity/02.jpg',
                './assets/works/nostopnocity/03.jpg',
                './assets/works/nostopnocity/04.jpg',
                './assets/works/nostopnocity/05.jpg',
            ]
          },
          {
            "id": 1,
            "label": 'brut',
            "background": './assets/works/brut/background.jpg',
            "img": [
                './assets/works/brut/01.jpg',
                './assets/works/brut/02.jpg',
                './assets/works/brut/03.jpg',
                './assets/works/brut/04.jpg',
                './assets/works/brut/05.jpg',
                './assets/works/brut/06.jpg',
                './assets/works/brut/07.jpg',
                './assets/works/brut/08.jpg',
            ]
          },
          {
            "id": 2,
            "label": 'pompeii2',
            "img": [
                './assets/works/pompeii2/01.jpg',
                './assets/works/pompeii2/02.jpg',
                './assets/works/pompeii2/03.jpg',
                './assets/works/pompeii2/04.jpg'
            ]
          }
      ]
    },
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })

export default store