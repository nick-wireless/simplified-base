<script setup lang="ts">
import { useAuthorDetails, useArticlesAll } from '~/composables/sessionArticleData'

definePageMeta({
  layout: 'docs'
})

const authorList = useAuthorDetails()
const posts = await useArticlesAll()
console.log(posts)

</script>

<template>
  <div class="bg-white dark:bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
          Highlights
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          A short collection of recent announcements and key articles.
        </p>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
          <nuxt-link :to="`/2.Newsroom/news/${post.id}`">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datePublished" class="text-gray-500">{{ post.datePublished }}</time>
              <div class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100">
                {{ post.newsCategory }}
              </div>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <div>
                  <span class="absolute inset-0" />
                  {{ post.articleHeading }}
                </div>
              </h3>
              <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                {{ post.shortDescription }}
              </p>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <nuxt-img :src=" authorList[post.articleAuthor].avatar " alt="" class="h-10 w-10 rounded-full bg-gray-50" />
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <span class="absolute inset-0" />
                  {{ authorList[post.articleAuthor].name }}
                </p>
                <p class="text-gray-600">
                  {{ authorList[post.articleAuthor].role }}
                </p>
              </div>
            </div>
          </nuxt-link>
        </article>
      </div>
    </div>
  </div>
</template>
