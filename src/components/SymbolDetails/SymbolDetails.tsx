import { Scope } from "../../symbol-table/Scope";
import { ScopeId } from "../../symbol-table/ScopeId";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { Symbol } from "../../symbol-table/Symbol";
import classes from "./SymbolDetails.module.css";
import { useContext } from "react";
import { SymbolTableContext } from "../App/App";
import { Text, Space } from "@mantine/core";
import { useParams } from "react-router-dom";
import InstanceDetails from "../InstanceDetails/InstanceDetails";
import TypeDetails from "../TypeDetails/TypeDetails";

const getScopeByID = (scope_id: ScopeId, symbolTable: SymbolTable): Scope => {
  const scope = symbolTable.scopes.find((scope) => scope.my_id === scope_id)!;
  return scope;
};

export const getSymbolName = (
  symbol: Symbol,
  symbolTable: SymbolTable
): string => {
  const enveloping_scope = getScopeByID(symbol.name_id[0], symbolTable);
  return enveloping_scope.names[symbol.name_id[1]] || "<Unnamed>";
};

function SymbolDetails() {
  const symbolId = (() => {
    const { symbolId } = useParams<{ symbolId: string }>();
    if (!symbolId) {
      return 0;
    }
    return parseInt(symbolId);
  })();
  console.log(`Symbol ID: ${symbolId}`);
  const symbolTable = useContext(SymbolTableContext);
  console.log(`Symbol Table: ${symbolTable.symbols.length}`);
  const symbol = symbolTable.symbols[symbolId];
  if (!symbol) {
    return <div data-testid="SymbolDetails"></div>;
  }
  const symbolName = getSymbolName(symbol, symbolTable);

  let component = null;
  if ("Instance" in symbol.kind) {
    component = <InstanceDetails instanceSymbol={symbol.kind.Instance} />;
  } else if ("Type" in symbol.kind) {
    component = <TypeDetails typeSymbol={symbol.kind.Type} />;
  } else {
    component = <div>Unknown symbol kind: {symbol.kind}</div>;
  }

  return (
    <div className={classes.SymbolDetails} data-testid="SymbolDetails">
      <Text fw={700} td="underline">
        Details of Symbol {symbolId} - '{symbolName}'
      </Text>
      <Space h="md" />
      {component}
    </div>
  );
}

export default SymbolDetails;
