import type { NotionBlock } from ".";

export interface ChildDatabaseBlock extends NotionBlock {
  type: "child_database";
  child_database: {
    title: string;
  };
}
