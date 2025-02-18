import type { Parent } from "../common-interface";

// https://developers.notion.com/reference/block
export * from "./bookmark.interface";
export * from "./breadcrumb.interface";
export * from "./bulleted_list_item.interface";
export * from "./callout.interface";
export * from "./child_database.interface";
export * from "./child_page.interface";
export * from "./code.interface";
export * from "./column.interface";
export * from "./divider.interface";
export * from "./embed.interface";
export * from "./equation.interface";
export * from "./file.interface";
export * from "./heading_1.interface";
export * from "./heading_2.interface";
export * from "./heading_3.interface";
export * from "./image.interface";
export * from "./link_preview.interface";
export * from "./link_to_page.interface";
export * from "./numbered_list_item.interface";
export * from "./paragraph.interface";
export * from "./pdf.interface";
export * from "./quote.interface";
export * from "./synced_block.interface";
export * from "./table.interface";
export * from "./table_of_contents.interface";
export * from "./template.interface";
export * from "./to_do.interface";
export * from "./toggle.interface";
export * from "./video.interface";

export type BlockType =
  | "bookmark"
  | "breadcrumb"
  | "bulleted_list_item"
  | "callout"
  | "child_database"
  | "child_page"
  | "code"
  | "column"
  | "column_list"
  | "divider"
  | "embed"
  | "equation"
  | "file"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "image"
  | "link_preview"
  | "link_to_page"
  | "numbered_list_item"
  | "paragraph"
  | "pdf"
  | "quote"
  | "synced_block"
  | "table"
  | "table_of_contents"
  | "table_row"
  | "template"
  | "to_do"
  | "toggle"
  | "video";

// Define the Block interface
export interface NotionBlock {
  id: string;
  type: BlockType;
  object: "block";
  parent: Parent;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  [key: string]: any;
}
