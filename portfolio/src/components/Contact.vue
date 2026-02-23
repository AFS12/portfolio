<script setup>
import { ref, watch } from 'vue'

const isHovered = ref(false)
const copied = ref(false)
const email = 'arthurmbayres@gmail.com'
const displayedEmail = ref('')
let typingInterval = null

const startTyping = () => {
    displayedEmail.value = ''
    let i = 0
    clearInterval(typingInterval)
    typingInterval = setInterval(() => {
        if (i < email.length) {
            displayedEmail.value += email[i]
            i++
        } else {
            clearInterval(typingInterval)
        }
    }, 15)
}

const stopTyping = () => {
    clearInterval(typingInterval)
    displayedEmail.value = ''
}

watch([isHovered, copied], ([newHover, newCopied]) => {
    if (newHover && !newCopied) {
        startTyping()
    } else {
        stopTyping()
    }
})

const copyEmail = () => {
  navigator.clipboard.writeText(email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 3000)
}
</script>

<template>
  <section class="py-24 px-6 relative" id="contact">
    <div class="absolute inset-0 bg-gradient-to-t from-gray-200 dark:from-black via-gray-100 dark:via-black/90 to-transparent z-0 pointer-events-none opacity-80 dark:opacity-100"></div>
    <div class="max-w-4xl mx-auto text-center relative z-10">
      <h2 class="text-4xl md:text-5xl font-black text-text-main dark:text-white mb-6 dark:drop-shadow-lg">{{ $t('contact.title') }}</h2>
      <p class="text-text-body dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
        {{ $t('contact.description') }}
      </p>
      
      <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-16 relative">
        <button 
          @click="copyEmail"
          @mouseenter="isHovered = true"
          @mouseleave="isHovered = false"
          class="group flex items-center gap-3 px-8 py-4 bg-text-main dark:bg-white text-white dark:text-black font-bold rounded-lg hover:bg-black dark:hover:bg-slate-200 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-full md:w-[350px] justify-center cursor-pointer min-h-[64px]"
        >
          <span class="material-symbols-outlined transition-all duration-300" :class="{ 'scale-110 rotate-12': isHovered && !copied }">
            {{ isHovered && !copied ? 'content_copy' : 'mail' }}
          </span>
          <span class="transition-all duration-300 font-mono">
            {{ isHovered && !copied ? displayedEmail : $t('contact.sendEmail') }}<span v-if="isHovered && !copied" class="animate-pulse">|</span>
          </span>
        </button>

        <!-- Pop-up message -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform scale-95 opacity-0 -translate-y-2"
          enter-to-class="transform scale-100 opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="transform scale-100 opacity-100 translate-y-0"
          leave-to-class="transform scale-95 opacity-0 -translate-y-2"
        >
          <div v-if="copied" class="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-full shadow-xl border border-primary/20 backdrop-blur-sm z-50">
            <span class="material-symbols-outlined text-[18px]">check_circle</span>
            <span class="text-xs font-bold uppercase tracking-wider">{{ $t('contact.copied') }}</span>
          </div>
        </transition>
      </div>

      <div class="pt-10 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-text-muted dark:text-slate-500 text-sm">
          {{ $t('contact.rights') }}
        </div>
        <div class="flex items-center gap-6">
          <a class="text-text-muted dark:text-slate-400 hover:text-primary-dark dark:hover:text-primary transition-colors font-medium text-sm dark:hover:drop-shadow-[0_0_5px_rgba(25,230,94,0.5)]" href="https://www.linkedin.com/in/arthurayresdev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a class="text-text-muted dark:text-slate-400 hover:text-primary-dark dark:hover:text-primary transition-colors font-medium text-sm dark:hover:drop-shadow-[0_0_5px_rgba(25,230,94,0.5)]" href="https://github.com/AFS12" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  </section>
</template>
