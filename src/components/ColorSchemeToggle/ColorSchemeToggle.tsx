import {
  useMantineColorScheme,
  useComputedColorScheme,
  ActionIcon,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./ColorSchemeToggle.module.css";

// interface ColorSchemeToggleProps {}

function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <ActionIcon
      data-testid="ColorSchemeToggle"
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
      style={{
        backgroundColor:
          computedColorScheme === "dark"
            ? "var(--mantine-color-dark-9)"
            : "var(--mantine-color-light-3)",
      }}
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
