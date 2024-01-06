import { Route, Routes } from "react-router-dom";
import TabSwitcher from "../TabSwitcher/TabSwitcher";
import ErrorPage from "../ErrorPage/ErrorPage";

export interface TabRoutesProps {}

function TabRoutes(_props: TabRoutesProps) {
  return (
    <Routes>
      <Route path="/" errorElement={<ErrorPage />}>
        <Route path="tabs/:tabValue">
          element={<TabSwitcher />}
          errorElement={<ErrorPage />}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default TabRoutes;