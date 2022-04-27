import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EstudianteView from "../views/EstudianteView.vue";
import CarreraView from "../views/CarreraView.vue";
import JefeDeCarreraView from "../views/JefeDeCarreraView.vue";
import BancoDeProyectosView from "../views/BancoDeProyectosView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/estudiante",
    name: "estudiante",
    component: EstudianteView,
  },
  {
    path: "/carrera",
    name: "carrera",
    component: CarreraView,
  },
  {
    path: "/jefedecarrera",
    name: "jefedecarrera",
    component: JefeDeCarreraView,
  },
  {
    path: "/bancodeproyectos",
    name: "bancodeproyectos",
    component: BancoDeProyectosView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
