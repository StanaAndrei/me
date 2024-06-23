import { Router, Route } from "@solidjs/router";
import "./App.scss"
import Home from "./Pages/Home/Home";
import Sidebar from './Components/Sidebar/Sidebar';
import Resume from './Pages/Resume/Resume';
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import Links from "./Pages/Links/Links";
import Caa from "./Pages/Caa/Caa";

function App() {
  return <div>
    <Sidebar />
    <div className="content">
    <Router base="/me">
      <Route path="/" component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/links" component={Links} />
      <Route path="/caa" component={Caa} />
    </Router>
    </div>
  </div>
}

export default App
