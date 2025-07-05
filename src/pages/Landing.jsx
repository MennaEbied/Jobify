import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>Tracking </span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
            laborum placeat voluptas alias impedit quam, ullam maiores totam
            beatae praesentium necessitatibus? Aut tempora quas sint maxime?
            Quidem, ipsam sit.
          </p>
          <Link to={"/register"} className="btn register-link">
            Register
          </Link>
          <Link to={"/login"} className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
