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
          <tr v-for="(estudiante, index) in estudiantes" :key="index">
            <th scope="row">{{ estudiante.PerUsuario }}</th>
            <td>{{ estudiante.PerNombre }}</td>
            <td>{{ estudiante.PerApellidoPaterno }}</td>
            <td>{{ estudiante.PerApellidoMaterno }}</td>
            <td><EstudianteUpdateView :identificador="estudiante.PersonaID" /></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer text-muted">
      <div class="d-grid gap-2"><EstudianteInsertView /></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EstudianteInsertView from "@/components/EstudianteInsertView.vue";
import EstudianteUpdateView from "@/components/EstudianteUpdateView.vue";
export default {
  components: { EstudianteInsertView, EstudianteUpdateView },
  created() {
    this.establecerEstudiantes();
  },
  methods: {
    ...mapActions("estudianteDAO", ["establecerEstudiantes"]),
  },
  computed: {
    ...mapState("estudianteDAO", ["estudiantes"]),
  },
};
</script>

<style></style>
