import "./Sidebar.scss"
import fbpic from './../../assets/imgs/fbpic.png'

export default function Sidebar(props) {
  return (
    <div class="sidebar">
      <img src={fbpic} alt="" />
      <h2>Stana Andrei</h2>
      <a href="/me/">Home</a>
      <a href="/me/resume">Resume</a>
      <a href="/me/experience">Experience</a>
      <a href="/me/projects">Projects</a>
      <a href="/me/caa">Contests&Awards</a>
      <a href="/me/links">Online Presence</a>
    </div>
  );
}