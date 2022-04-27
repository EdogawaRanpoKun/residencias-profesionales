<template>
  <div class="btn-group">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModalInsert">AGREGAR NUEVA CARRERA</button>
  </div>

  <div class="modal text-dark" id="myModalInsert">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-body">
          <div class="row mb-3">
            <div class="col">
              <div class="form-floating">
                <input class="form-control" placeholder="Comment goes here" v-model="carrera.CarNombre" />
                <label>Nombre</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success" data-bs-dismiss="modal" @click="insertarCarrera(carrera)">AGREGAR</button>
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
  data() {
    return {
      carrera: [],
    };
  },
  methods: {
    ...mapActions("carreraDAO", ["insertarCarrera"]),
  },
};
</script>

<style></style>
