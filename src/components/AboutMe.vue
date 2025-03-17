<template>
  <section class="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl mx-auto p-6">
    <!-- Contenedor de Información -->
    <div class="md:flex-1 md:order-1 w-full">
      <!-- Nombre Centrado -->
      <h2 class="mb-6 text-center group cursor-default">
        <div class="inline-block relative">
          <span class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-2">
            {{ name }}
          </span>
          <div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-2"></div>
        </div>
      </h2>
      <p class="text-sm font-light text-center mb-2 text-gray-400 dark:text-gray-500 flex items-center justify-center gap-1">
        <i class="fas fa-mouse-pointer text-xs animate-bounce"></i>
        <span class="animate-pulse">Click en la imagen</span>
      </p>

      <!-- Lista de Información -->
      <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-500 ease-out"
        leave-active-class="transition-opacity duration-300 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul v-if="aboutMe.info" :key="'info-list'" class="space-y-4 pl-6">
          <li 
            v-for="(desc, index) in aboutMe.info" 
            :key="index" 
            class="text-gray-700 dark:text-gray-300 flex items-start"
          >
            <i class="fas fa-check-circle mt-1 mr-3 text-lg text-blue-500 dark:text-blue-400"></i>
            <span class="flex-1">{{ desc }}</span>
          </li>
        </ul>
      </transition>
    </div>

    <!-- Contenedor de Imagen -->
    <div class="md:w-1/3 md:order-2 flex justify-center">
      <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-500 ease-out"
        leave-active-class="transition-opacity duration-300 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          :key="aboutMe.image"
          @click="changeInfo" 
          title="Apretar para cambiar la información"
          class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          <img 
            :src="aboutMe.image" 
            :alt="aboutMe.alt" 
            loading="lazy" 
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          >
        </div>
      </transition>
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
    "En constante aprendizaje y mejora para entregar un servicio acorde.",
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
  sectionTitle.value = isOriginal.value ? "Sobre Mí Profesional" : "Sobre Mí Personal";
};
</script>