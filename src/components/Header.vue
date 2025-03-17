<template>
  <header class="bg-blue-900 text-white p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo o título -->
      <h1 class="text-2xl md:text-3xl font-bold">David Pazán</h1>

      <!-- Menú de navegación -->
      <nav class="hidden md:flex space-x-6 font-medium text-white">
        <a href="/aboutme" class="hover:text-gray-300 transition">Sobre mí</a>
        <a href="/project" class="hover:text-gray-300 transition">Proyectos</a>
        <a href="/techs" class="hover:text-gray-300 transition">Tecnologías</a>
        <a href="/studies" class="hover:text-gray-300 transition">Estudios</a>
        <a href="/contact" class="hover:text-gray-300 transition">Contacto</a>
      </nav>

      <!-- Botón de cambio de tema -->
      <ThemeSwitcher />

      <!-- Menú hamburguesa para dispositivos pequeños -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <!-- Menú desplegable en dispositivos móviles -->
    <div v-if="isMenuOpen" class="md:hidden flex flex-col items-center space-y-4 mt-4">
      <a href="/aboutme" class="hover:text-gray-300 transition">Sobre mí</a>
      <a href="/project" class="hover:text-gray-300 transition">Proyectos</a>
      <a href="/techs" class="hover:text-gray-300 transition">Tecnologías</a>
      <a href="/studies" class="hover:text-gray-300 transition">Estudios</a>
      <a href="/contact" class="hover:text-gray-300 transition">Contacto</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
