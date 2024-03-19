
// TODO: it seems like Nuxt Content can pick up resources for the CMS from anywhere.
// To begin with, setting up call from NH's Notion page.


import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const image_database_id = process.env.NOTION_DATABASE_ID

async function getArticlesFromNotion() {
  return await notion.databases.query({
    database_id: image_database_id,
    filter: {
      property: 'ArticleStatus',
      select: {
        equals: 'Published',
      },
    },
  })
}

function splitString(text) {
  return text.split('\n')
}

const toArticle = (result) => ({
  id: result.id,
  articleHeading: result.properties.ArticleHeading.title[0].text.content,
  datePublished: result.properties.PublishedDate.date.start,
  // longDescription: result.properties.LongDescription.rich_text[0].text.content, // Replacing this line with the following to swap '\n' with '<br>'
  longDescription: splitString(
    result.properties.LongDescription.rich_text[0].text.content
  ),
  imgWords: result.properties.ImgHeroKey.rich_text[0].plain_text,
  newsCategory: result.properties.NewsCategory.select.name,
  //searchTags => requires a map function...,
  articleAuthor: result.properties.ArticleAuthor.multi_select[0].name,
  shortDescription: result.properties.ShortDescription.rich_text[0].plain_text,
  subHeading: result.properties.SubHeading.rich_text[0].plain_text,
  imgHero_Url: result.properties.ImgHero.files[0].file.url,
  // imgHero_Name: result.properties.ImgHero.files[0].name,
})

export default defineEventHandler(async () => {
  const raw = await getArticlesFromNotion()
  const articles = raw.results.map(toArticle)
  return articles
})
