import { NavLink } from "react-router-dom";
import { ScopeId } from "../../symbol-table/ScopeId";
import classes from "./ScopeLink.module.css";

export interface ScopeLinkProps {
  scopeId: ScopeId;
}

function ScopeLink(props: ScopeLinkProps) {
  const { scopeId } = props;
  return (
    <NavLink to={`/scopes/${scopeId}`}>
      <div className={classes.ScopeLink} data-testid="ScopeLink">
        Scope({scopeId})
      </div>
    </NavLink>
  );
}

export default ScopeLink;
