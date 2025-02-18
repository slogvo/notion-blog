import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface CalloutBlock extends NotionBlock {
  type: "callout";
  callout: {
    rich_text: RichText[];
    icon: {
      type: "emoji";
      emoji: string;
    };
    color: string;
  };
}
