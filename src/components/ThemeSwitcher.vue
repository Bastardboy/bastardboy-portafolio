<script setup lang="ts">
import { ref, onMounted } from 'vue';

const theme = ref('light');
const ready = ref(false);

onMounted(() => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  theme.value = currentTheme;
  ready.value = true;
});

const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light';
  theme.value = newTheme;

  document.documentElement.classList.toggle('dark', newTheme === 'dark');
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
};
</script>
<template>
  <div v-if="ready" class="theme-switcher flex items-center">
    <span class="mr-2 text-lg text-white font-mono font-bold tracking-wide">Claro</span>

    <button 
      @click="toggleTheme"
      aria-label="Cambiar tema de la página"
      class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none"
    >
      <!-- Toggle Ball -->
      <span 
        class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform duration-300"
        :class="{ 'translate-x-5': theme === 'dark' }"
      ></span>

      <!-- Background -->
      <span 
        class="absolute left-0 w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-200"
      ></span>

      <!-- Icon -->
      <span 
        class="absolute left-1 top-1 w-4 h-4 flex items-center justify-center transition-transform transform duration-300"
        :class="{ 'translate-x-5': theme === 'dark' }"
      >
        <i v-if="theme === 'light'" class="fas fa-sun text-yellow-500"></i>
        <i v-else class="fas fa-moon text-gray-300"></i>
      </span>
    </button>

    <span class="ml-2 text-lg text-white font-mono font-bold tracking-wide">Oscuro</span>
  </div>
</template>
