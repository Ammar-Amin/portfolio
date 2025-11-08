import React from "react";
import { basic, clones, games, mega } from "../../constants";
import Card from "./card";

const Projects = () => {
  const sections = [
    { title: "Projects", data: mega },
    { title: "Clones", data: clones },
    { title: "Games", data: games },
    { title: "Assignments", data: basic },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen pt-3 pb-10 md:pb-16 lg:pb-20">
      {sections.map((section) => (
        <div key={section.title} className="mb-10 px-4 md:px-10">
          {/* <h2 className="text-3xl text-center font-semibold mb-6">
            {section.title}
          </h2> */}
          <ul className="flex flex-wrap gap-6 justify-center">
            {section.data.map((item) => (
              <Card key={item.title} data={item} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;
