import m from "mithril";
import Nav, { Counter, Friends } from "./Nav";

const Home: m.Component = {
  view: () =>
    m(
      ".page",
      m(Nav),
      m(Counter),
      m(Friends),
      m("h1", "Mithril Shop"),
      m("p", "This is the home page.")
    )
};

export default Home;
