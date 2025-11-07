import React from "react";
import { useDark } from "../../context";

const Card = ({ data }) => {
  const [dark] = useDark();
  return (
    <li
      className={
        "relative flex w-[300px] lg:w-[350px] flex-col rounded-xl bg-clip-border overflow-hidden shadow-lg " +
        (dark ? "bg-stone-950 text-slate-300" : "bg-slate-100 text-gray-900")
      }
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={data.img}
          alt={data.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
      </div>
      <div className="px-5 pt-5 mb-3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-500 transition-colors duration-300">
            {data.title}
          </h3>
          <p className="text-sm opacity-80 mb-3">{data.desc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 text-xs font-medium rounded-full 
                  ${
                    dark
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : "bg-gradient-to-r from-indigo-400 to-purple-500 text-white"
                  }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="float-end p-6 pt-1 grid grid-cols-2 gap-5">
        <a
          href={data.live}
          className="text-center py-2 text-white bg-lime-600 rounded-md hover:opacity-90   "
        >
          <i className="ri-send-plane-fill mr-1"></i> Live
        </a>
        <a
          href={data.github}
          className="text-center py-2 text-white bg-teal-700 rounded-md hover:opacity-90  "
        >
          <i className="ri-github-fill mr-1 text-xl"></i> GitHub
        </a>
      </div>
    </li>
  );
};

export default Card;
