import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";
import ScrollTopButton from "../partials/ScrollTopButton";
import { ReactComponent as Github } from "../../images/github.svg";
import { useLocation } from "react-router-dom";

const Id = ({ setIsHome }) => {
  const { route } = useParams();
  const projects = data.repos;
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    setIsHome(false);
    projects.map((project) => {
      if (project.route === route) {
        if (project) {
          setRepo(project);
        } else {
          setRepo(null);
        }
      }
    });
  });

  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <div className="flex items-center justify-center w-full">
      <ScrollTopButton />
      <div className="mt-24 md:w-3/5 max-w-[772px]">
        {repo ? (
          <div>
            <div className="grid place-items-center">
              <div
                className="w-11/12 sm:w-4/5"
                id="landing-section"
                name="landing-section"
              >
                <div className="flex items-center gap-4">
                  <h1 className="text-xl sm:text-3xl font-bold dark:text-darkH">
                    {repo.name}
                  </h1>
                  <a href={repo.repoUrl} target="_blank" rel="noreferrer">
                    <Github className="h-6 w-6 dark:fill-darkH" />
                  </a>{" "}
                </div>

                <p className="my-2 sm:my-5 text-p text-sm sm:text-base dark:text-darkP">
                  {repo.introText}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-12 w-11/12 sm:w-4/5 dark:text-darkP">
                <div>
                  <h5 className="font-semibold dark:text-darkH">Role</h5>
                  <ul className="mt-1">
                    {repo.roles.map((role, index) => {
                      return (
                        <li
                          key={index}
                          className="text-p text-sm sm:text-base dark:text-darkP"
                        >
                          {role.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold dark:text-darkH">
                    Responsibilities
                  </h5>
                  <ul className="mt-1">
                    {repo.responsibilities.map((responsibility, index) => {
                      return (
                        <li
                          key={index}
                          className="text-p text-sm sm:text-base dark:text-darkP"
                        >
                          {responsibility.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold dark:text-darkH">Team</h5>
                  <ul className="mt-1">
                    {repo.teams.map((team, index) => {
                      return (
                        <li
                          key={index}
                          className="text-p text-sm sm:text-base dark:text-darkP"
                        >
                          {team.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            {repo.problem && (
              <div className="grid place-items-center gap-4 mt-12 ">
                <div className="p-5 bg-red-100 rounded-lg w-4/5 dark:bg-darkBorder">
                  <h5 className="font-semibold dark:text-darkH text-center sm:text-left ">
                    Problem
                  </h5>
                  <p className="text-p dark:text-darkP text-sm sm:text-base">
                    {repo.problem}
                  </p>
                </div>
                <div className="p-5 bg-sky-100 rounded-lg w-4/5 dark:bg-darkBorder">
                  <h5 className="font-semibold dark:text-darkH text-center sm:text-left">
                    Answer
                  </h5>
                  <p className="text-p dark:text-darkP text-sm sm:text-base">
                    {repo.solution}
                  </p>
                </div>
              </div>
            )}

            <div className="w-full mt-12">
              <div className="grid place-items-center">
                <h3 className="mb-5 text-xl font-bold dark:text-darkH self-start">
                  Features and Functionalities
                </h3>
                <div className="w-11/12 sm:w-full max-w-[667px]">
                  {repo.features &&
                    repo.features.map((feature, index) => {
                      return (
                        <div
                          className="mb-12 grid place-items-center"
                          key={index}
                        >
                          <img
                            className="rounded-lg shadow-md hover:shadow-lg duration-75 py-5"
                            src={require(`../../images/${route}/${feature.img}`)}
                            alt="prototype"
                          />

                          <p className="mt-2 text-p dark:text-darkP text-sm sm:text-base">
                            {feature.body}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-40 grid place-items-center font-bold dark:text-darkH">
            Loading..
          </div>
        )}
      </div>
    </div>
  );
};

export default Id;
