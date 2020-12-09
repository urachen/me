import Vuex from 'vuex';
import Common from "@store/common";

export const store = new Vuex.Store({
  mutations: {
    resetState(state, moduleState) {
      if (moduleState !== "" && typeof moduleState != 'undefined') {
        if (moduleState.initialState && typeof moduleState.initialState === 'function') {
          const initState = moduleState.initialState();
          for (const key in initState) {
            moduleState[key] = initState[key];
          }
        }
      }
    },
    resetAllStates(state) {
      for (const module in state) {
        if (module != 'base' && module != 'error') {
          const initState = state[module].initialState();
          for (const key in initState) {
            state[module][key] = initState[key];
          }
        }
      }
    }
  },
  actions: {
    resetStates({
      commit
    }, {
      pageName,
      module
    }) {
      if (pageName == 'Login') {
        commit('resetAllStates');
      } else {
        commit('resetState', this.state[module]);
      }
    }
  },
  modules: {
    Common
  }
});