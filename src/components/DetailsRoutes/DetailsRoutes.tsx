import { Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import SymbolDetails from "../SymbolDetails/SymbolDetails";
import ScopeDetails from "../ScopeDetails/ScopeDetails";

export interface DetailsRoutesProps {}

function DetailsRoutes(_props: DetailsRoutesProps) {
  return (
    <Routes>
      <Route
        path="/symbols/:symbolId"
        element={<SymbolDetails />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="/scopes/:scopeId"
        element={<ScopeDetails />}
        errorElement={<ErrorPage />}
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default DetailsRoutes;
