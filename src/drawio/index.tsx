import { Module } from "@ijstech/components";
import { PageBlock } from "@drawio/global";

export class DrawIOBlock extends Module implements PageBlock {
  getData: () => any;
  setData: (data: any) => Promise<void>;
  getTag: () => any;
  setTag: (tag: any) => Promise<void>;
  validate?: (() => boolean) | undefined;
  defaultEdit?: boolean | undefined;
  onEdit: () => Promise<void>;
  onConfirm: () => Promise<void>;
  onDiscard: () => Promise<void>;
  edit: () => Promise<void>;
  confirm: () => Promise<void>;
  discard: () => Promise<void>;
  config: () => Promise<void>;
}
