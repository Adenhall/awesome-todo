import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home, { loader as homeLoader } from "./pages/Home";
import Create, { action as createAction } from "./pages/Create";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index loader={homeLoader} element={<Home />} />
      <Route path="/create" action={createAction} element={<Create />} />
    </Route>,
  ),
);
