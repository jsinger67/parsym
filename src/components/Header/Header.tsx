import {
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./Header.module.css";

// export interface HeaderProps {}

function Header() {
  // props: HeaderProps
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <div className={classes.Header} data-testid="Header">
      <ActionIcon
        data-testid="ToggleColorSchemeActionIcon"
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
      </ActionIcon>
    </div>
  );
}

export default Header;
