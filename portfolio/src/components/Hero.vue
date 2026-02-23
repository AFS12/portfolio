<template>
  <section class="min-h-[85vh] flex items-center justify-center px-6 relative overflow-hidden parallax-bg" id="about">
    <div class="absolute inset-0 bg-white/60 dark:bg-[#0a0a0a]/80 backdrop-blur-[1px] dark:backdrop-blur-[2px]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none opacity-60 hidden dark:block"></div>
    <div class="max-w-4xl w-full flex flex-col gap-8 relative z-10">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 dark:bg-surface-dark/50 backdrop-blur-sm border border-black/5 dark:border-white/10 w-fit shadow-sm dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(25,230,94,0.8)]"></span>
          <span class="text-xs font-bold dark:font-medium text-primary-dark dark:text-primary tracking-wide uppercase dark:drop-shadow-[0_0_5px_rgba(25,230,94,0.3)]">{{ $t('hero.openToWork') }}</span>
        </div>
        <h1 class="text-5xl md:text-7xl lg:text-8xl font-black text-text-main dark:text-white leading-[0.9] tracking-tight drop-shadow-sm dark:drop-shadow-2xl">
          {{ $t('hero.developer') }} <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 dark:from-slate-400 to-slate-900 dark:to-slate-600">{{ $t('hero.frontEnd') }}</span>
        </h1>
        <h2 class="text-xl md:text-2xl text-text-muted dark:text-slate-300 font-light max-w-2xl leading-relaxed">
          {{ $t('hero.specialistIn') }} <span class="text-primary-dark dark:text-primary font-medium bg-primary/10 dark:bg-transparent px-1 dark:px-0 rounded dark:drop-shadow-[0_0_8px_rgba(25,230,94,0.3)]">Vue.js</span>, <span class="text-primary-dark dark:text-primary font-medium bg-primary/10 dark:bg-transparent px-1 dark:px-0 rounded dark:drop-shadow-[0_0_8px_rgba(25,230,94,0.3)]">JavaScript</span> {{ $t('hero.and') }} <span class="text-primary-dark dark:text-primary font-medium bg-primary/10 dark:bg-transparent px-1 dark:px-0 rounded dark:drop-shadow-[0_0_8px_rgba(25,230,94,0.3)]">Cypress</span>.
        </h2>
        <p class="text-text-body dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
          {{ $t('hero.description') }}
        </p>
      </div>
      <div class="flex flex-wrap items-center gap-4 pt-4">
        <a class="group flex items-center justify-center gap-2 h-12 px-8 bg-text-main dark:bg-primary hover:bg-black dark:hover:bg-primary/90 text-white dark:text-background-dark font-bold text-sm rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(25,230,94,0.4)]" href="#contact">
          {{ $t('hero.contactMe') }}
          <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
        <a class="glass-card flex items-center justify-center gap-2 h-12 px-8 !bg-white/50 dark:!bg-transparent hover:!bg-white dark:hover:!bg-white/5 text-text-main dark:text-white font-medium text-sm rounded-lg transition-all !border-black/10 dark:!border-white/10 hover:!border-black/20 dark:hover:!border-white/30 hover:!shadow-md dark:!shadow-none dark:hover:!shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="https://www.linkedin.com/in/arthurayresdev/" target="_blank" rel="noopener noreferrer">
          {{ $t('hero.linkedin') }}
          <span class="material-symbols-outlined text-[18px]">open_in_new</span>
        </a>
      </div>
    </div>
  </section>
</template>
