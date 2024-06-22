import { createEffect, createSignal } from "solid-js";
import "./Sidebar.scss"
import fbpic from './../../assets/imgs/fbpic.png'

export default function Sidebar(props) {
  return (
    <div class="sidebar">
      <img src={fbpic} alt="" />
      <a  href="/me/">Home</a>
      <a  href="/me/resume">Resume</a>
      <a  href="/me/contact">Contact</a>
    </div>
  );
}