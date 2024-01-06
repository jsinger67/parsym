import { useContext, useState } from "react";
import classes from "./ScopeNavigation.module.css";
import { useNavigate } from "react-router-dom";
import { SymbolTableContext } from "../App/App";
import { NavLink, Stack } from "@mantine/core";
import { getParentName, getScopeName } from "../ScopeDetails/ScopeDetails";

export interface ScopeNavigationProps {}

function ScopeNavigation(_props: ScopeNavigationProps) {
  const symbolTable = useContext(SymbolTableContext);
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  return (
    <Stack
      className={classes.ScopeNavigation}
      data-testid="ScopeNavigation"
      gap="xs"
    >
      {symbolTable.scopes.map((scope, index) => {
        let parent: number | null = scope.parent;
        let parentName = getParentName(parent, symbolTable, false);
        let scopeName = getScopeName(scope, symbolTable, false);

        return (
          <NavLink
            className={classes.NavLink}
            key={scope.my_id}
            active={index === active}
            onClick={() => {
              setActive(index);
              navigate(`/scopes/${scope.my_id}`);
            }}
            label={`${scope.my_id} - ${scopeName} parent: (${parentName})`}
            variant="filled"
          ></NavLink>
        );
      })}
    </Stack>
  );
}

export default ScopeNavigation;
