// import classes from "./ErrorPage.module.css";
import { useRouteError } from "react-router-dom";

interface ErrorType {
  message: string | null;
  statusText: string | null;
}

interface ErrorPageProps {}

function ErrorPage(_props: ErrorPageProps) {
  const error = useRouteError() as ErrorType;
  if (!error) return <div id="error-page" data-testid="ErrorPage"></div>;

  console.error(error);

  return (
    <div id="error-page" data-testid="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message || "Unknown Error"}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
