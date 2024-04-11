<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

// const links = [{
//   label: 'Progress',
//   to: '/progress/project_updates'
// }, {
//   label: 'Newsroom',
//   to: '/newsroom/comms_centre'
// }, {
//   label: 'Membership',
//   to: '/memberships'
// }, {
//   label: 'Stadium Circle',
//   to: '/stadium-circle/members_circle'
// } ]

const route = useRouter()
const navOnProgress = computed(() => route.currentRoute.value.path.startsWith('/progress/'))



</script>

<template>
  <UHeader>
    <template #logo>
      <NuxtLink to="/" custom>
        <IconNTStadium class=" h-8" />
        <!-- <UBadge label="Coming Soon" variant="subtle" class="hidden md:block mb-0.5" /> -->
      </NuxtLink>
    </template>

    <template #center>
      <ul class="items-center gap-x-8 hidden lg:flex">
        <li class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary">
          <NuxtLink to="/progress/project_updates" :class=" { 'router-link-active router-link-exact-active': navOnProgress }">
            Progress
          </NuxtLink>
        </li>
        <li class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary">
          <NuxtLink to="/newsroom/comms_centre">
            Newsroom
          </NuxtLink>
        </li>
        <li class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary">
          <NuxtLink to="/memberships">
            Membership
          </NuxtLink>
        </li>
        <li class="text-sm/6 font-semibold flex items-center gap-1 hover:text-primary">
          <NuxtLink to="/stadium-circle/members_circle">
            Stadium Circle
          </NuxtLink>
        </li>
      </ul>
    </template>

    <template #right>
      <div class=" flex items-center ">
        <UColorModeButton class="hidden sm:inline-flex lg:hidden" />
        <NuxtLink to="https://www.linkedin.com/in/nigel-b-a2b25329/" target="_blank" custom>
          <UIcon name="i-simple-icons-linkedin" class="lg:hidden mb-[1px] " />
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
