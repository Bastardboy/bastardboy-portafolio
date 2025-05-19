<template>
  <!-- Sección de Contacto -->
  <section class="flex flex-col items-center justify-center w-full max-w-7xl mx-auto p-6 flex-1 pt-20 md:pt-32">
    <div class="flex justify-center items-center w-full py-8 md:py-12">
      <div class="max-w-4xl w-full mx-auto text-center">
        <!-- Contenido sin cambios -->
        <div class="mb-8 md:mb-12 group cursor-default">
          <h2 class="inline-block relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent px-4">
            Contacto
            <div class="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mx-4"></div>
          </h2>
        </div>

        <div class="space-y-6 md:space-y-8">
          <p class="text-xl md:text-2xl text-center text-gray-700 dark:text-gray-300">
            ¡Hablemos! Contáctame a través de mis redes profesionales
          </p>

          <div class="flex justify-center space-x-6">
            <!-- LinkedIn -->
            <a
              href="https://www.linkedin.com/in/david-pazan"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-200/50 dark:border-gray-600/50"
              aria-label="Perfil de LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-[#0A66C2] dark:text-blue-400 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-10h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/Bastardboy"
              target="_blank"
              rel="noopener noreferrer"
              class="p-4 rounded-full bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-200/50 dark:border-gray-600/50"
              aria-label="Repositorio en GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.267 1.98-.399 3.003-.404 1.023.005 2.047.137 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          <!-- Información de contacto -->
          <div class="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <p class="text-center text-gray-600 dark:text-gray-400">
              O envíame un correo haciendo click:
            </p>

            <!-- Botón con estilo -->
            <div class="flex justify-center items-center gap-6 mt-4 ">
              <div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4">
                <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="images/David1.webp" alt="Imagen de contacto" />
                <div class="space-y-2 text-center sm:text-left">
                  <div class="space-y-0.5">
                    <p class="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 bg-clip-text text-transparent">
                      {{ name }}
                    </p>
                  </div>
                  <a
                    role="button"
                    :href="mailtoLink"
                    @click.prevent="sendEmail"
                    class="border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-200 hover:bg-purple-600 dark:hover:bg-purple-700 hover:text-white dark:hover:text-white active:bg-purple-700 dark:active:bg-purple-800 px-6 py-2 rounded-lg transition-all duration-300 hover:border-purple-700 dark:hover:border-purple-500 cursor-pointer"
                  >
                    Enviar Correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "David Pazán",
      // Configuramos el mailto con parámetros codificados
      mailtoLink: 'mailto:davidpazan2@gmail.com?subject=Contacto%20desde%20Portfolio&body=Hola%20David,'
    };
  },
  methods: {
    async sendEmail() {
      try {
        // Método 1: Intento principal para desktop
        if (this.isMobile()) {
          // Método específico para móviles
          window.open(this.mailtoLink, '_system');
        } else {
          // Método estándar para navegadores de escritorio
          window.location.href = this.mailtoLink;
        }

        // Método 2: Fallback después de 300ms
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!document.hidden) {
          window.open('https://mail.google.com/mail/?view=cm&fs=1&to=davidpazan2@gmail.com', '_blank');
        }
      } catch (error) {
        console.error('Error:', error);
        // Método 3: Copiar al portapapeles como último recurso
        await this.copyToClipboard();
      }
    },
    isMobile() {
      // Detectar dispositivos móviles de forma precisa
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    },
    async copyToClipboard() {
      try {
        await navigator.clipboard.writeText('davidpazan2@gmail.com');
        alert('Email copiado: davidpazan2@gmail.com');
      } catch (err) {
        console.error('Error al copiar:', err);
        alert('Por favor copia manualmente: davidpazan2@gmail.com');
      }
    }
  }
};
</script>