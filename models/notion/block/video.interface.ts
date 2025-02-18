import type { NotionBlock } from ".";
import type { File } from "../common-interface";

export interface VideoBlock extends NotionBlock {
  type: "video";
  video: File;
}
