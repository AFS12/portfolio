<template>
  <div class="app-wrapper">
    <!-- Background Elements -->
    <div v-show="!isDark" class="noise-overlay"></div>
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.4] dark:opacity-[0.03] bg-[size:40px_40px] bg-grid-pattern dark:bg-grid-pattern-dark transition-opacity duration-300"></div>
    
    <!-- Glows -->
    <div class="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen animate-pulse duration-10000 transition-colors duration-500"></div>
    <div class="fixed bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-400/10 dark:bg-purple-500/5 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"></div>

    <Header :is-dark="isDark" @toggle-theme="toggleTheme" />
    
    <main class="flex-grow pt-20 relative z-10 transition-colors duration-300">
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Technologies from './components/Technologies.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Education from './components/Education.vue'
import Contact from './components/Contact.vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  // Check system preference or default to dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = false
  }
  updateTheme()
})
</script>

<style>
/* Global transition styles */
html {
  scroll-behavior: smooth;
}
</style>
