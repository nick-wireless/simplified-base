import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_API_KEY })
const image_database_id = process.env.NOTION_DATABASE_ID

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const data = await notion.pages.retrieve({
    page_id: id,
  })
  return data
})
