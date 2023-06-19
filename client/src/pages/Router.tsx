import React from 'react';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './Home';



function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          {/* <Route path="/myoracula" component={MyOracula} />
          <Route path="/myprofile" component={MyProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" component={Friends} />
          <Route path="/auth" component={Auth} /> */}
          {/* Add more routes for your pages */}
        </Routes>
      </BrowserRouter>
    );
  }


  export default Router