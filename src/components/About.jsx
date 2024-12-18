// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Welcome to IHOP, where every cup tells a story.</p>
            </div>
            <p className="mid">
            
            At IHOP, we are more than just a place to grab your morning coffee or enjoy a delicious meal; 
            We are a community hub, a heaven for coffee lovers, food enthusiasts, and anyone seeking a warm and inviting atmosphere.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
              <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="/about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;