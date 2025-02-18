import type { NotionBlock } from ".";

export interface LinkToPageBlock extends NotionBlock {
  type: "link_to_page";
  link_to_page: {
    type: "page_id" | "database_id";
    page_id?: string;
    database_id?: string;
  };
}
