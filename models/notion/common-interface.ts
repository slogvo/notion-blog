// Define the possible parent types
export interface Parent {
  type: "database_id" | "page_id" | "workspace" | "block_id";
  database_id?: string;
  page_id?: string;
  workspace?: boolean;
  block_id?: string;
}

export interface User {
  object: "user";
  id: string;
  name: string;
  avatar_url: string;
  type: "person" | "bot";
  person?: {
    email: string;
  };
  bot?: any;
}

export interface Comment {
  object: string; // Always "comment"
  id: string; // UUIDv4
  parent: Parent;
  discussion_id: string; // UUIDv4
  created_time: string; // ISO 8601 date time string
  last_edited_time: string; // ISO 8601 date time string
  created_by: User;
  rich_text: RichText[];
}

export interface File {
  name: string;
  type: "external" | "file";
  external?: {
    url: string;
  };
  file?: {
    url: string;
    expiry_time: string;
  };
}

export interface Emoji {
  type: "emoji";
  emoji: string;
}

export interface RichText {
  type: "text" | "mention" | "equation";
  text?: {
    content: string;
    link?: {
      url: string;
    };
  };
  mention?: Mention;
  equation?: {
    expression: string;
  };
  annotations: Annotations;
  plain_text: string;
  href?: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Mention {
  type: "user" | "page" | "database" | "date";
  user?: User;
  page?: {
    id: string;
  };
  database?: {
    id: string;
  };
  date?: {
    start: string;
    end?: string;
    time_zone?: string;
  };
}
