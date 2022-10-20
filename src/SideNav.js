import React from "react";
import "./SideNav.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { openInNewTab } from "./goToSite";

export default class SideNav extends React.Component {
  render() {
    return (
      <div id="side_nav">
        <AiFillGithub
          class="icon"
          onClick={() => openInNewTab("https://github.com/leegunwoo98")}
        />
        <AiFillLinkedin
          class="icon"
          onClick={() =>
            openInNewTab("https://www.linkedin.com/in/gunwoo-lee-ba5921b5/")
          }
        />
      </div>
    );
  }
}
