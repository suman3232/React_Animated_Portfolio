import React from "react";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div className="contact-icon"
         data-aos="zoom-in-up"
         data-aos-duration="1000">
          <div href="https://www.google.com" className="items">
            <FaInstagram className="icons" />
          </div>
          <a href="https://www.google.com" className="items">
            <FaFacebook className="icons" />
          </a>
          <a href="https://www.google.com" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="https://www.google.com"className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://www.google.com" className="items">
          <FaGithub className="icons" />
          </a>
          <a href="mailto:sumanpatra3232@gmail.com" className="items">
          <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
