<template>
    <header class="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <!-- Logo o título -->
        <h1 class="text-2xl font-bold">David Pazán</h1>
  
        <!-- Menú de navegación -->
        <nav class="flex space-x-6 font-medium text-white">
          <a href="/aboutme" class="hover:text-gray-300 transition">Sobre mí</a>
          <a href="/project" class="hover:text-gray-300 transition">Proyectos</a>
          <a href="/techs" class="hover:text-gray-300 transition">Tecnologías</a>
          <a href="/studies" class="hover:text-gray-300 transition">Estudios</a>
          <a href="/contact" class="hover:text-gray-300 transition">Contacto</a>
        </nav>
  
        <!-- Botón de cambio de tema -->
        <ThemeSwitcher />
      </div>
    </header>
  </template>
  
  <script setup>
  import ThemeSwitcher from './ThemeSwitcher.vue';
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente */
  </style>
  