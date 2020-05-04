import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import rootReducer from "./store/appReducer";
import { Paths } from "./interfaces/enums";
import DefaultLayout from "./layouts/DefaultLayout";
import { ContentPage, SpotlightPage, HomePage } from "./pages";
import "./styles/main.scss";
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path={Paths.Inicio} component={HomePage} />
            <Route exact path={Paths.Spotlight} component={SpotlightPage} />
            <Route path={Paths.Content} component={ContentPage} />
          </Switch>
        </DefaultLayout>
      </Router>
    </Provider>
  );
}

export default App;
