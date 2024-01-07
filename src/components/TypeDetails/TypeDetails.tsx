import { useContext } from "react";
import classes from "./TypeDetails.module.css";
import { SymbolTableContext } from "../App/App";
import { Text } from "@mantine/core";
import { Type } from "../../symbol-table/Type";

export interface TypeDetailsProps {
  typeSymbol: Type;
}

function TypeDetails(props: TypeDetailsProps) {
  const { typeSymbol } = props;
  const symbolTable = useContext(SymbolTableContext);

  return (
    <div className={classes.TypeDetails} data-testid="TypeDetails">
      <Text fw={700} td="underline">
        Type
      </Text>
    </div>
  );
}

export default TypeDetails;
