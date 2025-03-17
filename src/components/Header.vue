<template>
  <header class="bg-blue-900 text-white p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo o título -->
      <a href="/" class="text-2xl font-bold font-mono tracking-wide">
      <h1 class="text-2xl md:text-3xl font-bold font-mono tracking-wide">
        David Pazán
      </h1>
    </a>
      <!-- Menú de navegación -->
      <nav class="hidden md:flex space-x-8">
        <a 
          v-for="link in links"
          :key="link.path"
          :href="link.path"
          class="nav-link group relative text-lg font-medium hover:text-gray-300 transition-all"
        >
          {{ link.name }}
          <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-300 transition-all group-hover:w-full"></span>
        </a>
      </nav>

      <!-- Botón de cambio de tema -->
      <ThemeSwitcher class="ml-4" />

      <!-- Menú hamburguesa para dispositivos pequeños -->
      <div class="md:hidden">
        <button 
          @click="toggleMenu"
          class="text-white hover:text-gray-300 transition-colors"
        >
          <svg 
            class="w-8 h-8"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Menú desplegable en dispositivos móviles -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-blue-900/95 backdrop-blur-sm py-4"
    >
      <div class="container mx-auto flex flex-col space-y-6 text-center">
        <a 
          v-for="link in links"
          :key="link.path"
          :href="link.path"
          class="nav-link-mobile text-xl font-medium py-2 hover:text-gray-300 hover:bg-white/10 rounded-lg transition-colors"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

const isMenuOpen = ref(false);

const links = [
  { name: 'Sobre mí', path: '/aboutme' },
  { name: 'Proyectos', path: '/project' },
  { name: 'Tecnologías', path: '/techs' },
  { name: 'Estudios', path: '/studies' },
  { name: 'Contacto', path: '/contact' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.03em;
}

.nav-link-mobile {
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@supports (font-variation-settings: normal) {
  .nav-link, .nav-link-mobile {
    font-family: 'Inter var', sans-serif;
  }
}
</style>