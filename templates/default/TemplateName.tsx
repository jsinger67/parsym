import classes from "./TemplateName.module.css";

export interface TemplateNameProps {}

function TemplateName(_props: TemplateNameProps) {
  return (
    <div className={classes.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
}

export default TemplateName;
