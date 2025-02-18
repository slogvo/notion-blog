import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface TemplateBlock extends NotionBlock {
  type: "template";
  template: {
    rich_text: RichText[];
    children: NotionBlock[];
  };
}
