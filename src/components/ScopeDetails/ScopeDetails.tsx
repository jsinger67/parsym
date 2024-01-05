import { Scope } from "../../symbol-table/Scope";
import { ScopeId } from "../../symbol-table/ScopeId";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { Symbol } from "../../symbol-table/Symbol";
import { Type } from "../../symbol-table/Type";
import { getSymbolName } from "../SymbolDetails/SymbolDetails";
import classes from "./ScopeDetails.module.css";

export interface ScopeDetailsProps {}

const getScopeCreatingSymbol = (
  scope_id: ScopeId,
  symbolTable: SymbolTable
): Symbol | undefined => {
  const symbol = symbolTable.symbols.find((symbol) => {
    if ("Type" in symbol.kind) {
      let type_symbol: Type = symbol.kind.Type;
      return type_symbol.member_scope === scope_id;
    } else {
      return false;
    }
  })!;
  return symbol;
};

export const getScopeName = (
  scope: Scope,
  symbolTable: SymbolTable,
  withSymbolNumber: boolean
) => {
  let name = "<Global>";
  let scope_creating_symbol = getScopeCreatingSymbol(scope.my_id, symbolTable);
  if (scope_creating_symbol !== undefined) {
    name = `"${getSymbolName(scope_creating_symbol, symbolTable)}"`;
    if (withSymbolNumber) {
      name = `#${scope_creating_symbol.my_id} ` + name;
    }
  }
  return name;
};

export const getParentName = (
  parent: number | null,
  symbolTable: SymbolTable,
  withParentSymbolNumber: boolean
) => {
  let parent_name = "-";
  if (parent !== null) {
    let parent_scope_creating_symbol = getScopeCreatingSymbol(
      parent,
      symbolTable
    );
    if (parent_scope_creating_symbol !== undefined) {
      parent_name = `"${getSymbolName(
        parent_scope_creating_symbol,
        symbolTable
      )}"`;
      if (withParentSymbolNumber) {
        parent_name = `#${parent_scope_creating_symbol.my_id} ` + parent_name;
      }
    }
  }
  return parent_name;
};

function ScopeDetails(_props: ScopeDetailsProps) {
  return (
    <div className={classes.ScopeDetails} data-testid="ScopeDetails">
      ScopeDetails Component
    </div>
  );
}

export default ScopeDetails;
