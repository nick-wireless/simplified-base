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
      <img
        :src="page.hero.image.src"
        class="w-full  max-h-[400px] object-cover rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      >
    </ULandingSection>

    <ULandingSection
      :headline="page.stages.headline"
      :title="page.stages.title"
      :description="page.stages.description"
      :align="page.stages.align"
      :links="page.stages.links"
    >
      <img
        src="https://picsum.photos/640/360"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      >
      <ULandingCard v-for="(item, index) of page.stages.items" :key="index" v-bind="item" />
    </ULandingSection>

    <ULandingSection :title="page.features.title" :links="page.features.links">
      <UPageGrid>
        <ULandingCard v-for="(item, index) of page.features.items" :key="index" v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
