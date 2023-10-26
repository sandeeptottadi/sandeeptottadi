import Carousel from "react-bootstrap/Carousel";
import mac_image from "../../Images/macbook.png";
import joby from "../../Videos/Joby.mp4";
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
    let btn = document.getElementById("show-more-btn-1");
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
      style={{ height: "100%", width: "100%" }}
      className="flex"
      indicators={false}
      prevLabel=""
      nextLabel=""
      pause="hover"
      onSlide={(e) => carouselSlided(e)}
    >
      <Carousel.Item interval={20000} style={{ height: "100%", width: "100%" }}>
        <div className="carousel-item-container">
          <div className="flex-col">
            <div className="project-title">
              <div className="project-name">
                Joby<sub>- 2023 May</sub>
              </div>
              <div className="about-info">
                Joby.ai is a website that connects tech professionals with
                hidden job opportunities. It allows users to search for jobs by
                keyword, location, and other criteria.
              </div>
              <div>
                <div className="line-1"></div>
                <div className="line-2"></div>
              </div>
              <div className="about">website | Full Stack | Upwork</div>
              <button
                className="project-btn"
                id="show-more-btn-1"
                onClick={() => window.open("http://joby.ai")}
              >
                <img src={globe} className="globe" />
                Live site
              </button>
              <div className="btn-div-1"></div>
            </div>
          </div>
          <div className="flex">
            <div className="project-img">
              <div className="project-image">
                <video
                  src={joby}
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
    </Carousel>
  );
}

export default UncontrolledExample;
