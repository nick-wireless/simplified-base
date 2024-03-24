export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    button: {
      rounded: 'rounded-full',
      default: {
        size: 'md'
      }
    },
    input: {
      default: {
        size: 'md'
      }
    },
    card: {
      rounded: 'rounded-xl'
    },
    footer: {
      
      top: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
        container: 'py-8 lg:py-16'
      },
      bottom: {
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    },
    page: {
      hero: {
        wrapper: 'lg:py-24'
      }
    }
  },
  header: {
    colorMode: true,
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      links: [{
        icon: 'i-heroicons-book-open',
        label: 'Subscribe',
        to: '/memberships',
        // target: '_blank',
      }, {
        icon: 'i-heroicons-trophy',
        label: 'Sponsor project',
        to: '/members/corporates',
        // target: '_blank',
      }, {
        icon: 'i-heroicons-ticket',
        label: 'Join next event',
        to: '/members/roundtables',
        // target: '_blank',
      }]
    }
  }
})
