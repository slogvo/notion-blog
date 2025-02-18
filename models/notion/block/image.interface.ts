import type { NotionBlock } from ".";
import type { File } from "../common-interface";

export interface ImageBlock extends NotionBlock {
  type: "image";
  image: File;
}
