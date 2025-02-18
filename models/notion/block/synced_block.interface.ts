import type { NotionBlock } from ".";

export interface SyncedBlock extends NotionBlock {
  type: "synced_block";
  synced_block: {
    synced_from?: {
      block_id: string;
    };
  };
}
