import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home, { loader as homeLoader } from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index loader={homeLoader} element={<Home />} />
    </Route>,
  ),
);
