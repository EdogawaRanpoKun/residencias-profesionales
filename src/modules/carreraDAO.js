import axios from "axios";
export default {
  namespaced: true,
  state: {
    carrera: [],
    carreras: [],
  },
  getters: {},
  mutations: {
    establecerObjeto(state, payload) {
      state.carrera = payload;
    },
    establecerVector(state, payload) {
      state.carreras = payload;
    },
  },
  actions: {
    seleccionarCarrera({ commit }, identificador) {
      axios.post("http://localhost/residencias-profesionales/CarreraDAO.php?action=seleccionar", { identificador: identificador }).then((response) => {
        var carrera = [];
        carrera = response.data[0];
        commit("establecerObjeto", carrera);
      });
    },
    establecerCarreras({ commit }) {
      axios.post("http://localhost/residencias-profesionales/CarreraDAO.php?action=seleccionarTodos").then((response) => {
        var carreras = [];
        carreras = response.data;
        commit("establecerVector", carreras);
      });
    },
    insertarCarrera({ commit }, carrera) {
      axios
        .post("http://localhost/residencias-profesionales/CarreraDAO.php?action=insertar", {
          carrera: [carrera.CarNombre],
        })
        .then(() => {
          location.reload();
        });
    },
    actualizarCarrera({ commit }, carrera) {
      axios
        .post("http://localhost/residencias-profesionales/CarreraDAO.php?action=actualizar", {
          carrera: [carrera.CarNombre, carrera.CarreraID],
        })
        .then(() => {
          location.reload();
        });
    },
    eliminarCarrera({ commit }, identificador) {
      axios
        .post("http://localhost/residencias-profesionales/CarreraDAO.php?action=eliminar", {
          identificador: identificador,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
