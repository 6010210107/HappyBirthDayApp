import React from 'react'
import './footer.css'
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
    React.useEffect(() => {
        Aos.init({ duration: 4000 });
      }, []);
    return (
        <div className="footer-container screen-height-50">
            <h1 data-aos="fade">Hope you always be happy.</h1>
            <h1 data-aos="fade">From</h1>
            <h1 data-aos="fade">Wingkung</h1>
        </div>
    )
}

export default Footer
