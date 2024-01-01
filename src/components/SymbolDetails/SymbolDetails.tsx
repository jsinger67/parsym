import { Scope } from "../../symbol-table/Scope";
import { ScopeId } from "../../symbol-table/ScopeId";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { Symbol } from "../../symbol-table/Symbol";
import classes from "./SymbolDetails.module.css";
import { useContext } from "react";
import { SymbolTableContext } from "../App/App";
import { SymbolId } from "../../symbol-table/SymbolId";
import { Text, Space } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export interface SymbolDetailsProps {}

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

// const getSymbolNameById = (
//   symbol_id: number,
//   symbolTable: SymbolTable
// ): string => {
//   if (symbol_id >= symbolTable.symbols.length) {
//     return "Symbol {symbol} not found in symbol table";
//   }
//   const symbol = symbolTable.symbols[symbol_id];
//   const enveloping_scope = getScopeByID(symbol.name_id[0], symbolTable);
//   return enveloping_scope.names[symbol.name_id[1]] || "<Unnamed>";
// };

interface SymbolDetailsLoaderParams {
  symbolId: SymbolId;
}

function SymbolDetails(_props: SymbolDetailsProps) {
  const loaderData = useLoaderData();
  console.log(`Loader data:  ${JSON.stringify(loaderData)}`);
  const { symbolId } = loaderData as SymbolDetailsLoaderParams;
  console.log(`Symbol ID: ${symbolId}`);
  const symbolTable = useContext(SymbolTableContext);
  console.log(`Symbol Table: ${symbolTable.symbols.length}`);
  // const symbol = symbolTable.symbols[symbolId];
  const name = "Test"; // getSymbolName(symbol, symbolTable);

  return (
    <div className={classes.SymbolDetails} data-testid="SymbolDetails">
      <Text fw={700} td="underline">
        Symbol Details
      </Text>
      <Space h="md" />
      <Text>
        {/* {symbol.my_id} */}
        {name}
      </Text>{" "}
    </div>
  );
}

export default SymbolDetails;
