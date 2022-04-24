import React from "react";

const Card = ({ project }) => {
  return (
    <div className="sm:w-full rounded shadow-lg md:flex md:flex-col bg-slate-50 mb-16 sm:p-5 md:p-10 sm:pb-0 md:pb-0">
      <div className="lg:flex gap-5">
        <img
          className="block w-full lg:w-1/2 h-fit"
          src={project.image}
          alt="project"
        />
        <div className="px-6 py-4 lg:pt-0">
          <div className="font-bold text-xl mb-2">{project.title}</div>
          {project.info.map((p, idx) => (
            <p key={idx} className="text-gray-700 text-base mb-4">
              {p}
            </p>
          ))}
          <div>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline mt-2"
            >
              Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block underline mt-2 ml-5"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center flex-wrap">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 sm:text-lg"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
