import type { Emoji, Parent, User } from "./common-interface";

export interface PageObject {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: User;
  last_edited_by: User;
  cover: File | null;
  icon: Emoji | null;
  parent: Parent;
  archived: boolean;
  in_trash: boolean;
  properties: { [key: string]: PagePropertyBase };
  url: string;
  public_url: string | null;
}

// Base interface for all page properties
export interface PagePropertyBase {
  id: string;
  type: string;
}

// Checkbox property
export interface CheckboxProperty extends PagePropertyBase {
  type: "checkbox";
  checkbox: boolean;
}

// Created by property
export interface CreatedByProperty extends PagePropertyBase {
  type: "created_by";
  created_by: User; // Assuming UserObject is defined elsewhere
}

// Created time property
export interface CreatedTimeProperty extends PagePropertyBase {
  type: "created_time";
  created_time: string; // ISO 8601 date and time
}

// Date property
export interface DateProperty extends PagePropertyBase {
  type: "date";
  date: {
    start: string;
    end?: string;
  };
}

// Email property
export interface EmailProperty extends PagePropertyBase {
  type: "email";
  email: string;
}

export interface FilesProperty extends PagePropertyBase {
  type: "files";
  files: File[];
}

// Formula property
export interface FormulaProperty extends PagePropertyBase {
  type: "formula";
  formula: {
    type: "boolean" | "date" | "number" | "string";
    boolean?: boolean;
    date?: string; // ISO 8601 date and time
    number?: number;
    string?: string;
  };
}

// Last edited by property
export interface LastEditedByProperty extends PagePropertyBase {
  type: "last_edited_by";
  last_edited_by: User;
}

// Last edited time property
export interface LastEditedTimeProperty extends PagePropertyBase {
  type: "last_edited_time";
  last_edited_time: string; // ISO 8601 date and time
}

// Multi-select property
export interface MultiSelectOption {
  id: string;
  name: string;
  color:
    | "blue"
    | "brown"
    | "default"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "yellow";
}

export interface MultiSelectProperty extends PagePropertyBase {
  type: "multi_select";
  multi_select: {
    options: MultiSelectOption[];
  };
}

// Number property
export interface NumberProperty extends PagePropertyBase {
  type: "number";
  number: {
    format: "number" | "percent" | "dollar" | "euro" | "pound" | "yen" | "rub";
  };
}

// Rich text property
export interface RichTextProperty extends PagePropertyBase {
  type: "rich_text";
  rich_text: {
    content: string;
  }[];
}

// Title property
export interface TitleProperty extends PagePropertyBase {
  type: "title";
  title: {
    content: string;
  }[];
}

// URL property
export interface UrlProperty extends PagePropertyBase {
  type: "url";
  url: string;
}

export interface PeopleProperty extends PagePropertyBase {
  type: "people";
  people: User[];
}

export interface PhoneNumberProperty extends PagePropertyBase {
  type: "phone_number";
  phone_number: string;
}

export interface RelationReference extends PagePropertyBase {}

export interface RelationProperty extends PagePropertyBase {
  type: "relation";
  relation: {
    database_id: string;
    synced_property_name?: string;
    synced_property_id?: string;
  };
  has_more: boolean;
}

export type RollupFunction =
  | "average"
  | "checked"
  | "count"
  | "count_per_group"
  | "count_values"
  | "date_range"
  | "earliest_date"
  | "empty"
  | "latest_date"
  | "max"
  | "median"
  | "min"
  | "not_empty"
  | "percent_checked"
  | "percent_empty"
  | "percent_not_empty"
  | "percent_per_group"
  | "percent_unchecked"
  | "range"
  | "show_original"
  | "show_unique"
  | "sum"
  | "unchecked"
  | "unique";

export type RollupType =
  | "array"
  | "date"
  | "incomplete"
  | "number"
  | "unsupported";

export interface RollupProperty {
  id: string;
  type: "rollup";
  rollup: {
    array?: any[];
    date?: string;
    incomplete?: boolean;
    number?: number;
    unsupported?: any;
  };
  function: RollupFunction;
  value_type: RollupType;
}

export interface RichTextAnnotation {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface RichTextContent extends PagePropertyBase {
  content: string;
  link: string | null;
}

export interface RichTextObject extends PagePropertyBase {
  type: "text";
  text: RichTextContent;
  annotations: RichTextAnnotation;
  plain_text: string;
  href: string | null;
}

export interface SelectOption extends PagePropertyBase {
  id: string;
  name: string;
  color: string;
}

export interface SelectProperty extends PagePropertyBase {
  type: "select";
  select: {
    options: SelectOption[];
  };
}

export interface StatusProperty extends PagePropertyBase {
  type: "status";
  status: SelectOption;
}

export type PageProperty =
  | CheckboxProperty
  | CreatedByProperty
  | CreatedTimeProperty
  | DateProperty
  | EmailProperty
  | FilesProperty
  | FormulaProperty
  | LastEditedByProperty
  | LastEditedTimeProperty
  | MultiSelectProperty
  | NumberProperty
  | PeopleProperty
  | PhoneNumberProperty
  | RelationProperty
  | RollupProperty
  | RichTextProperty
  | SelectProperty
  | StatusProperty
  | TitleProperty
  | UrlProperty;
