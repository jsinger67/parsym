import { useContext } from "react";
import classes from "./TypeDetails.module.css";
import { SymbolTableContext } from "../App/App";
import { Space, Text } from "@mantine/core";
import { Type } from "../../symbol-table/Type";
import { getScopeByID } from "../InstanceDetails/InstanceDetails";
import ScopeLink from "../ScopeLink/ScopeLink";
import TypeEntrails from "../TypeEntrails/TypeEntrails";

export interface TypeDetailsProps {
  typeSymbol: Type;
}

function TypeDetails(props: TypeDetailsProps) {
  const { typeSymbol } = props;
  const symbolTable = useContext(SymbolTableContext);
  const type_member_scope = getScopeByID(typeSymbol.member_scope, symbolTable);
  // let entrails_specificity = <Text>Unspecified</Text>;

  return (
    <div className={classes.TypeDetails} data-testid="TypeDetails">
      <Text fw={700} td="underline">
        Type
      </Text>
      <TypeEntrails entrails={typeSymbol.entrails} />
      <Space h="sm"></Space>
      <Text>
        Member Scope: <ScopeLink scopeId={type_member_scope.my_id} />
      </Text>
    </div>
  );
}

export default TypeDetails;
