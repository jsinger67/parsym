import { useNavigate, useParams } from "react-router-dom";
import classes from "./TabSwitcher.module.css";
import { Tabs } from "@mantine/core";
import SymbolNavigation from "../SymbolNavigation/SymbolNavigation";
import ScopeNavigation from "../ScopeNavigation/ScopeNavigation";
import { IconBraces, IconListLetters } from "@tabler/icons-react";

export interface TabSwitcherProps {}

function TabSwitcher(_props: TabSwitcherProps) {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs
      className={classes.TabSwitcher}
      data-testid="TabSwitcher"
      value={tabValue}
      defaultValue="symbols"
      onChange={(value) => navigate(`/tabs/${value}`)}
    >
      <Tabs.List>
        <Tabs.Tab value="symbols" leftSection={<IconListLetters size={24} />}>
          Symbols
        </Tabs.Tab>
        <Tabs.Tab value="scopes" leftSection={<IconBraces size={24} />}>
          Scopes
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="symbols">
        <SymbolNavigation />
      </Tabs.Panel>
      <Tabs.Panel value="scopes">
        <ScopeNavigation />
      </Tabs.Panel>
    </Tabs>
  );
}

export default TabSwitcher;
