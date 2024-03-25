<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Progress',
  to: '/progress/project_updates'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Membership',
  to: '/memberships'
}, {
  label: 'Stadium Circle',
  to: '/stadium-circle/members_circle'
} ]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      <NuxtLink to="/" custom>
        <IconNTStadium class=" h-8" />
        <!-- <UBadge label="Coming Soon" variant="subtle" class="hidden md:block mb-0.5" /> -->
      </NuxtLink>
    </template>

    <template #right>
      <div>
        <UColorModeButton class="lg:hidden" />
        <NuxtLink to="https://www.linkedin.com/in/nigel-b-a2b25329/" target="_blank" custom>
          <UIcon name="i-simple-icons-linkedin" class="lg:hidden mb-[2px]" />
        </NuxtLink>
  
        <!-- <UButton label="Sign in" color="gray" to="/login" /> -->
        <UButton label="Sign up" icon="i-heroicons-arrow-right-20-solid" trailing color="black" to="/signup" class="hidden lg:flex" />
      </div>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" default-open />
    </template>
  </UHeader>
</template>
