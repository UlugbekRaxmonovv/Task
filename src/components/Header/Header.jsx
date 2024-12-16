import React, { useState } from 'react';
import main from '../../assets/images/main.png';
import '../Header/Header.css'
import { GrMenu } from 'react-icons/gr';
import { VscChromeClose } from 'react-icons/vsc';
import { Button, Stack } from 'react-bootstrap';
import 'aos/dist/aos.css';
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [fix, setFix] = useState(false);
  document.body.style.overflow = menu ? 'hidden' : 'auto';

  function setFixd() {
    if (window.scrollY >= 1) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener('scroll', setFixd);
  return (
    <> 
        <div className="main">
     <header className={`header ${fix ? "fix" : ""}`}>
        {/* Header */}
          <div className="container">
            <nav className="nav-bar">
                <h1 className="nav-center-texts">Landing</h1>
              <ul className={`nav-list ${menu ? "show" : "close"}` } >
                <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                <li className="nav-item"><a href= "#about" className="nav-link" onClick={() =>setMenu(!menu)}>About</a></li>
                <li className="nav-item"><a href="#contact" className="nav-link" onClick={() =>setMenu(!menu)}>Contact</a></li>
                
              </ul>
              <div className="nav-center">
                <span className="nav-center-text">Landing</span>
              </div>
             
              <div className="nav-button-primary">
                <button>Buy Now</button>
                
              </div>
   {
    menu ? 
    <VscChromeClose className='menu' onClick={() =>setMenu(!menu)} />
    :
    <GrMenu className='menu'  onClick={() =>setMenu(!menu)} />

   }

            </nav>
          </div>
        </header>

        {/* Main Section */}
        <section>
          <div className="container">
            <div className="main-content">
              <div  className="content-wrapper">
                <h1 className="headline">Introduce Your Product Quickly & Effectively</h1>
                <p className="heading">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus  nascetur ridiculus mus.
                </p>
                <p className='parp1'>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div className="btn-group">

                  <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary" className="btn1" >
  Purchase UI Kit
  </Button>
  <Button   className="btn1" as="a" variant="success">
  Learn More
  </Button>
</Stack>
                </div>
              </div>
              <div  className="content-wrapper">
                <img src={main} alt="Main product showcase" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
