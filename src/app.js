import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";



import HeroBannerComponent from "./components/home/hero_banner";
import AboutComponent from "./components/home/about";
import SignUpComponent from "./components/home/sign_up";



function App() {
  return (
    <React.StrictMode>
      {/* <Switch> */}
        {/* <Route exact path="/"> */}
          <main>
              <HeroBannerComponent />
              <AboutComponent />
          </main>
        {/* </Route> */}
        {/* </Switch> */}
    </React.StrictMode>
  );
}

export default App;
