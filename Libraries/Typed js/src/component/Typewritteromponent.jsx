// TypewriterComponent.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypewriterComponent = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Hello, world!',
        'This is a typewriter effect.',
        'Using Typed.js in React.'
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="typewriter-wrapper">
      <span ref={el} />
    </div>
  );
};

export default TypewriterComponent;
