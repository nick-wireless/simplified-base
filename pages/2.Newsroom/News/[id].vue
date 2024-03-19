<script setup>
import { useArticlesAll } from '~/composables/sessionArticleData.js'

// Getting details of articles from state.
const route = useRoute()
const slug = route.params.id
const post = (await useArticlesAll()).value.find(({ id }) => id === slug)

// META Open Graph Protocol
useHead({
  meta: [
    { property: 'og:title', content: post.articleHeading },
    { property: 'og:description', content: post.shortDescription },
    { property: 'og:type', content: 'article' },
    { property: 'og:type:article:published_time - datetime', content: post.datePublished},
    { property: 'og:url', content: `https://ntstadium.com/${slug}` },
    { property: 'og:locale', content: 'EN_AU' },
    { property: 'og:image:secure_url', content: post.imgHero_Url },
    { property: 'og:image:alt', content: post.imgWords }
  ]
})

</script>

<template>
  <div>
    <the-header />
    <nuxt-layout name="center-body">
      <nuxt-layout name="inset-text">
        <article class=" text-gray-800 pt-8">
          <!-- Title particulars -->
          <h1 class=" pt-12 font-bold text-2xl xs:text-3xl leading-9  ">
            {{ post.articleHeading }}
          </h1>
          <h4 class="py-4 text-sm font-normal italic leading-6 text-gray-700 group-hover:text-gray-600">
            <div>
              <span class="absolute inset-0" />
              {{ post.subHeading }}
            </div>
          </h4>
          <div id="article-details" class=" pb-8 text-sm">
            <span>Written by {{ post.articleAuthor }}</span>
            <div id="date-line">
              Posted: {{ post.datePublished }}
            </div> 
          </div>
          <div id="article-hero-image" class="relative overflow-hidden h-[200px] sm:h-[420px] lg:h-[540px] ">
            <nuxt-img
              class=" absolute h-full w-full object-cover object-bottom "
              :src=" post.imgHero_Url " alt=""
            />
          </div>

          <div class=" pt-4 py-10 text-sm text-slate-500 ">
            {{ post.imgWords }}
          </div>

          <share-with-friends />

          <p v-for=" parra in post.longDescription" class=" pt-2 pb-4 leading-9 tracking-wide font-work ">
            {{ parra }}
          </p>
        </article>
      </nuxt-layout>
    </nuxt-layout>
    <the-footer />
  </div>
</template>
