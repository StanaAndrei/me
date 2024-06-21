import { Router, Route } from "@solidjs/router";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Sidebar from './Components/Sidebar/Sidebar';



function App() {
  return <div>
    <Sidebar />
    <Router base="/me">
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={null} />
    </Router>
  </div>
}

export default App
