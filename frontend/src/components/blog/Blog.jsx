import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.png";
import shapeOne from "../../assets/shape-1.png";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">PROJECTS</h2>
      <p className="section__subtitle">
        My <span>Finished projects</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">April 21, 2025</span>
          <h3 className="blog__title">AI-Powered News Analyzer</h3>
          <p className="blog__description">
            An AI-powered tool developed to verify the authenticity of any news input by the user. This analyzer checks whether the news is true or false and provides detailed insights related to the topic. Designed to help users stay informed and combat misinformation.
          </p>
          <hr />
          <hr />

          <p className="blog__tech">
            Built using React and Tailwind CSS for the frontend, Node.js and Express.js for the backend, with AI integration for content analysis and verification.
          </p>

          <hr />
          <a href="https://github.com/LUC1f3R-0/MERN-AI-Powered-NEWS-Analyzer" className="link" target="_blank" rel="noopener noreferrer">
            Read more
            <FaArrowRight className="link__icon" />
          </a>


          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">May 2, 2025</span>
          <h3 className="blog__title">AI-Powered Recipe Generator</h3>
          <p className="blog__description">
            An AI-based recipe generator built with React. Users can input the ingredients they have, and the system suggests a recipe that uses only those ingredients. Ideal for reducing food waste and making cooking more efficient and creative.
          </p>
          <hr />
          <hr />

          <p className="blog__tech">
            Built using React and Tailwind CSS for the frontend, Node.js for the backend, and integrated with an AI API to generate intelligent recipe suggestions based on user input.
          </p>

          <hr />
          <a href="https://github.com/LUC1f3R-0/AI-Powered-Recipe-Generator" className="link" target="_blank" rel="noopener noreferrer">
            Read more
            <FaArrowRight className="link__icon" />
          </a>



          <img src={Blog2} alt="" className="blog__img" />
        </div>
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">OCTOBER 13, 2023</span>
          <h3 className="blog__title">Secrets to Create Bettter Interfaces</h3>
          <p className="blog__description">
            A visually rich online store for wall art lovers, offering a seamless user experience for browsing, filtering, and purchasing artwork.
            Designed to inspire creativity and make art accessible, the platform supports secure payments and personalized recommendations.
          </p>

          <a href="https://github.com/LUC1F3R-99/wall_art_Project" className="link" target="_blank" rel="noopener noreferrer">
            Read more
            <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Blog</span>
      </div>
    </section>
  );
};

export default Blog;
