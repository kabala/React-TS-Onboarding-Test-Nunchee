import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { ContentPage, SpotlightPage, HomePage } from "./pages";
import { Paths } from "./interfaces/enums";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <div className="nunchee">
        <DefaultLayout>
          <Switch>
            {}
            <Route exact path={Paths.Inicio}>
              <HomePage />
            </Route>
            <Route exact path={Paths.Spotlight}>
              <SpotlightPage />
            </Route>
            <Route path={Paths.Content}>
              <ContentPage />
            </Route>
          </Switch>
        </DefaultLayout>
      </div>
    </Router>
  );
}

export default App;
