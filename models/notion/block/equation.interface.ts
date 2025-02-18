import type { NotionBlock } from ".";

export interface EquationBlock extends NotionBlock {
  type: "equation";
  equation: {
    expression: string;
  };
}
