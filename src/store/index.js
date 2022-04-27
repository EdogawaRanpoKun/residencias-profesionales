import carreraDAO from "@/modules/carreraDAO";
import estudianteDAO from "@/modules/estudianteDAO";
import jefedecarreraDAO from "@/modules/jefedecarreraDAO";
import { createStore } from "vuex";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { carreraDAO, estudianteDAO, jefedecarreraDAO },
});
