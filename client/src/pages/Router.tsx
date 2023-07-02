import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyOracula from "./MyOracula";
import Friends from "./Friends";
import Auth from "./Auth";
import Settings from "./Settings";
import MyProfile from "./MyProfile";

import { RequireAuth } from "../components/RequireAuth";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />

      <Route
        path="/myoracula"
        element={
          <RequireAuth>
            <MyOracula />
          </RequireAuth>
        }
      />

      <Route
        path="/friends"
        element={
          <RequireAuth>
            <Friends />
          </RequireAuth>
        }
      />

      <Route
        path="/settings"
        element={
          <RequireAuth>
            <Settings />
          </RequireAuth>
        }
      />

      <Route
        path="/myprofile"
        element={
          <RequireAuth>
            <MyProfile />
          </RequireAuth>
        }
      />

      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default Router;
