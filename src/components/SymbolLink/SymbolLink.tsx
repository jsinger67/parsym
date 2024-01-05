import { SymbolId } from "../../symbol-table/SymbolId";
import classes from "./SymbolLink.module.css";
import { NavLink } from "react-router-dom";

export interface SymbolLinkProps {
  symbolId: SymbolId;
}

function SymbolLink(props: SymbolLinkProps) {
  const { symbolId } = props;

  return (
    <NavLink to={`/symbols/${symbolId}`}>
      <div className={classes.SymbolLink} data-testid="SymbolLink">
        Sym({symbolId})
      </div>
    </NavLink>
  );
}

export default SymbolLink;
