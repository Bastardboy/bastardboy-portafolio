<template>
  <section id="Projects" class="p-6 w-full max-w-7xl mx-auto min-h-[70vh]">
    <!-- Título con efecto gradient -->
    <h2 class="mb-8 text-center group cursor-default">
      <div class="inline-block relative">
        <span class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-4">
          Proyectos
        </span>
        <div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-4"></div>
        <div class="absolute -right-6 top-3">
          <i class="fas fa-code text-xl text-gray-400 animate-spin-slow"></i>
        </div>
      </div>
    </h2>

    <!-- Grid de proyectos -->
    <div class="grid gap-8 mx-auto transition-all duration-500 max-w-7xl">
      <transition
        v-for="(project, index) in projects"
        :key="index"
        enter-active-class="transition-[opacity,transform] duration-300 ease-out"
        leave-active-class="transition-[opacity,transform] duration-200 ease-in"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          class="card border shadow-md hover:shadow-xl p-6 rounded-xl transition-transform duration-300 cursor-pointer"
          :class="{
            'border-blue-400 scale-[1.02]': activeIndex === index,
            'hover:scale-[1.02]': activeIndex !== index
          }"
          @click="toggleDetails(index)"
          style="background-color: var(--card-color); color: var(--text-color); border-color: var(--card-color);"
        >
          <!-- Encabezado del proyecto -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100">{{ project.title }}</h3>
            <div class="flex items-center gap-4">
              <div class="flex gap-2">
                <span class="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {{ project.categories }}
                </span>
                <span class="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {{ project.focus }}
                </span>
              </div>
              <i
                class="fas fa-chevron-down text-sm transform transition-transform duration-300 text-blue-500 dark:text-blue-400"
                :class="{ 'rotate-180': activeIndex === index }"
              ></i>
            </div>
          </div>

          <!-- Detalles del proyecto -->
          <transition name="expand">
            <div
              v-show="activeIndex === index"
              class="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                <strong class="text-blue-500 dark:text-blue-400">Descripción:</strong> 
                {{ project.description }}
              </p>
              
              <div class="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p class="text-blue-500 dark:text-blue-400 font-semibold mb-2">Tecnologías usadas:</p>
                <div class="flex flex-wrap gap-4">
                  <div
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800"
                  >
                    <i :class="tech" class="text-xl text-blue-500 dark:text-blue-400"></i>
                    <span class="text-sm text-gray-700 dark:text-gray-300">
                      {{ getTechName(tech) }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const techNames = {
  'fab fa-react': 'React',
  'fab fa-node-js': 'Node.js',
  'fas fa-database': 'SQL',
  'fab fa-js': 'JavaScript',
  'fas fa-code': 'Express',
  'fas fa-cogs': 'REST API',
  'fab fa-php': 'PHP',
  'fab fa-python': 'Python',
  'fas fa-flask': 'Flask',
  'fas fa-chart-line': 'Tableau',
  'fab fa-microsoft': 'Azure',
  'fas fa-server': 'Microservicios'
};
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
    technologies: ["fab fa-js", "fas fa-code", "fas fa-cogs", "fas fa-server"],
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

const getTechName = (iconClass: string) => {
  return techNames[iconClass] || iconClass;
};
</script>