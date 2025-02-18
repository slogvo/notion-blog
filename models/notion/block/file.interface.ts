import type { NotionBlock } from ".";
import type { File } from "../common-interface";

export interface FileBlock extends NotionBlock {
  type: "file";
  file: File;
}
