import { useState } from "react";
import setupTests from "../../setupTests";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { render, screen } from "../../test-utils";

import Header from "./Header";

const [_symbolTable, setSymbolTable] = useState<SymbolTable>({
  symbols: [],
  scopes: [],
} as SymbolTable);

describe("<Header />", () => {
  beforeAll(() => setupTests());
  test("it should mount", () => {
    render(<Header setSymbolTable={setSymbolTable} />);

    const header = screen.getByTestId("Header");
    expect(header).not.toBeNull();
  });
});
