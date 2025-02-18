import type { NotionBlock } from ".";

export interface BookmarkBlock extends NotionBlock {
  type: "bookmark";
  bookmark: {
    url: string;
  };
}
