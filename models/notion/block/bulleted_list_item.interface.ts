import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface BulletedListItemBlock extends NotionBlock {
  type: "bulleted_list_item";
  bulleted_list_item: {
    rich_text: RichText[];
    color: string;
  };
}
