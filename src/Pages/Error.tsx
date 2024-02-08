import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <p>we can`t seem to find the page you are locking for </p>
        <Link to="/">back to home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
