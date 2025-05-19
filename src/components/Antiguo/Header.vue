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
      <ThemeSwitcher client:load class="mr-4"/>

      <!-- Menú hamburguesa animado a X -->
      <div class="md:hidden ml-2">
        <button 
          @click="toggleMenu"
          class="text-white hover:text-gray-300 transition-colors relative w-8 h-8"
        >
          <div class="absolute inset-0 transform transition-all duration-300">
            <!-- Línea superior -->
            <span 
              class="absolute left-0 w-full h-[2px] bg-current transform transition-all duration-300"
              :class="isMenuOpen ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0 -translate-y-1'"
            ></span>
            
            <!-- Línea media -->
            <span 
              class="absolute left-0 w-full h-[2px] bg-current transform transition-all duration-300 top-1/2 -translate-y-1/2"
              :class="isMenuOpen ? 'opacity-0' : 'opacity-100'"
            ></span>
            
            <!-- Línea inferior -->
            <span 
              class="absolute left-0 w-full h-[2px] bg-current transform transition-all duration-300"
              :class="isMenuOpen ? '-rotate-45 top-1/2 -translate-y-1/2' : 'bottom-0 translate-y-1'"
            ></span>
          </div>
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
import { ref, onMounted } from 'vue';
import ThemeSwitcher from './ThemeSwitcher.vue';

// 1. Estado inicial del menú
const isMenuOpen = ref(false);

// 2. Links de navegación (deberías mover esto a un archivo de configuración)
const links = [
  { name: 'Sobre mí', path: '/aboutme' },
  { name: 'Proyectos', path: '/project' },
  { name: 'Tecnologías', path: '/techs' },
  { name: 'Estudios', path: '/studies' },
  { name: 'Contacto', path: '/contact' }
];

// 3. Sincronización del tema con el componente ThemeSwitcher
onMounted(() => {
  // Forzar sincronización inicial del tema
  const initialTheme = document.documentElement.getAttribute('data-theme');
  if (initialTheme) {
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }
});

// 4. Modificar la directiva del ThemeSwitcher (importante!)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<!-- Añade esto en tu CSS -->
<style>
/* Transición suave para el menú móvil */
.nav-link-mobile {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Evitar FOUC en el tema */
[vue\:not-loaded] .theme-switcher {
  opacity: 0;
}
[vue\:loaded] .theme-switcher {
  opacity: 1;
  transition: opacity 0.3s ease;
}
</style>
