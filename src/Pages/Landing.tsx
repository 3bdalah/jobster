import Wrapper from "../assets/wrappers/LandingPage";
import logo from "./../assets/images/logo.svg";
import main from "./../assets/images/main.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="logo jobs" aria-label="logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Beard typewriter kombucha vexillologist tote bag, PBR&B synth
            franzen tumeric meditation cronut literally. bodega boys schlitz
            praxis.
          </p>

          <button className="btn btn-hero">login/Register</button>
        </div>
        <img
          src={main}
          alt="job-hunt-img"
          aria-label="picture-header"
          className="main-img  img"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
