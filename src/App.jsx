import { Router, Route } from "@solidjs/router";
import "./App.scss"
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Sidebar from './Components/Sidebar/Sidebar';
import Resume from './Pages/Resume/Resume';
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";

function App() {
  return <div>
    <Sidebar />
    <div className="content">
    <Router base="/me">
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
    </Router>
    </div>
  </div>
}

export default App
