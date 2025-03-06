<template>
  <section id="Projects" class="p-6 bg-white dark:bg-gray-900 text-black dark:text-white">
    <h2 class="text-2xl font-bold mb-4">Proyectos</h2>

    <!-- Lista de proyectos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col transition-all duration-300"
      >
        <div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 cursor-pointer" @click="toggleDetails(index)">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <div class="flex gap-2 mt-2 sm:mt-0">
              <span class="bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {{ project.categories }}
              </span>
              <span class="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {{ project.focus }}
              </span>
            </div>
            <i :class="['ml-2', activeIndex === index ? 'fas fa-chevron-up' : 'fas fa-chevron-down']"></i>
          </div>

          <!-- Detalles del proyecto -->
          <transition name="expand">
            <div
              v-show="activeIndex === index"
              class="overflow-hidden transition-all duration-300 ease-in-out bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md"
              :style="{ maxHeight: activeIndex === index ? '300px' : '0px', opacity: activeIndex === index ? '1' : '0' }"
            >
              <p><strong>Descripción:</strong> {{ project.description }}</p>
              <p><strong>Tecnologías usadas:</strong></p>
              <div class="flex flex-wrap gap-2 mt-2">
                <i v-for="tech in project.technologies" :key="tech" :class="tech" class="text-2xl"></i>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Lista de proyectos
const projects = ref([
  {
    title: "E-commerce",
    categories: "Académico, Ingeniería de Software",
    description: "Desarrollo de una plataforma de comercio electrónico.",
    technologies: ["fab fa-react", "fab fa-node-js", "fas fa-database"],
    focus: "Full Stack"
  },
  {
    title: "Proyecto Software Pruebas Escolares",
    categories: "Académico, Arquitectura de Software",
    description: "Desarrollo de un sistema para realizar pruebas escolares.",
    technologies: ["fab fa-js", "fas fa-code", "fas fa-cogs"],
    focus: "Backend"
  },
  {
    title: "Apoyo con sistemas de gestión interna",
    categories: "Práctica Profesional",
    description: "Asistencia en el desarrollo de aplicaciones internas de la empresa.",
    technologies: ["fab fa-php", "fas fa-database"],
    focus: "Backend"
  },
  {
    title: "Gestor de Documentos",
    categories: "Práctica profesional",
    description: "Sistema para descarga masiva de documentos. Optimización de limpieza de Excels.",
    technologies: ["fab fa-python", "fas fa-flask", "fas fa-chart-line", "fab fa-microsoft"],
    focus: "Fullstack"
  }
]);

// Variable reactiva para rastrear qué proyecto está abierto
const activeIndex = ref<number | null>(null);

// Función para manejar la apertura y cierre de detalles
const toggleDetails = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>