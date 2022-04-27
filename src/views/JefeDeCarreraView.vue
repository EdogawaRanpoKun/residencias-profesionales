<template>
  <div class="card text-white bg-dark mx-5 mb-3">
    <div class="card-body">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">NOMBRE</th>
            <th scope="col">APELLIDO PATERNO</th>
            <th scope="col">APELLIDO MATERNO</th>
            <th scope="col">OPERACIONES</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(jefedecarrera, index) in jefesdecarrera" :key="index">
            <th scope="row">{{ jefedecarrera.PerUsuario }}</th>
            <td>{{ jefedecarrera.PerNombre }}</td>
            <td>{{ jefedecarrera.PerApellidoPaterno }}</td>
            <td>{{ jefedecarrera.PerApellidoMaterno }}</td>
            <td><JefeDeCarreraUpdateView :identificador="jefedecarrera.PersonaID" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-muted">
      <div class="d-grid gap-2"><JefeDeCarreraInsertView /></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import JefeDeCarreraInsertView from "@/components/JefeDeCarreraInsertView.vue";
import JefeDeCarreraUpdateView from "@/components/JefeDeCarreraUpdateView.vue";
export default {
  components: {
    JefeDeCarreraInsertView,
    JefeDeCarreraUpdateView,
  },
  created() {
    this.establecerJefesDeCarrera();
  },
  methods: {
    ...mapActions("jefedecarreraDAO", ["establecerJefesDeCarrera"]),
  },
  computed: {
    ...mapState("jefedecarreraDAO", ["jefesdecarrera"]),
  },
};
</script>

<style></style>
