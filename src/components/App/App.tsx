import "@mantine/core/styles.css";
import classes from "./App.module.css";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../Header/Header";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { createContext, useState } from "react";
import SymbolNavigation from "../SymbolNavigation/SymbolNavigation";
import RouterSwitcher from "../RouterSwitcher/RouterSwitcher";

export const SymbolTableContext = createContext({
  symbols: [],
  scopes: [],
} as SymbolTable);

function App() {
  const [opened, handlers] = useDisclosure(true);

  // -------------------------------------------
  // State Symbol Table Data
  // -------------------------------------------

  const [symbolTable, setSymbolTable] = useState<SymbolTable>({
    symbols: [],
    scopes: [],
  } as SymbolTable);

  console.log(
    `Number of symbols in Symbol Table: ${symbolTable.symbols.length}`
  );

  return (
    <SymbolTableContext.Provider value={symbolTable}>
      <AppShell
        className={classes.App}
        data-testid="App"
        header={{ height: 60 }}
        footer={{ height: 60 }}
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

        <AppShell.Navbar p="md">
          <SymbolNavigation />
        </AppShell.Navbar>

        <AppShell.Main>
          <RouterSwitcher />
        </AppShell.Main>
        <AppShell.Footer>Footer</AppShell.Footer>
      </AppShell>
    </SymbolTableContext.Provider>
  );
}

export default App;
