import "@mantine/core/styles.css";
import classes from "./App.module.css";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../Header/Header";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { createContext, useState } from "react";

function App() {
  const [opened, handlers] = useDisclosure(true);

  // -------------------------------------------
  // State Symbol Table Data
  // -------------------------------------------

  const [symbolTable, setSymbolTable] = useState<SymbolTable>({
    symbols: [],
    scopes: [],
  } as SymbolTable);

  const SymbolTableContext = createContext(symbolTable);

  return (
    <SymbolTableContext.Provider value={symbolTable}>
      <AppShell
        className={classes.App}
        data-testid="App"
        header={{ height: 60 }}
        footer={{ height: 30 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger
            opened={opened}
            onClick={handlers.toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Header setSymbolTable={setSymbolTable} />
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main>{JSON.stringify(symbolTable)}</AppShell.Main>
        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </SymbolTableContext.Provider>
  );
}

export default App;
