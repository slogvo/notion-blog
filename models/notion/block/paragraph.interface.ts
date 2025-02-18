import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface ParagraphBlock extends NotionBlock {
  type: "paragraph";
  paragraph: {
    rich_text: RichText[];
    color: string;
  };
}
