import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "./../assets/images/main.svg";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
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

          <Link to="/register" className="btn btn-hero">
            login/Register
          </Link>
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
}

export default Landing;
