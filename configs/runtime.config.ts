export const runtimeConfig = {
  public: {
    apiUrl: process.env.NUXT_API_URL,
    notionPageId: process.env.NUXT_PUBLIC_NOTION_PAGE_ID,
  },
  notionApiKey: process.env.NUXT_NOTION_API_KEY,
};
