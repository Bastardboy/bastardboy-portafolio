<template>
	<section class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-6 flex-1 pt-20 md:pt-32 items-start">
	  <!-- Columna Educación -->
	  <div class="md:col-span-1 h-full flex flex-col">
		<div class="text-center mb-8 group cursor-default min-h-[150px] flex items-center justify-center">
		  <h2 class="relative">
			<span class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-4">
			  Educación
			</span>
			<div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-4"></div>
		  </h2>
		</div>
  
		<transition
		  mode="out-in"
		  enter-active-class="transition-opacity duration-500 ease-out"
		  leave-active-class="transition-opacity duration-300 ease-in"
		  enter-from-class="opacity-0 translate-x-4"
		  enter-to-class="opacity-100 translate-x-0"
		  leave-from-class="opacity-100 translate-x-0"
		  leave-to-class="opacity-0 -translate-x-4"
		>
		  <div v-if="educationInfo" :key="'education-info'" class="space-y-4 text-center flex-1">
			<p class="text-lg font-bold text-gray-800 dark:text-gray-200">{{ educationInfo.degree }}</p>
			<p class="text-sm text-gray-700 dark:text-gray-300">{{ educationInfo.description }}</p>
		  </div>
		</transition>
	  </div>
  
	  <!-- Columna Certificados -->
	  <div class="md:col-span-1 h-full flex flex-col">
		<div class="text-center mb-8 group cursor-default min-h-[150px] flex items-center justify-center">
		  <h2 class="relative">
			<span class="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-4">
			  Certificados
			</span>
			<div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-4"></div>
		  </h2>
		</div>
  
		<transition
		  mode="out-in"
		  enter-active-class="transition-opacity duration-500 ease-out"
		  leave-active-class="transition-opacity duration-300 ease-in"
		  enter-from-class="opacity-0 translate-x-4"
		  enter-to-class="opacity-100 translate-x-0"
		  leave-from-class="opacity-100 translate-x-0"
		  leave-to-class="opacity-0 -translate-x-4"
		>
		  <div v-if="certificates.length" :key="'certificates-list'" class="space-y-4 text-center flex-1">
			<ul class="space-y-2">
			  <li 
				v-for="(cert, index) in certificates" 
				:key="index" 
				class="text-sm text-gray-700 dark:text-gray-300"
			  >
				<a 
				  :href="cert.link"
				  target="_blank"
				  rel="noopener noreferrer"
				  class="text-blue-600 dark:text-blue-400 hover:underline inline-block max-w-[90%] truncate"
				>
				  {{ cert.title }}
				</a>
			  </li>
			</ul>
		  </div>
		</transition>
	  </div>
	</section>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Información educativa
  const educationInfo = ref({
	degree: "Ingeniero Civil Informático y Telecomunicaciones, Universidad Diego Portales, 2024",
	description: "El plan de estudios se dividió en temas tanto de Programación OOP, como en temas de desarrollo Web y de Software. También está el estudio de la Ingeniería de Software y por último estudios para la ciencia de datos e inteligencias artificiales."
  });
  
  // Certificados
  const certificates = ref([
	{
	  title: "Python for OOP: The A-to-Z OOP Python Programming Course",
	  link: "https://www.udemy.com/certificate/UC-fb92a21d-d80a-4bb6-9e01-e5f4f7ea1fa9/"
	},
  ]);
  </script>
  