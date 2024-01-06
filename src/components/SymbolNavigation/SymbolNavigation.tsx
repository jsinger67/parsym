import { useContext, useState } from "react";
import classes from "./SymbolNavigation.module.css";
import { SymbolTableContext } from "../App/App";
import { NavLink, Stack } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { getSymbolName } from "../SymbolDetails/SymbolDetails";

export interface SymbolNavigationProps {}

function SymbolNavigation(_props: SymbolNavigationProps) {
  const symbolTable = useContext(SymbolTableContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <Stack
      className={classes.SymbolNavigation}
      data-testid="SymbolNavigation"
      gap="xs"
    >
      {symbolTable.symbols.map((symbol, index) => {
        const symbolName = getSymbolName(symbol, symbolTable);
        return (
          <NavLink
            className={classes.NavLink}
            key={symbol.my_id}
            active={index === active}
            onClick={() => {
              setActive(index);
              navigate(`/symbols/${symbol.my_id}`);
            }}
            label={`${symbol.my_id} - ${symbolName}`}
            variant="filled"
          ></NavLink>
        );
      })}
    </Stack>
  );
}

export default SymbolNavigation;
