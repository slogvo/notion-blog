import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface Heading1Block extends NotionBlock {
  type: "heading_1";
  heading_1: {
    rich_text: RichText[];
    color: string;
  };
}
