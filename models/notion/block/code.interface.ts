import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface CodeBlock extends NotionBlock {
  type: "code";
  code: {
    rich_text: RichText[];
    language: string;
  };
}
