import { useState } from "react";
import { myProjects } from "../constance";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const currentProject = myProjects[selectedProject];
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedProject((prev) => {
      if (direction == "previous") {
        return prev == 0 ? projectCount - 1 : prev - 1;
      } else {
        return prev == projectCount - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <section id="Works" className="c-space my-20">
      <p className="head-text">My Work</p>

      <div>
        <div className="flex flex-col gap-2 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0 ">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="  object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blue-3xl w-fit rounded-lg "
            style={currentProject.logoStyle}
          >
            <img src={currentProject.logo} alt="logo1" className="w-10 h-10" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5 z-10">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, i) => (
                <div key={i} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check it out!</p>
              <img src="assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-7 z-10">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="assets/left-arrow.png"
                alt="left-arrow"
                className="w-4 h-4"
              />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="assets/right-arrow.png"
                alt="right-arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
