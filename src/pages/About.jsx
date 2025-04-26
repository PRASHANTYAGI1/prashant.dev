import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const videoRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const skillImages = [
    { src: "html2.png", alt: "HTML" },
    { src: "css.png", alt: "CSS" },
    { src: "js.png", alt: "JavaScript" },
    { src: "react.png", alt: "React" },
    { src: "python.png", alt: "Python" },
    { src: "ccpp.png", alt: "C++" },
    { src: "ml.png", alt: "Machine Learning" },
  ];

  const rows = [
    skillImages.slice(0, 3),
    skillImages.slice(3, 5),
    skillImages.slice(5, 7),
  ];

  return (
    <section className="relative w-full min-h-screen -mt-20 overflow-hidden text-white">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        onEnded={handleVideoEnd}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="video2.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-between gap-12 px-6 py-20 mx-auto max-w-7xl md:flex-row md:py-32">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center md:w-1/2 md:text-left"
        >
          {/* About Me Heading with Shine */}
          <motion.h1
            className="relative mb-6 text-3xl font-bold sm:text-4xl md:text-5xl text-shadow-md bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] bg-clip-text text-transparent backdrop-blur-md rounded-lg overflow-hidden"
            whileHover={{ backgroundPosition: "200% center" }}
            style={{
              backgroundSize: "200% auto",
              backgroundImage: "linear-gradient(90deg, #8EC5FC 0%, #E0C3FC 50%, #8EC5FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </motion.h1>

          <p className="text-base leading-relaxed sm:text-lg md:text-xl text-shadow-md">
            I'm Prashant Tyagi, a software developer skilled in HTML, CSS,
            JavaScript, React.js, C++, C, and Python. I build web apps, create
            machine learning models, and apply UI/UX design principles. I love
            learning new tech and solving real-world problems!
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col items-center w-full md:w-1/2"
        >
          {/* Tech Stack Heading with Mouse Tilt and Shine */}
          <motion.h2
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
              rotateX: rotate.y,
              rotateY: -rotate.x,
              transition: { type: "spring", stiffness: 120, damping: 10 },
            }}
            className="relative p-3 mb-8 text-2xl font-semibold rounded-lg sm:text-3xl bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] bg-clip-text text-transparent backdrop-blur-md text-shadow-md overflow-hidden"
            style={{
              backgroundSize: "200% auto",
              backgroundImage: "linear-gradient(90deg, #8EC5FC 0%, #E0C3FC 50%, #8EC5FC 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Tech stack
          </motion.h2>

          {/* Skills Images with Floating */}
          <div className="flex flex-col items-center">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`flex flex-wrap justify-center gap-6 mb-6 ${
                  rowIndex === 1 ? "px-6" : ""
                }`}
              >
                {row.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300, damping: 15 },
                    }}
                    animate={{
                      y: ["0%", "-10%", "0%"], // Floating effect
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  >
                    <motion.img
                      src={skill.src}
                      alt={skill.alt}
                      className="object-contain w-full h-full cursor-pointer"
                      whileHover={{
                        x: [0, 5, -5, 0],
                        y: [0, -5, 5, 0],
                        transition: {
                          duration: 0.8,
                          ease: "easeInOut",
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
