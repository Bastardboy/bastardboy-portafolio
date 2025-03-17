<template>
  <section class="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl mx-auto p-6 min-h-[70vh]">
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

    <div
      :class="[
        'grid gap-4 mx-auto transition-all duration-500',
        selectedCategory ? 'grid-cols-1 max-w-3xl' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl'
      ]"
    >
      <transition
        v-for="category in categories"
        :key="category.type"
        enter-active-class="transition-[opacity,transform] duration-300 ease-out"
        leave-active-class="transition-[opacity,transform] duration-200 ease-in"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          v-show="shouldShowCard(category.type)"
          class="card border shadow-md hover:shadow-xl p-6 rounded-xl transition-transform duration-300"
          :class="{
            'border-blue-400 scale-[1.02]': selectedCategory === category.type,
            'hover:scale-[1.02]': selectedCategory !== category.type
          }"
          @click="toggleCategory(category.type)"
          style="background-color: var(--card-color); color: var(--text-color); border-color: var(--card-color);"
        >
          <h3 class="text-xl font-semibold flex items-center justify-between mb-4">
            <span class="text-gray-800 dark:text-gray-100">{{ category.type }}</span>
            <i
              class="fas fa-chevron-down text-sm transform transition-transform duration-300 text-blue-500 dark:text-blue-400"
              :class="{ 'rotate-180': selectedCategory === category.type }"
            ></i>
          </h3>

          <div v-if="selectedCategory === category.type" class="mt-4 space-y-3">
            <ul class="space-y-3">
              <li
                v-for="tech in category.technologies"
                :key="tech.name"
                class="flex items-center p-3 rounded-lg bg-transparent dark:bg-transparent hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                style="background-color: var(--card-color); color: var(--text-color);"
              >
                <i
                  :class="tech.icon"
                  class="mr-3 text-xl w-6 text-center text-blue-500 dark:text-blue-400"
                ></i>
                <span class="flex-1 text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
                <span
                  v-if="tech.level && tech.level !== 'N/A'"
                  class="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 ml-4"
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
      { name: "Express", level: "Intermedio", icon: "fas fa-terminal" },
      { name: "Node.js", level: "Intermedio", icon: "fab fa-node-js" },
      { name: "CAKEPHP", level: "Básico", icon: "fas fa-birthday-cake" },
      { name: "Django", level: "Intermedio", icon: "fas fa-terminal"},
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
