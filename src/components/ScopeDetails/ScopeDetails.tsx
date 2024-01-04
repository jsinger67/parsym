import classes from "./ScopeDetails.module.css";

export interface ScopeDetailsProps {}

function ScopeDetails(_props: ScopeDetailsProps) {
  return (
    <div className={classes.ScopeDetails} data-testid="ScopeDetails">
      ScopeDetails Component
    </div>
  );
}

export default ScopeDetails;
