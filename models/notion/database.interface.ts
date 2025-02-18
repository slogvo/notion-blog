import type { Parent, RichText } from "./common-interface";

export interface DatabaseObject {
  object: "database";
  id: string;
  title: RichText[];
  properties: { [key: string]: PropertyObject };
  parent: Parent;
  url: string;
}

export interface PropertyObject {
  id: string;
  name: string;
  type: PropertyType;
}

export type PropertyType =
  | "title"
  | "rich_text"
  | "number"
  | "select"
  | "multi_select"
  | "date"
  | "people"
  | "files"
  | "checkbox"
  | "url"
  | "email"
  | "phone_number"
  | "formula"
  | "relation"
  | "rollup"
  | "created_time"
  | "created_by"
  | "last_edited_time"
  | "last_edited_by";
