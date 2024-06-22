import { Router, Route } from "@solidjs/router";
import "./App.scss"
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Sidebar from './Components/Sidebar/Sidebar';
import Resume from './Pages/Resume/Resume';

function App() {
  return <div>
    <Sidebar />
    <div className="content">
    <Router base="/me">

      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
    </Router>
    </div>
  </div>
}

export default App
