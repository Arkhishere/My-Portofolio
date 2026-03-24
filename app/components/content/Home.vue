<template>
  <section class="relative pt-12">
    <!-- grid -->
    <div class="pointer-events-none absolute inset-0 bg-center bg-grid-white/[0.03] bg-grid-16 [mask-image:radial-gradient(white,transparent_85%)]" />

    <div class="relative mx-auto flex max-w-7xl flex-col justify-center gap-4 px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
      <!-- spotlight glow -->
      <div
        class="absolute -top-8 left-1/2 size-64 -translate-x-1/2 rounded-full bg-white/10 blur-[140px] lg:-top-8 lg:size-[28rem] lg:blur-[180px]"
      />

      <!-- profile picture -->
      <HomeProfilePicture />

      <div class="z-20 flex flex-col items-center justify-center">
        <!-- title: two-line hero headline -->
        <div
          class="font-geist text-center"
          style="--stagger: 1; --delay: 10ms"
          data-animate
        >
          <h1 class="mx-auto max-w-3xl">
            <!-- Line 1: white gradient -->
            <span class="block font-medium text-pretty bg-gradient-to-b from-white to-white/70 bg-clip-text text-3xl text-transparent lg:text-4xl">
              The efficiency of one, the talent of three.
            </span>
            <!-- Line 2: muted zinc-500 -->
            <span class="block mt-1 font-medium text-pretty text-3xl text-zinc-500 lg:text-4xl">
              Why look elsewhere?
            </span>
          </h1>

          <!-- subtitle / bio -->
          <h2 class="mx-auto mt-5 max-w-xl text-center text-base antialiased text-zinc-400">
            <slot
              name="hero_subtitle"
              mdc-unwrap="p"
            />
          </h2>
        </div>

        <!-- availability badge -->
        <SettingsAvailability
          background
          class="mt-4"
          style="--stagger: 2"
          data-animate
        />

        <!-- social links -->
        <HomeSocial
          style="--stagger: 3"
          data-animate
        />

        <!-- CTA buttons -->
        <HomeCTA
          style="--stagger: 4"
          data-animate
        />

        <!-- Works section -->
        <div
          style="--stagger: 5"
          data-animate
          class="mt-12 flex w-full max-w-3xl flex-col gap-4 lg:mt-16"
        >
          <HomeProjects />
        </div>

        <Divider class="my-9" />

        <!-- FAQ -->
        <HomeFaq
          style="--stagger: 6"
          data-animate
        />
      </div>
    </div>
  </section>
</template>
