<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()
const localePath = useLocalePath()

const { data: projects } = await useAsyncData('projects', async () => {
  const collection = ('projects_' + locale.value) as keyof Collections
  return await queryCollection(collection).all() as Collections['projects_en'][] | Collections['projects_fr'][]
}, {
  watch: [locale],
})
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <h3 class="font-newsreader italic text-white-shadow text-xl">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex w-full flex-col">
      <NuxtLink
        v-for="project in projects?.filter((work) => work.featured)"
        :key="project.name"
        role="link"
        class="group flex cursor-pointer items-center gap-0 rounded-lg px-0 py-3 transition-all duration-200 hover:bg-white/[0.02]"
        :to="project.release === 'soon' ? localePath('/') : project.link"
        :aria-label="'go to ' + project.name + ' project website'"
        :target="project.release === 'soon' ? '_self' : '_blank'"
      >
        <!-- Project name -->
        <span class="whitespace-nowrap font-medium text-zinc-300 transition-colors duration-200 group-hover:text-white">
          {{ project.name }}
        </span>
        <!-- Flexible thin line -->
        <div class="mx-6 h-[1px] flex-1 bg-white/10" />
        <!-- Year / Status -->
        <span class="whitespace-nowrap text-sm text-zinc-500">
          {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
        </span>
      </NuxtLink>
    </div>
    <NuxtLinkLocale to="/works">
      <span class="font-newsreader italic text-white-shadow cursor-pointer text-sm text-zinc-500 hover:text-white transition-colors duration-200">
        {{ $t("global.see_more") }}
      </span>
    </NuxtLinkLocale>
  </div>
</template>
