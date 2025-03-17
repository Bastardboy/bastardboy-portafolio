<template>
  <section class="technologies-view p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
    <h2 class="mb-8 text-center group cursor-default">
      <div class="inline-block relative">
        <span class="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
          Tecnologías
        </span>
        <div class="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div class="absolute -right-6 top-3">
          <i class="fas fa-plus text-xl text-gray-400 animate-spin-slow"></i>
        </div>
      </div>
    </h2>

    <!-- Grid de tarjetas -->
    <div
      :class="[
        'grid gap-4 justify-items-center transition-all duration-500',
        selectedCategory ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      ]"
    >
      <transition
        v-for="category in categories"
        :key="category.type"
        enter-active-class="transition-all duration-300 ease-out"
        leave-active-class="transition-all duration-200 ease-in"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-show="shouldShowCard(category.type)"
          class="card p-4 rounded-lg cursor-pointer transition-all duration-300 border bg-white dark:bg-gray-700 shadow-md"
          :class="[
            selectedCategory === category.type ? 'border-blue-300 dark:border-blue-600 scale-[1.02] max-w-md w-full' : 'border-gray-200 dark:border-gray-600 hover:scale-[1.02] w-full',
            !selectedCategory ? 'w-full' : 'justify-self-center'
          ]"
          @click="toggleCategory(category.type)"
        >
          <h3 class="text-lg font-semibold flex items-center justify-between">
            <span class="text-gray-800 dark:text-gray-100">{{ category.type }}</span>
            <i
              class="fas fa-chevron-down text-sm transform transition-transform duration-300 text-blue-500 dark:text-blue-300"
              :class="{ 'rotate-180': selectedCategory === category.type }"
            ></i>
          </h3>

          <!-- Contenido desplegable sin fondo -->
          <div v-if="selectedCategory === category.type" class="mt-4">
            <ul class="space-y-3">
              <li
                v-for="tech in category.technologies"
                :key="tech.name"
                class="flex items-center p-2 rounded-md group"
              >
                <i
                  :class="tech.icon"
                  class="mr-3 text-lg w-6 text-center text-blue-500 dark:text-blue-300"
                ></i>
                <span
                  class="flex-1 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                >
                  {{ tech.name }}
                </span>
                <span
                  v-if="tech.level && tech.level !== 'N/A'"
                  class="text-sm px-2 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300"
                >
                  {{ tech.level }}
                </span>
              </li>
            </ul>
          </div>
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
      { name: "Express", level: "Intermedio", icon: "fas fa-server" },
      { name: "Node.js", level: "Intermedio", icon: "fab fa-node-js" },
      { name: "CAKEPHP", level: "Básico", icon: "fas fa-birthday-cake" },
      { name: "Django", level: "Básico", icon: "fas fa-leaf" },
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
    type: "Nube",
    technologies: [
      { name: "AWS", level: "Básico", icon: "fab fa-aws" },
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

