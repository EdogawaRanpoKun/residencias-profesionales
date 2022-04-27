<template>
  <div class="btn-group">
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModalUpdate" @click="seleccionarJefeDeCarrera(identificador)">EDITAR</button>
    <button type="button" class="btn btn-danger" @click="eliminarJefeDeCarrera(identificador)">ELIMINAR</button>
  </div>

  <div class="modal text-dark" id="myModalUpdate">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="jefedecarrera.PerUsuario" />
                <label>Usuario</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="jefedecarrera.PerClave" />
                <label>Clave</label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="jefedecarrera.PerNombre" />
                <label>Nombre</label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="jefedecarrera.PerApellidoPaterno" />
                <label>Apellido Paterno</label>
              </div>
            </div>
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="jefedecarrera.PerApellidoMaterno" />
                <label>Apellido Materno</label>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <div class="form-floating">
                <select class="form-select" placeholder="Comment goes here" v-model="jefedecarrera.FKCarreraID">
                  <option v-for="(carrera, index) in carreras" :key="index" :value="carrera.CarreraID">{{ carrera.CarNombre }}</option>
                </select>
                <label>Carrera</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-warning" data-bs-dismiss="modal" @click="actualizarJefeDeCarrera(jefedecarrera)">EDITAR</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">CANCELAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
    identificador: null,
  },
  created() {
    this.establecerCarreras();
  },
  methods: {
    ...mapActions("carreraDAO", ["establecerCarreras"]),
    ...mapActions("jefedecarreraDAO", ["seleccionarJefeDeCarrera", "actualizarJefeDeCarrera", "eliminarJefeDeCarrera"]),
  },
  computed: {
    ...mapState("carreraDAO", ["carreras"]),
    ...mapState("jefedecarreraDAO", ["jefedecarrera"]),
  },
};
</script>

<style></style>
