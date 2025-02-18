import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface Heading2Block extends NotionBlock {
  type: "heading_2";
  heading_2: {
    rich_text: RichText[];
    color: string;
  };
}
