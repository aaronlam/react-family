import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import getRouter from "routers/router";
import { Provider } from "react-redux";
import store from "./redux/store";
import { AppContainer } from "react-hot-loader";
import Hello from "components/Hello/Hello";
import App from "components/App/App";

// 7
renderWithHotReload(App);

if (module.hot) {
  module.hot.accept("components/App/App", () => {
    const NextApp = require("components/App/App").default;
    renderWithHotReload(NextApp);
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Router>
          <RootElement />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById("app")
  );
}

// 6
// 初始化
//renderWithHotReload(getRouter());

// 热更新
/*if (module.hot) {
  module.hot.accept("./routers/router", () => {
    const getRouter = require("./routers/router").default;
    renderWithHotReload(getRouter());
  });
}

function renderWithHotReload(rootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>{rootElement}</Provider>
    </AppContainer>,
    document.getElementById("app")
  );
}*/

// 5
/*if (module.hot) {
  module.hot.accept();
}*/

// 4
//ReactDom.render(getRouter(), document.getElementById("app"));

// 3
//ReactDom.render(<Hello />, document.getElementById("app"));

// 1
//document.getElementById("app").innerHTML = "webpack works";

// 2
/*var func = str => {
  document.getElementById("app").innerHTML = str;
};

func("我现在在使用Babel");*/
