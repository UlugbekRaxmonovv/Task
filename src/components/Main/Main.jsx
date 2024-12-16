import React from 'react';
import homeImage from '../../assets/images/home.png'; 
import loginImage from '../../assets/images/login1.jpg';
import '../Main/Main.css'
const Main = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="light-section">
            <div className="light-content"  >
              <div className="heading1">
                <h1>Light, Fast & Powerful</h1>
              </div>
              <div className="par1">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
                  Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>
                  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                </p>
              </div>
              
              <div className="title">
                <div className="title_par" >
                  <img src={homeImage} alt="Home Icon" />
                  <div className="headingh2">
                    <h1>Title Goes Here</h1>
                  </div>
                  <div className="par">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </div>
                </div>
                
                <div className="title_par">
                  <img src={homeImage} alt="Home Icon" />
                  <div className="headingh2">
                    <h1>Title Goes Here</h1>
                  </div>
                  <div className="par">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div  className="light-content" >
              <img src={loginImage} alt="Login Illustration" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
