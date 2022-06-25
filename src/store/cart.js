export default {
  namespaced: true,
  
  state: () => {
    return {
      saveCart: {
        // 1: { id: 1, count: 2 } 형식으로 추가된다.
      }
    }
  },

  mutations: {
    updateCart(state, payload) {
      const { getParams, num } = payload;
      let hateProxy;

      if (localStorage.getItem('cart_data')) {
        state.saveCart = JSON.parse(localStorage.getItem('cart_data'))
      } else {
        state.saveCart = {}
      }

      // saveCart 값 바꾸고 -> localStorage.setItem 업데이트
      if (state.saveCart[getParams]) { // 있으면, 기존것에 추가
        if (state.saveCart[getParams].count === 1 && num === -1) {
          state.saveCart[getParams] = { id: getParams, count: 1 }
        } else {
          state.saveCart[getParams].count = state.saveCart[getParams].count + num
        }
      } else { // undefined면, 새로 추가
        if (num === 1) {
          state.saveCart[getParams] = { id: getParams, count: 1 };
        }
      }

      hateProxy = {...state.saveCart}
      localStorage.setItem('cart_data', JSON.stringify(hateProxy))
    },
    deleteCart(state) {
      state.saveCart = {}
      localStorage.removeItem('cart_data')
    },
    loadCart(state) {
      state.saveCart = JSON.parse(localStorage.getItem('cart_data'))
    },
    deleteItem(state, payload) {
      const { id } = payload;
      delete state.saveCart[id];
      state.saveCart = {...state.saveCart}

      let hateProxy = {...state.saveCart}
      localStorage.setItem('cart_data', JSON.stringify(hateProxy))
    }
  }
}