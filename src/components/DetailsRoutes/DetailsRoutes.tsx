import { Route, Routes } from "react-router-dom";
import { Text } from "@mantine/core";
import ErrorPage from "../ErrorPage/ErrorPage";
import SymbolDetails from "../SymbolDetails/SymbolDetails";
import ScopeDetails from "../ScopeDetails/ScopeDetails";

export interface DetailsRoutesProps {}

function DetailsRoutes(_props: DetailsRoutesProps) {
  return (
    <Routes>
      <Route
        path="/"
        errorElement={<ErrorPage />}
        element={<Text>Nothing selected</Text>}
      >
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

export default DetailsRoutes;
