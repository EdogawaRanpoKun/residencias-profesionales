import axios from "axios";
export default {
  namespaced: true,
  state: {
    jefedecarrera: [],
    jefesdecarrera: [],
  },
  getters: {},
  mutations: {
    establecerObjeto(state, payload) {
      state.jefedecarrera = payload;
    },
    establecerVector(state, payload) {
      state.jefesdecarrera = payload;
    },
  },
  actions: {
    seleccionarJefeDeCarrera({ commit }, identificador) {
      axios.post("http://localhost/residencias-profesionales/JefeDeCarreraDAO.php?action=seleccionar", { identificador: identificador }).then((response) => {
        var jefedecarrera = [];
        jefedecarrera = response.data[0];
        commit("establecerObjeto", jefedecarrera);
      });
    },
    establecerJefesDeCarrera({ commit }) {
      axios.post("http://localhost/residencias-profesionales/JefeDeCarreraDAO.php?action=seleccionarTodos").then((response) => {
        var jefesdecarrera = [];
        jefesdecarrera = response.data;
        commit("establecerVector", jefesdecarrera);
      });
    },
    insertarJefeDeCarrera({ commit }, jefedecarrera) {
      axios
        .post("http://localhost/residencias-profesionales/JefeDeCarreraDAO.php?action=insertar", {
          persona: [jefedecarrera.PerUsuario, jefedecarrera.PerClave, jefedecarrera.PerNombre, jefedecarrera.PerApellidoPaterno, jefedecarrera.PerApellidoMaterno],
          jefedecarrera: [0, jefedecarrera.FKCarreraID],
        })
        .then(() => {
          location.reload();
        });
    },
    actualizarJefeDeCarrera({ commit }, jefedecarrera) {
      axios
        .post("http://localhost/residencias-profesionales/JefeDeCarreraDAO.php?action=actualizar", {
          persona: [
            jefedecarrera.PerUsuario,
            jefedecarrera.PerClave,
            jefedecarrera.PerNombre,
            jefedecarrera.PerApellidoPaterno,
            jefedecarrera.PerApellidoMaterno,
            jefedecarrera.PersonaID,
          ],
          jefedecarrera: [jefedecarrera.FKCarreraID, jefedecarrera.PersonaID],
        })
        .then(() => {
          location.reload();
        });
    },
    eliminarJefeDeCarrera({ commit }, identificador) {
      axios
        .post("http://localhost/residencias-profesionales/JefeDeCarreraDAO.php?action=eliminar", {
          identificador: identificador,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
