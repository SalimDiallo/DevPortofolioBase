import React, { useEffect } from "react";
import Blog from "../Components/Blog";

import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="blogs">
      <div
        className="top"
        data-aos="zoom-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="2000"
      >
        <h1 className="title">Our Blogs</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          nobis id consequatur ratione quasi odio, assumenda dolorum impedit
          vero, quis perspiciatis quidem repudiandae.
        </p>
      </div>
      <div className="bloc">
        <Blog img="b.png" />
        <Blog img="c.jpg" />
        <Blog img="e.jpg" />
      </div>
    </div>
  );
};

export default Blogs;
