<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'
import type { BlogPost } from '~/types'

const route = useRoute()
const { toc } = useContent

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const { data: posts } = await useAsyncData('posts', () => queryContent<BlogPost>('/newsroom/news')
  .where({ _extension: 'md' })
  .sort({ date: -1 })
  .find())

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => queryContent('/newsroom')
  .where({ _extension: 'md', navigation: { $ne: false } })
  .only(['title', 'description', '_path'])
  .findSurround(withoutTrailingSlash(route.path))
, { default: () => [] })

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImage({
  component: 'Saas',
  title: page.value.title,
  description: page.value.description
})

definePageMeta({
  layout: 'no-side-bar'
})

const headline = computed(() => findPageHeadline(page.value!))


const formattedDate = computed(()=> {
  return new Date().toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' })
}) as ComputedRef<string>

</script>

<template>
  <UContainer v-if="page">
    <UPageHeader :title="page.title" :description="page.description" :links="page.links" :headline="headline" />

    <UBlogList class="pt-16 pb-32">
      <tempate v-for="(post, index) in posts?.slice(1)" :key="index">
        <nuxt-link :to="post._path" class="mt-8 pb-12 w-72">
          <div id="image-container" class=" my-4 ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-md pointer-events-none">
            <img :src="post.image?.src" class="object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105">
          </div>
          <div class="flex items-center gap-x-6 text-xs">
            <time :datetime="post.date" class="text-gray-500 dark:text-gray-600">{{ formattedDate }}</time>
            <UBadge v-if="post.badge?.label" :label="post.badge.label" variant="subtle" :ui="{ rounded: 'rounded-full' }" />
          </div>
          <div class="group relative">
            <h3 class="mt-3 text-lg font-semibold leading-6  group-hover:text-gray-600">
              <div>
                <span class="absolute inset-0" />
                {{ post.title }}
              </div>
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
              {{ post.description }}
            </p>
          </div>
          <div class="relative mt-6 flex items-center gap-x-4">
            <img v-if=" index !== 0 " :src=" post.authors?.[0].avatar.src " alt="" class="h-10 w-10 rounded-full bg-gray-50 ">
            <div class="text-sm leading-6">
              <p class="font-semibold text-gray-500 dark:text-gray-600 ">
                <span class="absolute inset-0" />
                {{ post.authors?.[0].name }}
              </p>
            </div>
          </div>
        </nuxt-link>
      </tempate>
    </UBlogList>
    
    <hr v-if="surround?.length">

    <UContentSurround :surround="surround" class="py-12" />


    <template v-if="page.toc !== false" #right>
      <UContentToc :links="page.body?.toc?.links">
        <!-- <template v-if="toc?.bottom" #bottom>
          <div class="hidden lg:block space-y-6" :class="{ '!mt-6': page.body?.toc?.links?.length }">
            <UDivider v-if="page.body?.toc?.links?.length" type="dashed" />

            <UPageLinks :title="toc.bottom.title" :links="toc.bottom.links" />
          </div>
        </template> -->
      </UContentToc>
    </template>
  </UContainer>
</template>
