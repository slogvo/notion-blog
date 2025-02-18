import type { NotionBlock } from ".";
import type { File } from "../common-interface";

export interface PDFBlock extends NotionBlock {
  type: "pdf";
  pdf: File;
}
