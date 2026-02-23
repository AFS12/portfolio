<template>
  <section class="py-24 px-6 relative" id="education">
    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid md:grid-cols-2 gap-12">
        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-primary/10 rounded-lg text-primary-dark dark:text-primary shadow-sm dark:shadow-[0_0_10px_rgba(25,230,94,0.2)]">
              <span class="material-symbols-outlined">school</span>
            </div>
            <h2 class="text-2xl font-bold text-text-main dark:text-white">{{ $t('education.title') }}</h2>
          </div>
          <div class="glass-card rounded-xl p-8 hover:border-primary/40 dark:hover:border-primary/30 transition-colors bg-white dark:bg-transparent shadow-sm dark:shadow-none">
            <h3 class="text-xl font-bold text-text-main dark:text-white mb-2">{{ $t('education.estacioTitle') }}</h3>
            <p class="text-primary-dark dark:text-primary font-medium mb-4 dark:drop-shadow-[0_0_5px_rgba(25,230,94,0.3)]">{{ $t('education.estacioCourse') }}</p>
            <p class="text-text-body dark:text-slate-400 text-sm leading-relaxed">
              {{ $t('education.estacioDescription') }}
            </p>
          </div>
        </div>
        <div>
          <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-primary/10 rounded-lg text-primary-dark dark:text-primary shadow-sm dark:shadow-[0_0_10px_rgba(25,230,94,0.2)]">
              <span class="material-symbols-outlined">workspace_premium</span>
            </div>
            <h2 class="text-2xl font-bold text-text-main dark:text-white">{{ $t('education.certificationsTitle') }}</h2>
          </div>
          <div class="space-y-4">
            <div class="glass-card flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md dark:shadow-none transition-all hover:translate-x-1 border border-transparent dark:border-white/5 hover:border-gray-100 dark:hover:border-white/10">
              <div class="mt-1 min-w-[24px]">
                <span class="material-symbols-outlined text-primary-dark dark:text-primary text-[24px] dark:drop-shadow-[0_0_5px_rgba(25,230,94,0.4)]">check_circle</span>
              </div>
              <div>
                <h4 class="text-text-main dark:text-white font-semibold dark:font-medium">{{ $t('education.cert1Title') }}</h4>
                <p class="text-xs text-text-muted dark:text-slate-500 mt-1">{{ $t('education.cert1Desc') }}</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md dark:shadow-none transition-all hover:translate-x-1 border border-transparent dark:border-white/5 hover:border-gray-100 dark:hover:border-white/10">
              <div class="mt-1 min-w-[24px]">
                <span class="material-symbols-outlined text-primary-dark dark:text-primary text-[24px] dark:drop-shadow-[0_0_5px_rgba(25,230,94,0.4)]">check_circle</span>
              </div>
              <div>
                <h4 class="text-text-main dark:text-white font-semibold dark:font-medium">{{ $t('education.cert2Title') }}</h4>
                <p class="text-xs text-text-muted dark:text-slate-500 mt-1">{{ $t('education.cert2Desc') }}</p>
              </div>
            </div>
            <div class="glass-card flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-transparent hover:bg-white dark:hover:bg-white/5 hover:shadow-md dark:shadow-none transition-all hover:translate-x-1 border border-transparent dark:border-white/5 hover:border-gray-100 dark:hover:border-white/10">
              <div class="mt-1 min-w-[24px]">
                <span class="material-symbols-outlined text-primary-dark dark:text-primary text-[24px] dark:drop-shadow-[0_0_5px_rgba(25,230,94,0.4)]">check_circle</span>
              </div>
              <div>
                <h4 class="text-text-main dark:text-white font-semibold dark:font-medium">{{ $t('education.cert3Title') }}</h4>
                <p class="text-xs text-text-muted dark:text-slate-500 mt-1">{{ $t('education.cert3Desc') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
