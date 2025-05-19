<template>
  <section id="Technologies" class="p-4 md:p-6 w-full max-w-7xl mx-auto min-h-[70vh]">
    <!-- Título -->
    <h2 class="mb-6 md:mb-8 text-center group cursor-default">
      <div class="inline-block relative">
        <span class="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-2 md:px-4">
          Tecnologías
        </span>
        <div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-2 md:mx-4"></div>
        <div class="absolute -right-4 md:-right-6 top-2 md:top-3">
          <i class="fas fa-code text-lg md:text-xl text-gray-400 animate-spin-slow"></i>
        </div>
      </div>
    </h2>

    <!-- Grid de tecnologías -->
    <div class="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 mx-auto transition-all duration-500 max-w-7xl">
      <transition
        v-for="category in categories"
        :key="category.type"
        enter-active-class="transition-[opacity,transform,filter] duration-500 ease-out"
        leave-active-class="transition-[opacity,transform,filter] duration-300 ease-in"
        enter-from-class="opacity-0 scale-95 blur-sm"
        enter-to-class="opacity-100 scale-100 blur-none"
        leave-from-class="opacity-100 scale-100 blur-none"
        leave-to-class="opacity-0 scale-95 blur-sm"
        mode="out-in"
      >
        <div
          v-show="shouldShowCard(category.type)"
          class="card border shadow-md hover:shadow-xl p-4 md:p-6 rounded-xl transition-all duration-300 cursor-pointer"
          :class="{
            'border-blue-400 scale-[1.02] z-10': selectedCategory === category.type,
            'hover:scale-[1.02] z-0': selectedCategory !== category.type,
            'opacity-40 hover:opacity-70': selectedCategory && selectedCategory !== category.type
          }"
          @click="toggleCategory(category.type)"
          style="background-color: var(--card-color); color: var(--text-color); border-color: var(--card-color);"
        >
          <!-- Encabezado -->
          <div class="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4 gap-2">
            <h3 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 truncate">
              {{ category.type }}
            </h3>
            <i
              class="fas fa-chevron-down text-sm transform transition-transform duration-500 ease-out text-blue-500 dark:text-blue-400 ml-auto md:ml-0"
              :class="{ 
                'rotate-180': selectedCategory === category.type,
                'text-purple-500 dark:text-purple-400': selectedCategory === category.type
              }"
            ></i>
          </div>

          <!-- Detalles -->
          <transition
            name="expand"
            enter-active-class="transition-[max-height,opacity] duration-500 ease-out"
            leave-active-class="transition-[max-height,opacity] duration-300 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-[500px]"
            leave-from-class="opacity-100 max-h-[500px]"
            leave-to-class="opacity-0 max-h-0"
          >
            <div v-show="selectedCategory === category.type">
              <div class="border-t border-gray-200 dark:border-gray-700 pt-3 md:pt-4">
                <ul class="space-y-2 md:space-y-3">
                  <li
                    v-for="tech in category.technologies"
                    :key="tech.name"
                    class="flex items-center p-2 md:p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 ease-out"
                  >
                    <i :class="tech.icon" class="mr-2 md:mr-3 text-lg md:text-xl text-blue-500 dark:text-blue-400 transition-transform duration-300 hover:scale-125"></i>
                    <span class="flex-1 text-sm md:text-base text-gray-700 dark:text-gray-300">
                      {{ tech.name }}
                    </span>
                    <span
                      v-if="tech.level && tech.level !== 'N/A'"
                      class="text-xs md:text-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 transition-transform duration-300 hover:scale-105"
                    >
                      {{ tech.level }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Lista de categorías y tecnologías
const categories = ref([
  {
    type: "Lenguajes",
    technologies: [
      { name: "Python", level: "Intermedio", icon: "fab fa-python" },
      { name: "JavaScript", level: "Intermedio", icon: "fab fa-js" },
      { name: "PHP", level: "Básico", icon: "fab fa-php" },
      { name: "TypeScript", level: "Básico", icon: "fab fa-js" },
    ],
  },
  {
    type: "Frameworks",
    technologies: [
      { name: "Flask", level: "Intermedio", icon: "fas fa-flask" },
      { name: "React", level: "Intermedio", icon: "fab fa-react" },
      { name: "Express", level: "Intermedio", icon: "fas fa-terminal" },
      { name: "Node.js", level: "Intermedio", icon: "fab fa-node-js" },
      { name: "CAKEPHP", level: "Básico", icon: "fas fa-birthday-cake" },
      { name: "Django", level: "Intermedio", icon: "fas fa-terminal"},
      { name: "Vue", level: "Básico", icon: "fab fa-vuejs" },
    ],
  },
  {
    type: "Herramientas",
    technologies: [
      { name: "JIRA", level: "Intermedio", icon: "fab fa-jira" },
      { name: "Trello", level: "Intermedio", icon: "fab fa-trello" },
      { name: "GIT", level: "Intermedio", icon: "fab fa-git" },
      { name: "Tableau", level: "Básico", icon: "fas fa-chart-bar" },
      { name: "PowerBI", level: "Básico", icon: "fas fa-chart-line" },
    ],
  },
  {
    type: "Servicios Nube",
    technologies: [
      { name: "AWS", level: "Intermedio", icon: "fab fa-aws" },
      { name: "Azure", level: "Básico", icon: "fab fa-microsoft" },
      { name: "GCP", level: "Básico", icon: "fab fa-google" },
    ],
  },
  {
    type: "Bases de Datos",
    technologies: [
      { name: "PostgreSQL", level: "Intermedio", icon: "fas fa-database" },
      { name: "MySQL", level: "Intermedio", icon: "fas fa-database" },
      { name: "MongoDB", level: "Básico", icon: "fas fa-database" },
    ],
  },
  {
    type: "Metodologías",
    technologies: [
      { name: "Scrum", level: "N/A", icon: "fas fa-project-diagram" },
      { name: "Kanban", level: "N/A", icon: "fas fa-columns" },
    ],
  },
]);

const selectedCategory = ref<string | null>(null);

const toggleCategory = (category: string) => {
  selectedCategory.value = selectedCategory.value === category ? null : category;
};

const shouldShowCard = (type: string) => {
  return !selectedCategory.value || selectedCategory.value === type;
};
</script>
