<template>
  <div class="card text-white bg-dark mx-5 mb-3">
    <div class="card-body">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">OPERACIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(carrera, index) in carreras" :key="index">
            <th scope="row">{{ carrera.CarreraID }}</th>
            <td>{{ carrera.CarNombre }}</td>
            <td><CarreraUpdateView :identificador="carrera.CarreraID" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-muted">
      <div class="d-grid gap-2"><CarreraInsertView /></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CarreraInsertView from "@/components/CarreraInsertView.vue";
import CarreraUpdateView from "@/components/CarreraUpdateView.vue";
export default {
  components: { CarreraInsertView, CarreraUpdateView },
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
