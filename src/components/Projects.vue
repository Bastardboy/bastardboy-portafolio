<template>
  <section id="Projects" class="p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
    <h2 class="text-2xl font-bold mb-4">Proyectos</h2>

    <!-- Lista de proyectos -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="(project, index) in projects" :key="index" class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <span class="inline-block bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {{ project.categories }}
            </span>
            <span class="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
              {{ project.focus }}
            </span>
          </div>

          <!-- Detalles del proyecto -->
          <div v-if="project.showDetails" class="mt-4">
            <p><strong>Descripción:</strong> {{ project.description }}</p>
            <p><strong>Tecnologías usadas:</strong></p>
            <div class="flex flex-wrap gap-2 mt-2">
              <i v-for="tech in project.technologies" :key="tech" :class="tech" class="text-2xl"></i>
            </div>
          </div>
        </div>

        <!-- Botón para mostrar detalles del proyecto -->
        <button
          @click="toggleDetails(index)"
          class="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
        >
          {{ project.showDetails ? 'Ocultar detalles' : 'Ver detalles' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Estado reactivo para mostrar detalles
const showDetails = ref(false);

// Lista de proyectos
const projects = ref([
  {
    title: "E-commerce",
    categories: "Académico, Ingeniería de Software",
    description: "Desarrollo de una plataforma de comercio electrónico.",
    technologies: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
    icon: "fas fa-shopping-cart",
    focus: "Full Stack",
    showDetails: false
  },
  {
    title: "Proyecto Software Pruebas Escolares",
    categories: "Académico, Arquitectura de Software",
    description: "Desarrollo de un sistema para realizar pruebas escolares.",
    technologies: ["fab fa-js", "fas fa-code", "fas fa-cogs"],
    icon: "fas fa-school",
    focus: "Backend",
    showDetails: false
  },
  {
    title: "Apoyo con sistemas de gestión interna",
    categories: "Práctica Profesional",
    description: "Asistencia en el desarrollo de aplicaciones internas de la empresa.",
    technologies: ["fab fa-php","fas fa-database"],
    icon: "fas fa-tools",
    focus: "Backend",
    showDetails: false
  },
  {
    title: "Gestor de Documentos",
    categories: "Práctica profesional",
    description: "Sistema para descarga masiva de documentos. Optimización de limpieza de Excels.",
    technologies: ["fab fa-python", "fas fa-flask", "fas fa-chart-line", "fab fa-microsoft"],
    icon: "fas fa-file-alt",
    focus: "Fullstack",
    showDetails: false
  }
]);

// Función para cambiar el estado de showDetails
const toggleDetails = (index: number) => {
  projects.value[index].showDetails = !projects.value[index].showDetails;
};
</script>