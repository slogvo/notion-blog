import { Client } from "@notionhq/client";

// Initialize Notion client
const config = useRuntimeConfig();
console.log("🚀 ~ config:", config);
const notion = new Client({
  auth: config.notionApiKey,
});
const notion_page_id = config.public.notionPageId as string; // Replace with your Notion page ID

// Define the function to fetch page content
async function getNotionPageContent(pageId: string): Promise<any[]> {
  try {
    let result: any[] = [];
    let hasMore = true;
    let startCursor: string | undefined = undefined;

    while (hasMore) {
      const response: any = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: startCursor,
        page_size: 100,
      });

      result = result.concat(response.results);
      hasMore = response.has_more;
      startCursor = response.next_cursor;
    }

    return result;
  } catch (error) {
    console.error("Error fetching page content:", error);
    return [];
  }
}

export default defineEventHandler(async () => {
  const pageContent = await getNotionPageContent(notion_page_id);
  return pageContent;
});
