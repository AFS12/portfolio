<template>
  <section class="py-20 border-t border-black/5 dark:border-white/5 relative bg-white/30 dark:bg-transparent backdrop-blur-sm dark:backdrop-blur-none">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <h3 class="text-sm font-bold tracking-widest text-text-muted dark:text-slate-500 uppercase mb-8 flex items-center gap-4">
        {{ $t('technologies.title') }}
        <span class="h-px w-20 bg-black/10 dark:bg-white/10"></span>
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="glass-card group flex flex-col justify-between p-6 rounded-xl h-32">
          <span class="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors dark:group-hover:drop-shadow-[0_0_8px_rgba(25,230,94,0.5)]">javascript</span>
          <span class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">JavaScript</span>
        </div>
        <div class="glass-card group flex flex-col justify-between p-6 rounded-xl h-32">
          <span class="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors dark:group-hover:drop-shadow-[0_0_8px_rgba(25,230,94,0.5)]">code_blocks</span>
          <span class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">Vue.js 3</span>
        </div>
        <div class="glass-card group flex flex-col justify-between p-6 rounded-xl h-32">
          <span class="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors dark:group-hover:drop-shadow-[0_0_8px_rgba(25,230,94,0.5)]">bug_report</span>
          <span class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">Cypress</span>
        </div>
        <div class="glass-card group flex flex-col justify-between p-6 rounded-xl h-32">
          <span class="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors dark:group-hover:drop-shadow-[0_0_8px_rgba(25,230,94,0.5)]">design_services</span>
          <span class="text-lg font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">SCSS</span>
        </div>
      </div>
    </div>
  </section>
</template>
