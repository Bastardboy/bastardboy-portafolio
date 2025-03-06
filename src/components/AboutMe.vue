<template>
  <section id="AboutMe" class="p-6 bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col md:flex-row items-center md:items-start gap-6">
    
    <!-- Imagen -->
    <div @click="changeInfo" title="Apretar para cambiar la información" 
         class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300 dark:border-gray-600 shadow-lg cursor-pointer">
      <img :src="aboutMe.image" :alt="aboutMe.alt" aria-label="Fotos David Pazán" loading="lazy" class="w-full h-full object-cover">
    </div>

    <!-- Información -->
    <div class="text-center md:text-left">
      <h2 class="text-2xl font-bold mb-4">{{ sectionTitle }}</h2>
      <p class="text-lg font-bold text-gray-800 dark:text-gray-200">{{ name }}</p>

      <!-- Información profesional/personal -->
      <div class="mb-4">
        <p v-for="(desc, index) in aboutMe.info" :key="'info-' + index" class="text-sm text-gray-700 dark:text-gray-300 flex items-center">
          <i class="fas fa-check-circle mr-2 text-gray-800 dark:text-gray-200"></i> {{ desc }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Nombre del usuario
const name = ref("David Pazán");

// Información original (profesional)
const originalInfo = {
  info: [
    "Ingeniero Civil Informático y Telecomunicaciones.",
    "Principal interés en el desarrollo web y de software.",
    "Aprendizaje constante de las nuevas y viejas tecnologías.",
    "Perfil adaptable y proactivo."
  ],
  image: "/images/David1.webp",
  alt: "Foto de David Pazán"
};

// Información alterna (personal)
const alternateInfo = {
  info: [
    "Fan de los videojuegos.",
    "Me gustan mucho las series y películas Animadas, de suspenso o Dramas.",
    "Futbolero"
  ],
  image: "/images/David2.webp",
  alt: "Foto alterna de David Pazán"
};

// Estado reactivo para la información mostrada
const aboutMe = ref({ ...originalInfo });
const isOriginal = ref(true);

// Propiedad reactiva para el título de la sección
const sectionTitle = ref("Sobre Mí Profesional");

// Función para cambiar la información mostrada
const changeInfo = () => {
  isOriginal.value = !isOriginal.value;
  aboutMe.value = isOriginal.value ? { ...originalInfo } : { ...alternateInfo };
  sectionTitle.value = isOriginal.value ? "Sobre Mí Profesional" : "Sobre Mí Personal"; // Cambia el título
};
</script>