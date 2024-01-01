import { useContext } from "react";
import classes from "./SymbolNavigation.module.css";
import { SymbolTableContext } from "../App/App";
import { NavLink, Stack } from "@mantine/core";

export interface SymbolNavigationProps {}

function SymbolNavigation(_props: SymbolNavigationProps) {
  const symbolTable = useContext(SymbolTableContext);

  return (
    <Stack
      className={classes.SymbolNavigation}
      data-testid="SymbolNavigation"
      gap="xs"
    >
      {symbolTable.symbols.map((symbol) => {
        return (
          <NavLink
            key={symbol.my_id}
            href={`/symbols/${symbol.my_id}`}
            label={`${symbol.my_id}`}
          ></NavLink>
        );
      })}
    </Stack>
  );
}

export default SymbolNavigation;
