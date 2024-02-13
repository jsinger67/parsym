import { useContext } from "react";
import { SymbolId } from "../../symbol-table/SymbolId";
import classes from "./InstanceDetails.module.css";
import { SymbolTableContext } from "../App/App";
import { Text } from "@mantine/core";
import { ScopeId } from "../../symbol-table/ScopeId";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { Scope } from "../../symbol-table/Scope";
import { Instance } from "../../symbol-table/Instance";
import SymbolLink from "../SymbolLink/SymbolLink";
import ScopeLink from "../ScopeLink/ScopeLink";

export interface InstanceDetailsProps {
  instanceSymbol: Instance;
}

export const getScopeByID = (
  scope_id: ScopeId,
  symbolTable: SymbolTable
): Scope => {
  const scope = symbolTable.scopes.find((scope) => scope.my_id === scope_id)!;
  return scope;
};

const getSymbolNameById = (
  symbol_id: SymbolId,
  symbolTable: SymbolTable
): string => {
  if (symbol_id >= symbolTable.symbols.length) {
    return "Symbol {symbol} not found in symbol table";
  }
  const symbol = symbolTable.symbols[symbol_id];
  const enveloping_scope = getScopeByID(symbol.name_id[0], symbolTable);
  return enveloping_scope.names[symbol.name_id[1]] || "<Unnamed>";
};

function InstanceDetails(props: InstanceDetailsProps) {
  const { instanceSymbol } = props;
  const symbolTable = useContext(SymbolTableContext);
  const type_name = getSymbolNameById(instanceSymbol.type_id, symbolTable);

  return (
    <div className={classes.InstanceDetails} data-testid="InstanceDetails">
      <Text fw={700} td="underline">
        Instance
      </Text>
      <Text>"{instanceSymbol.description}"</Text>
      <Text>Semantic: {instanceSymbol.sem}</Text>
      <Text>
        Type: <SymbolLink symbolId={instanceSymbol.type_id} /> '{type_name}'
      </Text>
      <Text>
        Scope: <ScopeLink scopeId={instanceSymbol.scope} />
      </Text>
      <Text>{instanceSymbol.entrails.used ? "" : "not "}used</Text>
    </div>
  );
}

export default InstanceDetails;
