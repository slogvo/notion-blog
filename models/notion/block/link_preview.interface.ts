import type { NotionBlock } from ".";

export interface LinkPreviewBlock extends NotionBlock {
  type: "link_preview";
  link_preview: {
    url: string;
  };
}
