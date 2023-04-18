import { createStore } from "vuex";

export default createStore({
  state: {
    selectedPlan: null,
    selectedUser: null, // adicionando a propriedade selectedUser
  },
  mutations: {
    setSelectedPlan(state, plan) {
      state.selectedPlan = plan;
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
  },
  actions: {},
  getters: {
    selectedUser: (state) => state.selectedUser, // adicionando o getter selectedUser
    selectedUserId: (state) => state.selectedUser?.id || null, // adicionando o getter selectedUserId
    selectedUserEmail: (state) => state.selectedUser?.email || null, // adicionando o getter selectedUserEmail
    selectedPlan: (state) => state.selectedPlan,
    getSelectedPlanTitle: (state) => state.selectedPlan?.planTitle || null,
    getSelectedPlanPrice: (state) => state.selectedPlan?.planPrice || null,
    getSelectedPlanTipTitle: (state) =>
      state.selectedPlan?.planTipTitle || null,
    getSelectedPlanTipSubtitle: (state) =>
      state.selectedPlan?.planTipSubtitle || null,
    getSelectedPlanSubtitle: (state) =>
      state.selectedPlan?.planSubtitle || null,
    getSelectedPlanHost: (state) => state.selectedPlan?.planHost || null,
    getSelectedPlanServer: (state) => state.selectedPlan?.planServer || null,
    getSelectedPlanFtp: (state) => state.selectedPlan?.planFtp || null,
    getSelectedPlanEmail: (state) => state.selectedPlan?.planEmail || null,
    getSelectedPlanSubDomainQuantity: (state) =>
      state.selectedPlan?.planSubDomainQuantity || null,
    getSelectedPlanMigrationTitle: (state) =>
      state.selectedPlan?.planMigrationTitle || null,
    getSelectedPlanMigrationSubTitle: (state) =>
      state.selectedPlan?.planMigrationSubTitle || null,
  },
});
