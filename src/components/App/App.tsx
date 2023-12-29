import "@mantine/core/styles.css";
// import styles from "./App.module.css";

import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Header from "../Header/Header";

function App() {
  const [opened, handlers] = useDisclosure(true);
  return (
    <AppShell
      // className={styles.App}
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
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
      <AppShell.Footer>Footer</AppShell.Footer>
    </AppShell>
  );
}

export default App;
