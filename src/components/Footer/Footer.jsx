import React, { useState } from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'
import { RiFacebookFill } from 'react-icons/ri'
import { FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoInstagram } from 'react-icons/io'
import BackToTop from '../BackToTop/BackToTop'
import { Button, Stack } from 'react-bootstrap'
import 'aos/dist/aos.css';
const Footer = () => {
  const icons = [
    <RiFacebookFill className="icon" />,
    <FaLinkedinIn className="icon" />,
    <FaTwitter className="icon" />,
    <FaYoutube className="icon" />,
    <IoLogoInstagram className="icon" />,
  ];


  return (
    <>
    <section id='contact'>
      <div className="footer_all">
      <div className="container">
            <div className="footer">
            <div className="footer-content" >
                   <p>©2023 Yourcompany</p>
                </div>
                <div className="footer-content" ata-aos="fade-down">
                   <h1>Landing</h1>
                </div>
                <div className="footer-content" >
                  <Stack direction="horizontal" gap={2}>
                 <Button className='button' as="a" variant="primary">  Purchase now</Button>
                </Stack>
                </div>
            </div>
            <div className="footer-bottom">
    <div className="footer-bottom_link">
          <ul  className="footer-bottom_uls">
          <li>
           <a href="#">Home</a>
            </li>
            <li>
             <a href="#about">About</a>
            </li>
            <li>
             <a href="#contact">Contact</a>
            </li>
          </ul>

         <div className="footer-bottom_icons" style={{ display: "flex", gap: "20px" }}>
      {icons.map((icon, index) => (
        <div
          key={index}
        
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color:  "#B0B8BC" , 
            transition: "color 0.3s ease",
          }}
        >
          {icon}
        </div>
      ))}
    </div>
    </div>
            </div>
            <BackToTop/>
        </div>
      </div>
     
    </section>

    
    </>
  )
}

export default Footer