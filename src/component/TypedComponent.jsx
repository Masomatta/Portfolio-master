import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "A Dedicated Learner",
        "A Volunteer Mentor ",
        "A Front-end Developer",
        "A Future Leader",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedElement}></span>;
};

export default TypedComponent;
