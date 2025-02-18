import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface ToggleBlock extends NotionBlock {
  type: "toggle";
  toggle: {
    rich_text: RichText[];
    color: string;
  };
}
