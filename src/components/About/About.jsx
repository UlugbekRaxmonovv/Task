import React from "react";
import peopleImage from "../../assets/images/people.png";
import peopleImage1 from "../../assets/images/people1.png";
import peopleImage2 from "../../assets/images/people2.png";
import "../About/About.css";
import Banner from "../Banner/Banner";

const About = () => {
  const datas = [
    {
      id: "1",
      title: "Light, Fast & Powerful",
      description: [
        {
          id: "1",
          par: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        },
        {
          id: "2",
          par: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ],
      img: peopleImage,
    },
    {
      id: "2",
      title: "Secure and Reliable",
      description: [
        {
          id: "1",
          par: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        },
        {
          id: "2",
          par: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ],
      img: peopleImage1,
    },
    {
      id: "3",
      title: "Innovative Solutions",
      description: [
        {
          id: "1",
          par: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa",
        },
        {
          id: "2",
          par: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        },
      ],
      img: peopleImage2,
      btn: "Purchase Now",
    },
  ];

  return (
    <>
      <section>
        <div className="container">
          {datas.map((banner, index) => (
            <Banner
              key={index}
              title={banner.title}
              subtitle={banner.description} // description yuborilmoqda
              Image={banner.img}
              btn={banner.btn}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
