import Carousel from "react-bootstrap/Carousel";
import mac_image from "../../Images/macbook.png";
import Pathfinding_Visualizer from "../../Videos/Pathfinding-Visualizer.mp4";
import Sorting_Visualizer from "../../Videos/Sorting-Visualizer.mp4";
import "./projectCaurosel.css";
import { useEffect } from "react";
import globe from "../../Images/globe.svg";

function UncontrolledExample() {
  function carouselSlided(e) {
    if (e === 1) {
      document.getElementById("video-0").pause();
      document.getElementById("video-1").play();
    } else {
      document.getElementById("video-1").pause();
      document.getElementById("video-0").play();
    }
  }
  useEffect(() => {
    let btn_1 = document.getElementById("show-more-btn-1");
    btn_1.addEventListener("mousemove", (e) => {
      let x_1 = e.offsetX;
      let y_1 = e.offsetY;
      let btnWidth_1 = btn.clientWidth;
      let btnHeight_1 = btn.clientHeight;
      let moveX_1 = x_1 / 2 - btnWidth_1 / 3;
      let moveY_1 = y_1 / 2 - btnHeight_1 / 3;
      btn_1.style.transform = `translateX(${moveX_1}px) translateY(${moveY_1}px)`;
    });
    btn_1.addEventListener("mouseout", () => {
      btn_1.style.transform = "";
    });

    let btn = document.getElementById("show-more-btn-2");
    btn.addEventListener("mousemove", (e) => {
      let x = e.offsetX;
      let y = e.offsetY;
      let btnWidth = btn.clientWidth;
      let btnHeight = btn.clientHeight;
      let moveX = x / 2 - btnWidth / 3;
      let moveY = y / 2 - btnHeight / 3;
      btn.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "";
    });
  });
  return (
    <Carousel
      style={{
        height: "100%",
        width: "calc(100% - 100px)",
      }}
      className="flex"
      indicators={false}
      prevLabel=""
      nextLabel=""
      pause="hover"
      onSlide={(e) => carouselSlided(e)}
    >
      <Carousel.Item
        interval={20000}
        style={{
          height: "100%",
          width: "90%",
          margin: "auto",
        }}
      >
        <div className="carousel-item-container">
          <div className="flex-col">
            <div className="project-title">
              <div className="project-name">Pathfinding Visualizer</div>
              <div className="about-info">
                Pathfinding Visualizer is a tool to visulaize 4 different
                Pathfinding Algorithms. This includes Dijkstra, A*, BFS and DFS.
              </div>
              <div>
                <div className="line-1"></div>
                <div className="line-2"></div>
              </div>
              <div
                className="about github-project-link"
                onClick={() =>
                  window.open(
                    "http://sandeeptottadi.github.io/Pathfinding-Visualizer"
                  )
                }
              >
                <img id="globe" src={globe} className="globe" />
                website - <span> 2021 fall</span>
              </div>
              <button
                className="project-btn"
                id="show-more-btn-1"
                onClick={() => window.open("http://github.com/sandeeptottadi")}
              >
                Show more
              </button>
              <div className="btn-div-1"></div>
            </div>
          </div>
          <div className="flex">
            <div className="project-img">
              <div className="project-image">
                <video
                  src={Pathfinding_Visualizer}
                  className="p-img"
                  muted
                  autoPlay
                  loop
                  id="video-0"
                ></video>
                <img alt="macbook" className="mac-img" src={mac_image}></img>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item
        interval={20000}
        style={{ width: "90%", height: "100%", margin: "auto" }}
      >
        <div className="carousel-item-container">
          <div className="flex-col">
            <div className="project-title">
              <div className="project-name">Sorting Visualizer</div>
              <div className="about-info">
                Sorting Visualizer is a tool to visulaize 5 different Sorting
                Algorithms. This includes Merge Sort, Quick Sort, Bubble Sort,
                etc.
              </div>
              <div>
                <div className="line-1"></div>
                <div className="line-2"></div>
              </div>
              <div
                className="about github-project-link"
                onClick={() =>
                  window.open(
                    "http://sandeeptottadi.github.io/Sorting-Visualizer"
                  )
                }
              >
                <img src={globe} className="globe" />
                website - <span> 2021 fall</span>
              </div>
              <button
                className="project-btn"
                id="show-more-btn-2"
                onClick={() => window.open("http://github.com/sandeeptottadi")}
              >
                Show more
              </button>
              <div className="btn-div-1"></div>
            </div>
          </div>
          <div className="flex">
            <div className="project-img">
              <div className="project-image">
                <video
                  src={Sorting_Visualizer}
                  className="p-img"
                  muted
                  autoPlay
                  loop
                  id="video-1"
                ></video>
                <img alt="macbook" className="mac-img" src={mac_image}></img>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
