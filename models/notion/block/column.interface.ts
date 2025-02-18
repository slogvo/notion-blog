import type { NotionBlock } from ".";

export interface ColumnBlock extends NotionBlock {
  type: "column";
  column: {
    children: NotionBlock[];
  };
}

export interface ColumnListBlock extends NotionBlock {
  type: "column_list";
  column_list: {
    columns: ColumnBlock[];
  };
}
