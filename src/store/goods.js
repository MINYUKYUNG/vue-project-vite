import axios from "axios"

export default {
  namespaced: true,
  
  state: () => {
    return {
      // Product.vue
      all: [],
      // Fashion.vue // Accessory.vue // Digital.vue
      fash: [],
      acce: [],
      digi: [],
      // Preview.vue
      preFash: [],
      preAcce: [],
      preDigi: []
    }
  },

  mutations: {
    async setState(state, payload) { // payload는 이 함수가 실행될때 인수로 들어온 데이터들을 받아 사용가능.
      const { data } = payload;
      let preNums = 4;
      
      await data.forEach(item => {
        item.price = Math.round(item.price)
        state.all = [...state.all, item];
        if (item.category === "men's clothing" || item.category === "women's clothing") state.fash = [...state.fash, item];
        else if (item.category === "jewelery") state.acce = [...state.acce, item];
        else if (item.category === "electronics") state.digi = [...state.digi, item];
      })
      state.preFash = state.fash.slice(0, preNums)
      state.preAcce = state.acce.slice(0, preNums)
      state.preDigi = state.digi.slice(0, preNums)
    }
  },

  actions: {
    async getData(context) {
      const result = await axios.get('https://fakestoreapi.com/products');
      
      const data = result.data;
      context.commit('setState', {
        data
      });
    }
  }
}