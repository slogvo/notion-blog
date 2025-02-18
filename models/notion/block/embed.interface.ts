import type { NotionBlock } from ".";

export interface EmbedBlock extends NotionBlock {
  type: "embed";
  embed: {
    url: string;
  };
}
