import setupTests from "../../setupTests";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { screen } from "../../test-utils";
import { render } from "@testing-library/react";

import InstanceDetails from "./InstanceDetails";
import { MantineProvider } from "@mantine/core";
import { createContext, useState } from "react";

const SymbolTableContext = createContext({
  symbols: [],
  scopes: [],
} as SymbolTable);

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const [symbolTable] = useState<SymbolTable>({
    symbols: [
      {
        my_id: 0,
        name_id: [0, 0],
        kind: { Type: { entrails: "None", member_scope: 1 } },
      },
    ],
    scopes: [
      { parent: null, my_id: 0, names: [""] },
      { parent: 0, my_id: 1, names: [""] },
    ],
  } as SymbolTable);
  return (
    <SymbolTableContext.Provider value={symbolTable}>
      <MantineProvider>{children}</MantineProvider>
    </SymbolTableContext.Provider>
  );
};

describe("<InstanceDetails />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    // TODO: fix this test
    // render(
    //   <InstanceDetails
    //     instanceSymbol={{
    //       scope: 0,
    //       type_id: 0,
    //       entrails: {
    //         used: false,
    //         ref_spec: "None",
    //         mutability: "Immutable",
    //       },
    //       sem: "None",
    //       description: "",
    //     }}
    //   />,
    //   { wrapper: AllTheProviders }
    // );
    // const instanceDetails = screen.getByTestId("InstanceDetails");
    // expect(instanceDetails).not.toBeNull();
  });
});
