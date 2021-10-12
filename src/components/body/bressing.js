import React from "react";
import "./content.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Bressing = ({ duration, text, delay, bold = false, large = false }) => {
  React.useEffect(() => {
    Aos.init({ duration: duration });
  }, []);

  return (
    <div className="container">
      <h1
        data-aos="fade-right"
        data-aos-delay={`${delay || "500"}`}
        className={`${bold ? "bold" : "thin"} ${large ? "large" : ""}`}
      >
        {text ? text : "สุขสันต์วันเกิดนุ้งมด"}
      </h1>
    </div>
  );
};

export default Bressing;
