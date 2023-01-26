import "./App.scss";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import WithScrollTop from "./wrappers/ScrollTop";

import Layout from "./components/Layout";

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <Router>
      <WithScrollTop>
        <Route
          path={[...routes.minimal.map(({ path }) => path)]}
          component={(props: any) => (
            <Layout {...props}>
              <Switch {...props}>
                {routes.minimal.map((route, idx) => (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    component={(props: any) => (
                      <route.component {...props} key={idx} />
                    )}
                  />
                ))}
              </Switch>
            </Layout>
          )}
        />
        {/* {isMenuOpened && <MobileMenu onClose={() => setIsMenuOpened(false)} />} */}
      </WithScrollTop>
    </Router>
  );
};

export default App;
