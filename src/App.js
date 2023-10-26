import "./App.css";
import Home from "./Components/Home/Home";
import Projects from "./Components/Project/Projects";
import About from "./Components/About/about_me";
import { useEffect } from "react";
import profile_icon from "./Images/profile_icon.png";
import Sidebars from "./Components/sidebars/sidebars";
import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import twitter from "./Images/twitter.svg";
import linkedin from "./Images/linkedin.svg";
import Sidebar from "./Components/Sidebar/Sidebar";
import Work from "./Components/Work/Work";

function App() {
  const [activePage, setActivePage] = useState("1");
  useEffect(() => {
    function createBubble(id) {
      const bubble = document.createElement("div");
      bubble.id = `bubble-${id}`;

      bubble.className = "bubble";

      const size = Math.random() * 5 + 1;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.backgroundColor = "rgb(255, 255, 255)";

      const xPos = Math.random() * (window.innerWidth - size);
      const yPos = Math.random() * (window.innerHeight - size);
      bubble.style.left = `${xPos}px`;
      bubble.style.top = `${yPos}px`;

      const animationDuration = Math.random() * 3 + 1; // Random duration between 1 and 4 seconds
      bubble.style.animation = `float ${animationDuration}s infinite ease-in-out`;

      document.getElementById("bubble-container").appendChild(bubble);
    }

    for (let i = 0; i < 30; i++) {
      createBubble(i);
    }
  }, []);

  useEffect(() => {
    let icon_1 = document.getElementById("icon_1");
    icon_1.addEventListener("mousemove", (e) => {
      let icon_1_x = e.offsetX;
      let icon_1_y = e.offsetY;
      let icon_1_width = icon_1.clientWidth;
      let icon_1_height = icon_1.clientHeight;
      let icon_1_moveX = icon_1_x / 1.2 - icon_1_width / 1.2;
      let icon_1_moveY = icon_1_y / 1.2 - icon_1_height / 1.2;
      icon_1.style.transform = `translateX(${icon_1_moveX}px) translateY(${icon_1_moveY}px)`;
    });
    icon_1.addEventListener("mouseout", () => {
      icon_1.style.transform = "";
    });

    let icon_2 = document.getElementById("icon_2");
    icon_2.addEventListener("mousemove", (e) => {
      let icon_2_x = e.offsetX;
      let icon_2_y = e.offsetY;
      let icon_2_width = icon_2.clientWidth;
      let icon_2_height = icon_2.clientHeight;
      let icon_2_moveX = icon_2_x / 1.9 - icon_2_width / 1.9;
      let icon_2_moveY = icon_2_y / 1.9 - icon_2_height / 1.9;
      icon_2.style.transform = `translateX(${icon_2_moveX}px) translateY(${icon_2_moveY}px)`;
    });
    icon_2.addEventListener("mouseout", () => {
      icon_2.style.transform = "";
    });

    //bubbles
    setInterval(() => {
      for (let i = 0; i < 30; i++) {
        const moveX = Math.random() * 20 + 10;
        const moveY = Math.random() * 20 + 10;
        const size = Math.random() * 4 + 2;
        document.getElementById(`bubble-${i}`).style.width = `${size}px`;
        document.getElementById(`bubble-${i}`).style.height = `${size}px`;
        document.getElementById(
          `bubble-${i}`
        ).style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
      }
    }, 4000);
  });

  function toogleMenubar() {
    if (
      document.getElementById("sidebar-container").style.display === "none" ||
      document.getElementById("sidebar-container").style.display === ""
    ) {
      document.getElementById("sidebar-container").style.display = "flex";
      document
        .getElementById("sidebar-container")
        .classList.add("sidebar-open");
      document
        .getElementById("sidebar-overlay")
        .classList.add("sidebar-overlay-open");
      document.getElementById("sidebar-overlay").style.display = "block";
    } else {
      document
        .getElementById("sidebar-container")
        .classList.remove("sidebar-open");
      document.getElementById("sidebar-container").style.display = "none";
      document.getElementById("sidebar-overlay").style.display = "none";
      document
        .getElementById("sidebar-overlay")
        .classList.add("sidebar-overlay-open");
    }
    document.getElementById("menu_bar-1").classList.toggle("bar-1-open");
    document.getElementById("menu_bar-2").classList.toggle("bar-2-open");
    document.getElementById("menu_bar-3").classList.toggle("bar-3-open");
  }

  return (
    <div className="App">
      <div
        onClick={() => toogleMenubar()}
        id="sidebar-overlay"
        className="sidebar-overlay"
      ></div>
      <div className="App-header">
        <Sidebars active={activePage} />
        <Sidebar />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            alt="Sandeep Tottadi"
            loading="lazy"
            src={profile_icon}
            className="profile-pic"
          />
          <div className="title">Sandeep Tottadi</div>
        </div>
        <div className="links">
          <div title="Twitter">
            <img
              loading="lazy"
              alt="Twitter logo"
              id="icon_1"
              className="profile-logos"
              src={twitter}
            ></img>
          </div>
          {/* <div title="Github">
            <img alt="Github logo" id="icon_2" className="profile-logos" src={github}></img>
          </div> */}
          <div
            title="LinkedIn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/sandeeptottadi/")
            }
          >
            <img
              alt="Linkedin logo"
              id="icon_2"
              className="profile-logos"
              src={linkedin}
            ></img>
          </div>
          <div className="menubars" onClick={() => toogleMenubar()}>
            <div id="menu_bar-1" className="menubar bar-1"></div>
            <div id="menu_bar-2" className="menubar bar-2"></div>
            <div id="menu_bar-3" className="menubar bar-3"></div>
          </div>
        </div>
        <div className="menu-bars"></div>
      </div>
      <div className="header">
        <div id="bubble-container"></div>
        <div className="circle">
          <div className="circles">
            <div className="circle-1"></div>
            <div className="circle-2"></div>
            <div className="circle-3"></div>
            <div className="circle-4"></div>
            <div className="circle-5"></div>
            <div className="circle-6"></div>
          </div>
        </div>
      </div>
      <section id="1">
        <Home changeActivePage={() => setActivePage("1")} />
      </section>
      <section id="2">
        <Work changeActivePage={() => setActivePage("2")} />
      </section>
      <section id="3">
        <Projects changeActivePage={() => setActivePage("3")} />
      </section>
      <section id="4">
        <About changeActivePage={() => setActivePage("4")} />
      </section>
      <section id="5">
        <Footer changeActivePage={() => setActivePage("5")} />
      </section>
    </div>
  );
}

export default App;
