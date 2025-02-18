import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface Heading3Block extends NotionBlock {
  type: "heading_3";
  heading_3: {
    rich_text: RichText[];
    color: string;
  };
}
