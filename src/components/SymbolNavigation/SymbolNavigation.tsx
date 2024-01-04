import { useContext } from "react";
import classes from "./SymbolNavigation.module.css";
import { SymbolTableContext } from "../App/App";
import { NavLink, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { getSymbolName } from "../SymbolDetails/SymbolDetails";

export interface SymbolNavigationProps {}

function SymbolNavigation(_props: SymbolNavigationProps) {
  const symbolTable = useContext(SymbolTableContext);
  const navigate = useNavigate();

  return (
    <Stack
      className={classes.SymbolNavigation}
      data-testid="SymbolNavigation"
      gap="xs"
    >
      {symbolTable.symbols.map((symbol) => {
        const symbolName = getSymbolName(symbol, symbolTable);
        return (
          <NavLink
            className={classes.NavLink}
            key={symbol.my_id}
            onClick={() => navigate(`/symbols/${symbol.my_id}`)}
            label={`${symbol.my_id} ${symbolName}`}
          ></NavLink>
        );
      })}
    </Stack>
  );
}

export default SymbolNavigation;
