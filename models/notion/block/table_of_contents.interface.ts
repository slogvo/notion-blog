import type { NotionBlock } from ".";

export interface TableOfContentsBlock extends NotionBlock {
  type: "table_of_contents";
  table_of_contents: {
    color: string;
  };
}
