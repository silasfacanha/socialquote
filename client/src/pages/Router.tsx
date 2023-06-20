import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyOracula from "./MyOracula";
import Friends from "./Friends";
import Auth from "./Auth";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/myoracula" Component={MyOracula} />
        <Route path="/friends" Component={Friends} />
        <Route path="/auth" Component={Auth} />
        {/* <Route path="/myprofile" component={MyProfile} />
          <Route path="/settings" component={Settings} />
      
           */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
