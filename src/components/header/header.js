import React from "react";
import "./header.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  React.useEffect(() => {
    setTimeout(() => {
      Aos.init({ duration: 1000 });
    }, 1000);
  }, []);

  return (
    <div className="container h-screen">
      <p data-aos="fade" data-aos-delay="0" className="header-content">
        Happy Birthday
      </p>
      <p data-aos="fade" data-aos-delay="1000" className="header-content">
        To
      </p>
      <p data-aos="fade" data-aos-delay="2000" className="header-content">
        You
      </p>
    </div>
  );
};

export default Header;
