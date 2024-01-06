import { Scope } from "../../symbol-table/Scope";
import { ScopeId } from "../../symbol-table/ScopeId";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { Symbol } from "../../symbol-table/Symbol";
import { Type } from "../../symbol-table/Type";
import { getSymbolName } from "../SymbolDetails/SymbolDetails";
import classes from "./ScopeDetails.module.css";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SymbolTableContext } from "../App/App";
import { Text, Space, Divider, Grid } from "@mantine/core";
import ScopeLink from "../ScopeLink/ScopeLink";
import SymbolLink from "../SymbolLink/SymbolLink";

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

export const getScopeName = (scope: Scope, symbolTable: SymbolTable) => {
  let scopeName = "<Global>";
  let scopeCreatingSymbol = getScopeCreatingSymbol(scope.my_id, symbolTable);
  if (scopeCreatingSymbol !== undefined) {
    scopeName = `'${getSymbolName(scopeCreatingSymbol, symbolTable)}'`;
  }
  return { scopeName, scopeCreatingSymbol };
};

export const getParentName = (
  parent: ScopeId | null,
  symbolTable: SymbolTable
) => {
  let parentName = "-";
  let parentScopeCreatingSymbol = undefined;
  if (parent !== null) {
    parentScopeCreatingSymbol = getScopeCreatingSymbol(parent, symbolTable);
    if (parentScopeCreatingSymbol !== undefined) {
      parentName = `'${getSymbolName(parentScopeCreatingSymbol, symbolTable)}'`;
    }
  }
  return { parentName, parentScopeCreatingSymbol };
};

function ScopeDetails(_props: ScopeDetailsProps) {
  const scopeId = (() => {
    const { scopeId } = useParams<{ scopeId: string }>();
    if (!scopeId) {
      return 0;
    }
    return parseInt(scopeId);
  })();
  console.log(`Scope ID: ${scopeId}`);
  const symbolTable = useContext(SymbolTableContext);
  const scope = symbolTable.scopes[scopeId];
  if (!scope) {
    return <div data-testid="ScopeDetails"></div>;
  }
  const parent: number | null = scope.parent;
  const { parentName, parentScopeCreatingSymbol } = getParentName(
    parent,
    symbolTable
  );
  const { scopeName, scopeCreatingSymbol } = getScopeName(scope, symbolTable);

  return (
    <div className={classes.ScopeDetails} data-testid="ScopeDetails">
      <Text fw={700} td="underline">
        Details of Scope {scope.my_id}
      </Text>
      <Space h="md" />
      <Text>
        {scopeCreatingSymbol ? (
          <>
            <SymbolLink symbolId={scopeCreatingSymbol.my_id} /> -
          </>
        ) : null}
        {scopeName}
      </Text>
      {typeof parent === "number" && (
        <Text>
          Parent: <ScopeLink scopeId={parent} /> (
          {parentScopeCreatingSymbol ? (
            <>
              <SymbolLink symbolId={parentScopeCreatingSymbol.my_id} /> -
            </>
          ) : null}
          {parentName} )
        </Text>
      )}
      {typeof parent === "string" && <Text>{parent}</Text>}
      <Space h="md" />
      <Divider />
      <Space h="sm" />
      <Text fw={700} td="underline">
        Member Symbols
      </Text>
      <Space h="md" />
      <Grid className="boxed" columns={2} justify="left">
        {scope.symbols.map((symbol) => {
          if (symbol >= symbolTable.symbols.length) {
            return (
              <>
                <Text>Symbol {symbol} not found in symbol table</Text>
              </>
            );
          }
          const sym = symbolTable.symbols[symbol];
          const local_name_id = sym.name_id[1];
          return (
            <>
              <Grid.Col className="boxed" span={1} key={`ID${sym.my_id}`}>
                <SymbolLink symbolId={sym.my_id} />
              </Grid.Col>
              <Grid.Col className="boxed" span={1} key={`Name${sym.my_id}`}>
                '{scope.names[local_name_id] || "<Unnamed>"}'
              </Grid.Col>
            </>
          );
        })}
      </Grid>{" "}
    </div>
  );
}

export default ScopeDetails;
