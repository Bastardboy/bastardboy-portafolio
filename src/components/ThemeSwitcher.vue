<template>
  <div class="theme-switcher flex items-center">
    <span class="mr-2 text-sm text-white">Claro</span>
    <button 
      @click="toggleTheme"
      aria-label="Cambiar tema de la página"
      class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none"
    >
      <!-- Indicador del tema actual -->
      <span 
        class="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform transform"
        :class="{ 'translate-x-5': theme === 'dark' }"
      ></span>
      <!-- Fondo del botón que cambia de color según el tema -->
      <span 
        class="absolute left-0 w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full transition-colors duration-200"
      ></span>
      <!-- Icono del sol o la luna según el tema -->
      <span class="absolute left-1 top-1 w-4 h-4 flex items-center justify-center transition-transform duration-300"
        :class="{ 'translate-x-5': theme === 'dark' }">
        <i v-if="theme === 'light'" class="fas fa-sun text-yellow-500"></i>
        <i v-if="theme === 'dark'" class="fas fa-moon text-gray-300"></i>
      </span>
    </button>
    <span class="ml-2 text-sm text-white">Oscuro</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const theme = ref('light');

onMounted(() => {
  theme.value = document.documentElement.getAttribute('data-theme') || 'light';
});

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark');
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
};
</script>