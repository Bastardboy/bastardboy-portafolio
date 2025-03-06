<template>
  <section class="technologies-view p-4 bg-white dark:bg-gray-800 text-black dark:text-white">
    <h2 class="text-xl font-bold mb-4">Tecnologías</h2>

    <!-- Botones de categorías -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="category in categories"
        :key="category.type"
        @click="selectCategory(category.type)"
        title="Click para ver las tecnologías"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        {{ category.type }}
      </button>
    </div>

    <!-- Lista de tecnologías seleccionadas -->
    <div v-if="selectedCategory" class="mt-4">
      <h3 class="text-lg font-semibold">{{ selectedCategory }}</h3>
      <ul class="list-disc ml-5 mt-2">
        <li v-for="tech in selectedTechnologies" :key="tech.name" class="flex items-center">
          <i :class="tech.icon" class="mr-2"></i>
          {{ tech.name }}
          <span v-if="tech.level" class="text-sm text-gray-600 dark:text-gray-400"> - {{ tech.level }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

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
      { name: "Scrum",level:"N/A" , icon: "fas fa-project-diagram" },
      { name: "Kanban", level:"N/A",icon: "fas fa-columns" },
    ],
  },
]);

// Estado reactivo para la categoría seleccionada
const selectedCategory = ref<string | null>(null);

// Función para seleccionar una categoría
const selectCategory = (category: string) => {
  selectedCategory.value = selectedCategory.value === category ? null : category;
};

// Función para btener las tecnologías de la categoría seleccionada
const selectedTechnologies = computed(() => {
  return categories.value.find(c => c.type === selectedCategory.value)?.technologies || [];
});
</script>