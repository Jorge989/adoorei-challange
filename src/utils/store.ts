import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPlan: null,
  },
  mutations: {
    setSelectedPlan(state, plan) {
      state.selectedPlan = plan;
    },
  },
  getters: {
    selectedPlan: (state) => state.selectedPlan,
  },
});
