import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface NumberedListItemBlock extends NotionBlock {
  type: "numbered_list_item";
  numbered_list_item: {
    rich_text: RichText[];
    color: string;
  };
}
