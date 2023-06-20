import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyOracula from "./MyOracula";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/myoracula" Component={MyOracula} />
        {/* <Route path="/myprofile" component={MyProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/auth" component={Auth} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
