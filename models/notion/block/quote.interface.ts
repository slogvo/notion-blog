import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface QuoteBlock extends NotionBlock {
  type: "quote";
  quote: {
    rich_text: RichText[];
    color: string;
  };
}
