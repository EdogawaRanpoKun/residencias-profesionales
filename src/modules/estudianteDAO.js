import axios from "axios";
export default {
  namespaced: true,
  state: {
    estudiante: [],
    estudiantes: [],
  },
  getters: {},
  mutations: {
    establecerObjeto(state, payload) {
      state.estudiante = payload;
    },
    establecerVector(state, payload) {
      state.estudiantes = payload;
    },
  },
  actions: {
    seleccionarEstudiante({ commit }, identificador) {
      axios.post("http://localhost/residencias-profesionales/EstudianteDAO.php?action=seleccionar", { identificador: identificador }).then((response) => {
        var estudiante = [];
        estudiante = response.data[0];
        commit("establecerObjeto", estudiante);
      });
    },
    establecerEstudiantes({ commit }) {
      axios.post("http://localhost/residencias-profesionales/EstudianteDAO.php?action=seleccionarTodos").then((response) => {
        var estudiantes = [];
        estudiantes = response.data;
        commit("establecerVector", estudiantes);
      });
    },
    insertarEstudiante({ commit }, estudiante) {
      axios
        .post("http://localhost/residencias-profesionales/EstudianteDAO.php?action=insertar", {
          persona: [estudiante.PerUsuario, estudiante.PerClave, estudiante.PerNombre, estudiante.PerApellidoPaterno, estudiante.PerApellidoMaterno],
          estudiante: [0, estudiante.FKCarreraID],
        })
        .then(() => {
          location.reload();
        });
    },
    actualizarEstudiante({ commit }, estudiante) {
      axios
        .post("http://localhost/residencias-profesionales/EstudianteDAO.php?action=actualizar", {
          persona: [estudiante.PerUsuario, estudiante.PerClave, estudiante.PerNombre, estudiante.PerApellidoPaterno, estudiante.PerApellidoMaterno, estudiante.PersonaID],
          estudiante: [estudiante.FKCarreraID, estudiante.PersonaID],
        })
        .then(() => {
          location.reload();
        });
    },
    eliminarEstudiante({ commit }, identificador) {
      axios
        .post("http://localhost/residencias-profesionales/EstudianteDAO.php?action=eliminar", {
          identificador: identificador,
        })
        .then(() => {
          location.reload();
        });
    },
  },
};
