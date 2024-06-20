import { Router, Route } from "@solidjs/router";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

function App() {
  return <Router base="/me">
    <Route path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={null} />
  </Router>
}

export default App
