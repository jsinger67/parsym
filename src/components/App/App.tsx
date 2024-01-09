import classes from "./App.module.css";
import { AppShell, Burger, useComputedColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../Header/Header";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { createContext, useState } from "react";
import DetailsRoutes from "../DetailsRoutes/DetailsRoutes";
import Footer from "../Footer/Footer";
import TabSwitcher from "../TabSwitcher/TabSwitcher";

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

  const computedColorScheme: string = useComputedColorScheme("dark");

  return (
    <SymbolTableContext.Provider value={symbolTable}>
      <AppShell
        className={classes.App}
        data-testid="App"
        header={{ height: 60 }}
        footer={{ height: 30 }}
        navbar={{
          width: "max(400px, 25%)",
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        style={{
          backgroundColor:
            computedColorScheme === "dark"
              ? "var(--mantine-color-dark-9)"
              : "var(--mantine-color-light-3)",
        }}
      >
        <AppShell.Header
          style={{
            backgroundColor:
              computedColorScheme === "dark"
                ? "var(--mantine-color-dark-9)"
                : "var(--mantine-color-light-3)",
          }}
        >
          <Burger
            opened={opened}
            onClick={handlers.toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <Header setSymbolTable={setSymbolTable} />
        </AppShell.Header>

        <AppShell.Navbar
          p="md"
          style={{
            backgroundColor:
              computedColorScheme === "dark"
                ? "var(--mantine-color-dark-9)"
                : "var(--mantine-color-light-3)",
          }}
        >
          <TabSwitcher />
        </AppShell.Navbar>

        <AppShell.Main>
          <DetailsRoutes />
        </AppShell.Main>
        <AppShell.Footer
          style={{
            backgroundColor:
              computedColorScheme === "dark"
                ? "var(--mantine-color-dark-9)"
                : "var(--mantine-color-light-3)",
          }}
        >
          <Footer />
        </AppShell.Footer>
      </AppShell>
    </SymbolTableContext.Provider>
  );
}

export default App;
