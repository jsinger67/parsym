import { useNavigate, useParams } from "react-router-dom";
import classes from "./TabSwitcher.module.css";
import { Tabs } from "@mantine/core";
import SymbolNavigation from "../SymbolNavigation/SymbolNavigation";
import ScopeNavigation from "../ScopeNavigation/ScopeNavigation";
import { IconCircle, IconCircleDot } from "@tabler/icons-react";

export interface TabSwitcherProps {}

function TabSwitcher(_props: TabSwitcherProps) {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <div className={classes.TabSwitcher} data-testid="TabSwitcher">
      <Tabs value={tabValue} onChange={(value) => navigate(`/tabs/${value}`)}>
        <Tabs.List>
          <Tabs.Tab value="symbols" leftSection={<IconCircleDot size={24} />}>
            Symbol
          </Tabs.Tab>
          <Tabs.Tab value="scopes" leftSection={<IconCircle size={24} />}>
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
    </div>
  );
}

export default TabSwitcher;