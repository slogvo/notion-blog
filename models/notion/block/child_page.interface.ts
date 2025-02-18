import type { NotionBlock } from ".";

export interface ChildPageBlock extends NotionBlock {
  type: "child_page";
  child_page: {
    title: string;
  };
}
