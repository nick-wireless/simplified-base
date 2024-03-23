<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>


<template>
  <div>
    <ULandingSection
      :title="page.hero.title"
      :description="page.hero.description"
      :align="page.hero.align"
      :ui="{wrapper: 'pt-24 sm:pt-24'}"
    >
      <template #headline>
        <UBadge v-if="page.hero.headline" variant="subtle" size="lg" class="relative mb-6 rounded-full font-semibold">
          <NuxtLink :to="page.hero.headline.to" target="_blank" class="focus:outline-none" tabindex="-1">
            <span class="absolute inset-0" aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon v-if="page.hero.headline.icon" :name="page.hero.headline.icon" class="ml-1 w-4 h-4 pointer-events-none" />
        </UBadge>
      </template>
      <template #links>
        <UButton 
          v-for="link in page.hero.links" 
          :key="link.label" 
          :label="link.label"
          :icon="link.icon"
          :trailing="link.trailing" 
          :to="link.to" 
          :variant="link.variant" 
          :size="link.size" 
          :color="link.color"
          class=" px-6 mt-2 sm:mt-0"
        />
      </template>
      <div class="relative overflow-clip rounded-md shadow-xl ring-1 ring-gray-400 dark:ring-gray-700">
        <img
          src="/images/afl-ground.jpg"
          class="w-full  max-h-[400px] object-cover "
        >
        <div class="absolute inset-0 bg-black opacity-50" />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-gray-300 text-2xl font-semibold tracking-wider shadow-lg">
            (design pending...)
          </div>
        </div>
      </div>
    </ULandingSection>

    <ULandingSection
      :headline="page.stages.headline"
      :title="page.stages.title"
      :description="page.stages.description"
      :align="page.stages.align"
      :links="page.stages.links"
    >
      <div class=" relative h-[45vh] rounded-sm overflow-clip ring-1 ring-gray-300 dark:ring-gray-600 ">
        <img
          class=" absolute w-full h-full object-cover "
          src="/images/darwin-city-aerial.jpg"
        >
        <img class=" absolute w-full h-full mix-blend-overlay object-cover opacity-60 " src="/overlays/augustine-wong-T0BYurbDK_M-unsplash.jpg">
      </div>

      <ULandingCard v-for="(item, index) of page.stages.items" :key="index" v-bind="item" />
    </ULandingSection>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
