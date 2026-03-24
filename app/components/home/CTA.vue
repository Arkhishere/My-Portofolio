<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 sm:gap-3">
    <!-- Primary CTA Buttons -->
    <div class="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <!-- Let's work together -->
      <NuxtLinkLocale to="/contact">
        <button
          id="cta-contact"
          class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <UIcon name="lucide:mail" class="size-4" />
          {{ t("global.contact") }}
        </button>
      </NuxtLinkLocale>

      <!-- Schedule a meeting -->
      <NuxtLink :to="appConfig.global.meetingLink" target="_blank">
        <button
          id="cta-meeting"
          class="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <UIcon name="lucide:calendar" class="size-4" />
          {{ t("global.meeting") }}
        </button>
      </NuxtLink>
    </div>

    <!-- Deploy button (small) -->
    <div class="mt-1">
      <NuxtLink
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHugoRCD%2Fcanvas&env=NUXT_PRIVATE_RESEND_API_KEY,NUXT_PUBLIC_SITE_URL"
        target="_blank"
      >
        <button
          id="cta-deploy"
          class="flex items-center gap-1.5 rounded-full border border-white/5 px-3 py-1 text-xs font-medium text-zinc-500 transition-all duration-200 hover:border-white/10 hover:text-zinc-300"
        >
          <UIcon name="lucide:play" class="size-3" />
          Deploy
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
