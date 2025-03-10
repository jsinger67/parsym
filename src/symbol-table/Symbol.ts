// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ScopedNameId } from "./ScopedNameId";
import type { SymbolId } from "./SymbolId";
import type { SymbolKind } from "./SymbolKind";

/**
 *
 * A more general symbol used in the symbol table
 *
 */
export type Symbol = {
  /**
   * The symbol's id in the symbol table
   */
  my_id: SymbolId;
  /**
   * The symbol name's id in the enveloping scope
   */
  name_id: ScopedNameId;
  /**
   * The symbol's interior
   */
  kind: SymbolKind;
  /**
   * If a lifetime is present
   */
  has_lifetime: boolean;
};
