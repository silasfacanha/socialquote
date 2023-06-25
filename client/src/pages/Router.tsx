import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import MyOracula from "./MyOracula";
import Friends from "./Friends";
import Auth from "./Auth";
import Settings from "./Settings";
import MyProfile from "./MyProfile";

function Router() {
  return (
  
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/myoracula" Component={MyOracula} />
        <Route path="/friends" Component={Friends} />
        <Route path="/auth" Component={Auth} />
        <Route path="/settings" Component={Settings} />
        <Route path="/myprofile" Component={MyProfile} />
      </Routes>
   
  );
}

export default Router;
