
// Harlan Notes:
// Referenced: https://github.com/nuxt-ui-pro/saas/tree/main/components as best practice.
// I tried to 'copy across' however ended up in a birds next of complexity.
// I did in an early version hook Notion up with a CMS type import of Articles with some previous assistance.
// Thus, took a lead and the styling from that and wonder what is best practice for moving over.


interface AuthorDetails {
  [key: string]: {
    name: string;
    role: string;
    avatar: string;
    linkedIn?: string;
  }
}

export const useAuthorDetails = () =>
  useState<AuthorDetails>('author-details', () => {
    return {
      'Nick Hanigan': {
        name: 'Nick Hanigan',
        role: 'CEO & Development Manager',
        avatar: '/images/people/nick.jpg',
        linkedIn: 'https://www.linkedin.com/in/nick-hanigan-386a681a/'
      },
      'Michael Long': {
        name: 'Michael Long',
        role: 'NT Stadium, Ambassador',
        avatar: '/images/people/michael.jpg',
      },
      'Sean Bowden': {
        name: 'Sean Bowden',
        role: 'Project Sponsor & AFL NT Chairman',
        avatar: '/images/people/sean.jpg',
        linkedIn: 'https://www.linkedin.com/in/sean-bowden-67066924/'
      },
    }
  })


export const useArticlesAll = async () => {
  const { data: articles, error } = await useFetch('/api/articles')
  return articles
}



