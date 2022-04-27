<template>
  <div class="card text-white bg-dark mx-5 mb-3">
    <div class="card-header">
      <select class="form-select" placeholder="Comment goes here">
        <option v-for="(carrera, index) in carreras" :key="index" :value="carrera.CarreraID">{{ carrera.CarNombre }}</option>
      </select>
    </div>
    <div class="card-body">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">OBJETIVO</th>
            <th scope="col">OPERACIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-muted">
      <div class="d-grid gap-2"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.establecerCarreras();
  },
  methods: {
    ...mapActions("carreraDAO", ["establecerCarreras"]),
  },
  computed: {
    ...mapState("carreraDAO", ["carreras"]),
  },
};
</script>

<style></style>
