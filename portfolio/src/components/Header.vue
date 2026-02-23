<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm dark:shadow-none transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="/logo.svg" alt="Arthur Ayres Logo" class="w-9 h-9 drop-shadow-[0_0_12px_rgba(25,230,94,0.6)]" />
        <h2 class="text-text-main dark:text-white text-lg font-bold tracking-tight">Arthur Ayres</h2>
      </div>
      <nav class="hidden md:flex items-center gap-8">
        <a class="nav-link text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors text-sm font-medium" href="#about">{{ $t('header.about') }}</a>
        <a class="nav-link text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors text-sm font-medium" href="#experience">{{ $t('header.experience') }}</a>
        <a class="nav-link text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors text-sm font-medium" href="#projects">{{ $t('header.projects') }}</a>
        <a class="nav-link text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors text-sm font-medium" href="#education">{{ $t('header.education') }}</a>
        <a class="nav-link text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors text-sm font-medium" href="#contact">{{ $t('header.contact') }}</a>
        <div class="h-4 w-px bg-black/10 dark:bg-white/10 mx-2"></div>
        <button @click="toggleLocale" aria-label="Toggle language" class="text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 font-bold text-sm w-10 flex items-center justify-center">
          {{ currentLocale.toUpperCase() }}
        </button>
        <button @click="$emit('toggle-theme')" aria-label="Toggle theme" class="text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
          <span class="material-symbols-outlined text-[20px]">{{ isDark ? 'dark_mode' : 'light_mode' }}</span>
        </button>
      </nav>
      <button class="md:hidden text-text-main dark:text-white p-2">
        <span class="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

const toggleLocale = () => {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
}
defineProps({
  isDark: {
    type: Boolean,
    required: true
  }
})

defineEmits(['toggle-theme'])
</script>
