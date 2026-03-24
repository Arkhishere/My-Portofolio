<script setup lang="ts">
const { profile } = useAppConfig()
</script>

<template>
  <div class="z-10 flex items-center justify-center">
    <SpotlightButton rounded>
      <div
        class="font-mona relative flex items-center justify-center gap-2 bg-gradient-to-b from-white/25 to-white bg-clip-text text-lg font-medium text-transparent transition-all duration-200"
      >
        <ProseImg
          width="96"
          :src="profile.picture!"
          class="size-24 rounded-full border-2 border-white/10 object-cover transition-transform duration-300 hover:scale-105"
          alt="Arkhaa Profile Picture"
          aria-label="Arkhaa Profile Picture"
        />
      </div>
    </SpotlightButton>
  </div>
</template>
