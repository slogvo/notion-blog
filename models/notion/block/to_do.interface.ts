import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface ToDoBlock extends NotionBlock {
  type: "to_do";
  to_do: {
    rich_text: RichText[];
    checked: boolean;
    color: string;
  };
}
