import { Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import SymbolDetails from "../SymbolDetails/SymbolDetails";
import ScopeDetails from "../ScopeDetails/ScopeDetails";

export interface RouterSwitcherProps {}

function RouterSwitcher(_props: RouterSwitcherProps) {
  return (
    <Routes>
      <Route path="/" errorElement={<ErrorPage />}>
        <Route
          path="symbols/:symbolId"
          element={<SymbolDetails />}
          errorElement={<ErrorPage />}
        />
        <Route
          path="scopes/:scopeId"
          element={<ScopeDetails />}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default RouterSwitcher;
