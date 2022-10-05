import "./App.css";
import linkedin_logo from "./linkedin.png";
import github_logo from "./github.png";
import Container from "./Container/container";
import Projects from "./Container/Projects";
import About_me from "./Container/about_me";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">Sandeep Tottadi</div>
        <div className="links">
          <img className="profile-logos" src={github_logo}></img>
          <img className="profile-logos" src={linkedin_logo}></img>
        </div>
        <div className="menu-bars"></div>
      </div>
      <div className="header">
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
      <div className="cont">
        <Container className="sec" />
        <Projects className="sec" />
        <About_me className="sec" />
      </div>
    </div>
  );
}

export default App;
