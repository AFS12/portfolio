<template>
  <section class="py-24 px-6 relative" id="experience">
    <div class="max-w-5xl mx-auto relative z-10">
      <div class="flex items-end justify-between mb-16 border-b border-black/10 dark:border-white/10 pb-6">
        <h2 class="text-3xl md:text-4xl font-bold text-text-main dark:text-white tracking-tight dark:drop-shadow-lg">{{ $t('experience.title') }}</h2>
        <span class="text-text-muted dark:text-slate-500 hidden md:inline-block font-mono bg-black/5 dark:bg-white/5 px-3 py-1 rounded-md border border-black/5 dark:border-white/5">2020 — {{ $t('experience.presente') }}</span>
      </div>
      <div class="space-y-12">
        <div class="group relative pl-8 md:pl-0">
          <div class="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 md:hidden"></div>
          <div class="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary md:hidden shadow-[0_0_8px_rgba(25,230,94,0.8)]"></div>
          <div class="glass-card p-6 md:p-8 rounded-2xl grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 hover:border-primary/20 bg-white dark:bg-transparent">
            <div class="md:text-right md:border-r md:border-black/5 dark:md:border-white/5 md:pr-12">
              <h4 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">Helyo Tecnologia</h4>
              <p class="text-sm text-text-muted dark:text-slate-400 mt-1 font-mono">2022 — {{ $t('experience.presente') }}</p>
              <span class="inline-block mt-3 px-2 py-1 bg-primary/10 text-primary-dark dark:text-primary text-xs font-bold dark:font-medium rounded border border-primary/20">{{ $t('experience.helyoRole') }}</span>
            </div>
            <div>
              <h5 class="text-lg text-text-main dark:text-white font-semibold dark:font-medium mb-3">{{ $t('experience.helyoTitle') }}</h5>
              <p class="text-text-body dark:text-slate-400 leading-relaxed mb-4">
                {{ $t('experience.helyoDescription') }}
              </p>
              <ul class="flex flex-wrap gap-2">
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Vue.js</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Cypress</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">SCSS</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Laravel</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="group relative pl-8 md:pl-0">
          <div class="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 md:hidden"></div>
          <div class="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 md:hidden"></div>
          <div class="glass-card p-6 md:p-8 rounded-2xl grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 hover:border-primary/20 bg-white dark:bg-transparent">
            <div class="md:text-right md:border-r md:border-black/5 dark:md:border-white/5 md:pr-12">
              <h4 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">Gespag</h4>
              <p class="text-sm text-text-muted dark:text-slate-400 mt-1 font-mono">2021 — 2022</p>
              <span class="inline-block mt-3 px-2 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-slate-300 text-xs font-bold dark:font-medium rounded">{{ $t('experience.gespagRole') }}</span>
            </div>
            <div>
              <h5 class="text-lg text-text-main dark:text-white font-semibold dark:font-medium mb-3">{{ $t('experience.gespagTitle') }}</h5>
              <p class="text-text-body dark:text-slate-400 leading-relaxed mb-4">
                {{ $t('experience.gespagDescription') }}
              </p>
              <ul class="flex flex-wrap gap-2">
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Vue.js</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">JavaScript</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">CSS3</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Git</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="group relative pl-8 md:pl-0">
          <div class="absolute left-0 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10 md:hidden"></div>
          <div class="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700 md:hidden"></div>
          <div class="glass-card p-6 md:p-8 rounded-2xl grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 hover:border-primary/20 bg-white dark:bg-transparent">
            <div class="md:text-right md:border-r md:border-black/5 dark:md:border-white/5 md:pr-12">
              <h4 class="text-xl font-bold text-text-main dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">Agill</h4>
              <p class="text-sm text-text-muted dark:text-slate-400 mt-1 font-mono">2021</p>
              <span class="inline-block mt-3 px-2 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-slate-300 text-xs font-bold dark:font-medium rounded">{{ $t('experience.agillRole') }}</span>
            </div>
            <div>
              <h5 class="text-lg text-text-main dark:text-white font-semibold dark:font-medium mb-3">{{ $t('experience.agillTitle') }}</h5>
              <p class="text-text-body dark:text-slate-400 leading-relaxed mb-4">
                {{ $t('experience.agillDescription') }}
              </p>
              <ul class="flex flex-wrap gap-2">
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">Vue.js</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">JavaScript</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">HTML5</li>
                <li class="px-3 py-1 bg-gray-100 dark:bg-surface-highlight/50 border border-gray-200 dark:border-white/5 rounded-full text-xs text-gray-700 dark:text-slate-300 font-medium dark:font-normal">CSS3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
