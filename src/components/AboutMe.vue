<template>
  <section
    class="flex flex-col-reverse md:flex-row items-center gap-8 w-full max-w-7xl mx-auto p-6 min-h-[70vh]"
  >
    <!-- Contenedor de Imagen (ahora primero en mobile, segundo en md) -->
    <div
      class="w-full flex justify-center items-center md:w-1/3 md:order-2"
    >
      <transition
        mode="out-in"
        enter-active-class="transition-[opacity,transform] duration-500 ease-out"
        leave-active-class="transition-[opacity,transform] duration-300 ease-in"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
      >
        <div
          :key="aboutMe.image"
          @click="changeInfo"
          title="Apretar para cambiar la información"
          class="w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-600 cursor-pointer shadow-2xl hover:shadow-3xl transition-all"
        >
          <img
            :src="aboutMe.image"
            :alt="aboutMe.alt"
            loading="lazy"
            class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </transition>
    </div>

    <!-- Contenedor de Información -->
    <div class="w-full md:flex-1 md:order-1 max-w-prose mx-auto">
      <!-- Nombre Centrado -->
      <div class="text-center mb-8 group cursor-default">
        <h2 class="inline-block relative">
          <span
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-4"
          >
            {{ name }}
          </span>
          <div
            class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-4"
          ></div>
        </h2>
        <p
          class="mt-4 text-sm font-light text-gray-400 dark:text-gray-500 flex items-center justify-center gap-2"
        >
          <i class="fas fa-mouse-pointer text-xs animate-bounce"></i>
          <span class="animate-pulse"
            >Click en la imagen para alternar información</span
          >
        </p>
      </div>

      <!-- Lista de Información -->
      <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-500 ease-out"
        leave-active-class="transition-opacity duration-300 ease-in"
        enter-from-class="opacity-0 translate-x-4"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-4"
      >
        <ul
          v-if="aboutMe.info"
          :key="'info-list'"
          class="space-y-4"
        >
          <li
            v-for="(desc, index) in aboutMe.info"
            :key="index"
            class="flex items-start p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
            :style="{
              backgroundColor: 'var(--card-color)',
              color: 'var(--text-color)',
            }"
          >
            <i
              class="fas fa-check-circle mt-1 mr-4 text-xl text-blue-500 dark:text-blue-400"
            ></i>
            <span class="flex-1 text-lg">{{ desc }}</span>
          </li>
        </ul>
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
    "Me gustan mucho las series y películas.",
    "Futbolero.",
    "Lectura ocasional."
  ],
  image: "/images/David2.webp",
  alt: "Foto alterna de David Pazán"
};

// Estado reactivo para la información mostrada
const aboutMe = ref({ ...originalInfo });
const isOriginal = ref(true);


// Función para cambiar la información mostrada
const changeInfo = () => {
  isOriginal.value = !isOriginal.value;
  aboutMe.value = isOriginal.value ? { ...originalInfo } : { ...alternateInfo };
};
</script>
