<template>
  <section class="py-24 px-6 relative bg-white/40 dark:bg-transparent" id="projects">
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="flex items-center gap-4 mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main dark:text-white tracking-tight dark:drop-shadow-lg">{{ $t('projects.title') }}</h2>
        <div class="h-px bg-gradient-to-r from-primary/50 to-transparent flex-grow"></div>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="glass-card rounded-2xl overflow-hidden group hover:border-primary/40 dark:hover:border-primary/30 h-full flex flex-col bg-white dark:bg-transparent border border-gray-100 dark:border-transparent shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-all">
          <div class="h-48 md:h-52 overflow-hidden relative border-b border-gray-100 dark:border-none">
            <div class="absolute inset-0 bg-white/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img alt="Byprice Platform" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://byprice.com.br/wp-content/uploads/2024/05/carrossel-01.png"/>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{{ $t('projects.bypriceTitle') }}</h3>
              <a class="text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors" href="https://byprice.com.br/" target="_blank" rel="noopener noreferrer">
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
            <p class="text-text-body dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {{ $t('projects.bypriceDescription') }}
            </p>
            <div class="space-y-4 mt-auto">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-green-50 dark:bg-white/5 text-green-700 dark:text-slate-300 border border-green-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Vue.js 2</span>
                <span class="px-2 py-1 bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-slate-300 border border-blue-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Vuetify</span>
                <span class="px-2 py-1 bg-lime-50 dark:bg-white/5 text-lime-700 dark:text-slate-300 border border-lime-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Cypress</span>
                <span class="px-2 py-1 bg-red-50 dark:bg-white/5 text-red-700 dark:text-slate-300 border border-red-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Laravel</span>
              </div>
              <div class="pt-4 border-t border-gray-100 dark:border-white/5 flex gap-4">
                <a class="text-xs font-bold dark:font-medium text-primary-dark dark:text-primary hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-1" href="https://byprice.com.br/" target="_blank" rel="noopener noreferrer">
                  <span class="material-symbols-outlined text-[16px]">visibility</span> {{ $t('projects.liveDemo') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card rounded-2xl overflow-hidden group hover:border-primary/40 dark:hover:border-primary/30 h-full flex flex-col bg-white dark:bg-transparent border border-gray-100 dark:border-transparent shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-all">
          <div class="h-48 md:h-52 overflow-hidden relative border-b border-gray-100 dark:border-none">
            <div class="absolute inset-0 bg-white/10 dark:bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
            <img alt="Task Management SaaS" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://stepfy.io/wp-content/uploads/2024/10/colaboracao-1.png" target="_blank" rel="noopener noreferrer"/>
          </div>
          <div class="p-8 flex flex-col flex-grow">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{{ $t('projects.stepfyTitle') }}</h3>
              <a class="text-text-muted dark:text-slate-400 hover:text-text-main dark:hover:text-white transition-colors" href="https://stepfy.io/" target="_blank" rel="noopener noreferrer">
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
            <p class="text-text-body dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {{ $t('projects.stepfyDescription') }}
            </p>
            <div class="space-y-4 mt-auto">
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-green-50 dark:bg-white/5 text-green-700 dark:text-slate-300 border border-green-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Vue.js 3</span>
                <span class="px-2 py-1 bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-slate-300 border border-blue-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Vuetify</span>
                <span class="px-2 py-1 bg-indigo-50 dark:bg-white/5 text-indigo-700 dark:text-slate-300 border border-indigo-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">SCSS</span>
                <span class="px-2 py-1 bg-red-50 dark:bg-white/5 text-red-700 dark:text-slate-300 border border-red-100 dark:border-white/10 rounded text-[10px] uppercase font-bold tracking-wider">Laravel</span>
              </div>
              <div class="pt-4 border-t border-gray-100 dark:border-white/5 flex gap-4">
                <a class="text-xs font-bold dark:font-medium text-primary-dark dark:text-primary hover:text-text-main dark:hover:text-white transition-colors flex items-center gap-1" href="https://stepfy.io/" target="_blank" rel="noopener noreferrer">
                  <span class="material-symbols-outlined text-[16px]">code</span> {{ $t('projects.liveDemo') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
