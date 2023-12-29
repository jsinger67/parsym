// import classes from "./Header.module.css";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import { Group } from "@mantine/core";

// export interface HeaderProps {}

function Header() {
  return (
    <Group justify="flex-end" mt={5} mr={5}>
      <ColorSchemeToggle />
    </Group>
  );
}

export default Header;
