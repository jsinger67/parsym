import classes from "./TypeEntrails.module.css";
import { TypeEntrails as TypeSymbolEntrails } from "../../symbol-table/TypeEntrails";
import { Text, Space } from "@mantine/core";
import SymbolLink from "../SymbolLink/SymbolLink";
import { Function } from "../../symbol-table/Function";

export interface TypeEntrailsProps {
  entrails: TypeSymbolEntrails;
}

function TypeEntrails(props: TypeEntrailsProps) {
  const { entrails } = props;
  let entrails_specificity;
  if (typeof entrails === "object") {
    if ("Box" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Box
          </Text>
          <Space h="sm"></Space>
          <Text>
            Boxed type <SymbolLink symbolId={entrails.Box}></SymbolLink>
          </Text>
        </>
      );
    } else if ("Ref" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Ref
          </Text>
          <Space h="sm"></Space>
          <Text>
            {entrails.Ref[1] ? "Mutable" : ""} Ref of type{" "}
            <SymbolLink symbolId={entrails.Ref[0]}></SymbolLink>
          </Text>
        </>
      );
    } else if ("Surrogate" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Surrogate
          </Text>
          <Space h="sm"></Space>
          <Text>
            Refers to type{" "}
            <SymbolLink symbolId={entrails.Surrogate}></SymbolLink>
          </Text>
        </>
      );
    } else if ("EnumVariant" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            EnumVariant
          </Text>
          <Space h="sm"></Space>
          <Text>
            Contained type{" "}
            <SymbolLink symbolId={entrails.EnumVariant}></SymbolLink>
          </Text>
        </>
      );
    } else if ("Vec" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Vec
          </Text>
          <Space h="sm"></Space>
          <Text>
            Item type <SymbolLink symbolId={entrails.Vec}></SymbolLink>
          </Text>
        </>
      );
    } else if ("Function" in entrails) {
      const function_symbol: Function = entrails.Function;
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Function
          </Text>
          <Space h="sm"></Space>
          <Text>Alternations: {function_symbol.alts}</Text>
          <Text>Non-Terminal: "{function_symbol.non_terminal}"</Text>
          <Text>
            Production: #{function_symbol.prod_num} "
            {function_symbol.prod_string}"
          </Text>
          <Text>Relative production index: {function_symbol.rel_idx}</Text>
          <Text>Semantics: {function_symbol.sem}</Text>
        </>
      );
    } else if ("Option" in entrails) {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Option
          </Text>
          <Space h="sm"></Space>
          <Text>
            Optional type <SymbolLink symbolId={entrails.Option}></SymbolLink>
          </Text>
        </>
      );
    } else if ("Clipped" in entrails) {
      if (typeof entrails.Clipped === "object") {
        entrails_specificity = (
          <>
            <Text fw={600} fs="italic">
              Clipped
            </Text>
            <Text fw={600} fs="italic">
              Non-terminal symbol:{" "}
              <SymbolLink symbolId={entrails.Clipped.NonTerminal} />
            </Text>
          </>
        );
      } else {
        entrails_specificity = (
          <>
            <Text fw={600} fs="italic">
              Clipped
            </Text>
            <Text fw={600} fs="italic">
              {entrails.Clipped}
            </Text>
          </>
        );
      }
    } else if ("UserDefinedType" in entrails) {
      const typeName = entrails.UserDefinedType[1].join("::");
      if (typeof entrails.UserDefinedType[0] === "object") {
        entrails_specificity = (
          <>
            <Text fw={600} fs="italic">
              UserDefinedType
            </Text>
            <Text>
              Non-terminal symbol:{" "}
              <SymbolLink symbolId={entrails.UserDefinedType[0].NonTerminal} />
            </Text>
            <Text>{typeName}</Text>
          </>
        );
      } else {
        entrails_specificity = (
          <>
            <Text fw={600} fs="italic">
              UserDefinedType
            </Text>
            <Text>{entrails.UserDefinedType[0]}</Text>
            <Text>{typeName}</Text>
          </>
        );
      }
    } else {
      entrails_specificity = (
        <>
          <Text fw={600} fs="italic">
            Unknown type entrails
          </Text>
          <Space h="sm"></Space>
          <Text>{JSON.stringify(entrails)}</Text>
        </>
      );
    }
  } else if (typeof entrails === "string") {
    entrails_specificity = (
      <>
        <Text fw={600} fs="italic">
          {entrails}
        </Text>
        <Space h="sm"></Space>
      </>
    );
  }
  return (
    <div className={classes.TypeEntrails} data-testid="TypeEntrails">
      {entrails_specificity}
    </div>
  );
}

export default TypeEntrails;
