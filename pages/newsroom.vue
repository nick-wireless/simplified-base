<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const route = useRouter()

const isBlogIndex = computed(() => route.currentRoute.value.path.startsWith('/newsroom/news/'))

</script>

<template>
  <UContainer>
    <UPage>
      <template v-if="!isBlogIndex" #left>
        <UAside>
          <!-- <template #top>
            <UContentSearchButton class="rounded-md" size="sm" />
          </template> -->

          <UNavigationTree :links="mapContentNavigation(navigation)" />
        </UAside>
      </template>

      <NuxtPage />
    </UPage>
  </UContainer>
</template>
