// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ScopedNameId } from "./ScopedNameId";
import type { SymbolId } from "./SymbolId";
import type { SymbolKind } from "./SymbolKind";

export interface Symbol {
  my_id: SymbolId;
  name_id: ScopedNameId;
  kind: SymbolKind;
  has_lifetime: boolean;
}
