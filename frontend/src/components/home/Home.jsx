import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";
import "./home.css";
import profileImg from "../../assets/profile-img111.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import CV from "../../assets/Thushara-Thilan-Resume.pdf";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>THUSHARA</span>
            <div>
              Thilan
            </div>
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b>Software Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                {/* 12 <b>+</b> */}
              </span>

              <span className="text-sm text-cs">
                <span>Full Stack Developer</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">
                {/* 330 */}
              </span>

              <span className="text-sm text-cs">
                <span>Back - End Developer</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            " I'm a curious and dedicated developer who enjoys turning ideas into reality through code. I value clean design, meaningful work, and continuous growth...."
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaTwitter />
            </a>

            <a href="" className="home__social-link">
              <FaDribbble />
            </a>

            <a href="" className="home__social-link">
              <FaBehance />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
