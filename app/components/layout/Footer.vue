<template>
  <div class="mt-6 pb-20">
    <Divider />
    <footer class="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-6">
      <!-- Aperture / camera lens icon above copyright -->
      <div class="flex flex-col items-center gap-3">
        <UIcon name="lucide:aperture" class="size-8 text-zinc-600" />
        <span class="text-center text-sm text-muted">
          © {{ new Date().getFullYear() }}, Arkhaa - {{ $t("global.all_rights_reserved") }}.
        </span>
      </div>
    </footer>
  </div>
</template>
