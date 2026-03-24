<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
</script>

<template>
  <Html
    :lang="locale"
    class="dark font-geist text-zinc-100 transition-colors duration-300 selection:bg-white/20 selection:text-zinc-100"
  >
    <Body class="bg-[#0a0a0a]">
      <div class="pointer-events-none fixed inset-0 -z-10 hero-radial-bg" />
      <LayoutScrollToTop />
      <NuxtLayout>
        <UApp :locale="locales[locale]">
          <NuxtPage />
        </UApp>
      </NuxtLayout>
      <Toaster close-button />
      <DotPattern class="absolute inset-0 -z-10 size-full fill-white/[0.03] [mask-image:radial-gradient(white,transparent_85%)]" />
    </Body>
  </Html>
</template>
