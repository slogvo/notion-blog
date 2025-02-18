import type { NotionBlock } from ".";
import type { RichText } from "../common-interface";

export interface TableRowBlock extends NotionBlock {
  type: "table_row";
  table_row: {
    cells: RichText[][];
  };
}

export interface TableBlock extends NotionBlock {
  type: "table";
  table: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
    rows: TableRowBlock[];
  };
}
