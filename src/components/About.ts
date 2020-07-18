import m from "mithril";
import Nav from "./Nav";

const App: m.Component = {
  view: () =>
    m(
      ".page",
      m(Nav),
      m("h1", "About the Mithril JS"),
      m("p", "This is the about page.")
    )
};

export default App;
