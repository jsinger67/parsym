import "@mantine/core/styles.css";
import classes from "./Header.module.css";
import { invoke } from "@tauri-apps/api";
import ColorSchemeToggle from "../ColorSchemeToggle/ColorSchemeToggle";
import { Button, FileButton, Group, Text, Title } from "@mantine/core";
import { SymbolTable } from "../../symbol-table/SymbolTable";
import { useEffect, useState } from "react";

export interface HeaderProps {
  setSymbolTable: React.Dispatch<React.SetStateAction<SymbolTable>>;
}

function Header(props: HeaderProps) {
  let { setSymbolTable } = props;
  // -------------------------------------------
  // State Grammar File
  // -------------------------------------------

  const [file, setFile] = useState<File | null>(null);

  const handleNewFile = (file: File) => {
    console.log(`File: ${file.name}`);
    file.text().then((content) => {
      console.log(`Content: ${content}`);
      setFile(file);
      invoke<string>("process_grammar", { file: file.name, content: content })
        .then((result) => {
          const data = JSON.parse(result);
          setSymbolTable(data);
          console.log(`Result is ${result}`);
        })
        .catch((e) => console.error(e));
    });
  };

  useEffect(() => {
    if (file) {
      handleNewFile(file);
    }
  }, [file]);

  return (
    <Group
      justify="space-between"
      data-testid="Header"
      className={classes.Group}
    >
      <Group justify="flex-start" gap="xl" className={classes.InnerGroup}>
        <FileButton onChange={setFile} accept=".par">
          {(props) => <Button {...props}>Choose grammar</Button>}
        </FileButton>
        <Title className={classes.Title} lineClamp={1}>
          Parol Symbols Viewer
        </Title>
      </Group>
      {file && <Text className={classes.FileName}>{file.name}</Text>}
      <ColorSchemeToggle />
    </Group>
  );
}

export default Header;
