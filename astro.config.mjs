// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
    vite :{
        plugins: [tailwindcss()]
    },
    integrations: [vue()],
    output :"server",
    adapter: vercel(),
});