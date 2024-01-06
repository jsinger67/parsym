import { Group } from "@mantine/core";
import classes from "./Footer.module.css";

export interface FooterProps {}

function Footer(_props: FooterProps) {
  return (
    <Group justify="center" data-testid="Footer" className={classes.Footer}>
      (c) 2023 - 2024{" "}
      <a href="https://github.com/jsinger67" className={classes.Link}>
        Jörg Singer
      </a>
    </Group>
  );
}

export default Footer;
