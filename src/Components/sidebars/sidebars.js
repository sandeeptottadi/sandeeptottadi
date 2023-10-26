import React from "react";
import "./sidebars.css";
import { useEffect } from "react";
import arrow from "../../Images/arrow.svg";

export default function Sidebars(props) {
  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      document.getElementById(`sidebars_bar_${i}`).style.width = "20px";
    }
    document.getElementById(`sidebars_bar_${props.active}`).style.width =
      "35px";
  }, [props]);
  function sidebarsHover(id) {
    for (let i = 1; i < 6; i++) {
      document.getElementById(`sidebars_bar_${i}`).style.width = "20px";
    }
    document.getElementById(`sidebars_bar_${id}`).style.width = "25px";
    document.getElementById(`sidebars_bar_${props.active}`).style.width =
      "35px";
  }

  return (
    <div className="sidebars_container">
      <a href="#1">
        <div
          title="Home"
          id="sidebars_bar_1"
          onMouseOver={() => sidebarsHover("1")}
          className="sidebars_bar"
        ></div>
      </a>
      <a href="#2">
        <div
          title="Work Experience"
          id="sidebars_bar_2"
          onMouseOver={() => sidebarsHover("2")}
          className="sidebars_bar active"
        ></div>
      </a>
      <a href="#3">
        <div
          title="Personal Projects"
          id="sidebars_bar_3"
          onMouseOver={() => sidebarsHover("3")}
          className="sidebars_bar"
        ></div>
      </a>
      <a href="#4">
        <div
          title="About Me"
          id="sidebars_bar_4"
          onMouseOver={() => sidebarsHover("4")}
          className="sidebars_bar"
        ></div>
      </a>
      <a href="#5">
        <div
          title="Contact Me"
          id="sidebars_bar_5"
          onMouseOver={() => sidebarsHover("5")}
          className="sidebars_bar"
        ></div>
      </a>

      {props.active === "5" ? (
        <div title="Move Up" className="arrow">
          <a href={`#${parseInt(props.active) - 1}`}>
            <img alt="Up" className="reverse_arrow" src={arrow} />
          </a>
        </div>
      ) : (
        <div title="Move Down" className="arrow">
          <a href={`#${parseInt(props.active) + 1}`}>
            <img alt="Down" src={arrow} />
          </a>
        </div>
      )}
    </div>
  );
}
