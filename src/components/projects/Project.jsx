import { ReactComponent as Folder } from "../../images/folder.svg";
import { ReactComponent as Github } from "../../images/github.svg";
import { ReactComponent as Live } from "../../images/live.svg";
import Fade from "react-reveal/Fade";

const Project = ({ repo }) => {
  return (
    <div className="cursor-default p-4 rounded-md border-2 border-slate-50 dark:border-darkBorder hover:border-slate-300 dark:hover:border-darkBorderHover ease-linear duration-75">
      <div className="flex flex-col">
        <span className="text-xs text-title-sm">/ {repo.createdAt}</span>
        <div>
          <div className="flex items-center justify-between h-14">
            <Fade left delay={400}>
              <Folder className="h-7 w-7 fill-slate-900 dark:fill-darkBorderHover" />
            </Fade>
            <Fade right delay={400}>
              <ul className="flex gap-x-2">
                <li>
                  <a
                    className="py-1 px-2"
                    href={repo.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-5 w-5 fill-slate-900 hover:fill-slate-500 dark:fill-darkBorderHover" />
                  </a>
                </li>
                {repo.liveUrl && (
                  <li>
                    <a
                      className="py-1 px-2"
                      href={repo.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Live className="h-5 w-5 fill-slate-900 dark:fill-darkBorderHover" />
                    </a>
                  </li>
                )}
              </ul>
            </Fade>
          </div>
          <h5 className="font-semibold dark:text-darkH">{repo.name}</h5>
          <Fade>
            <p className="font-josefin text-p mt-2 mb-5 dark:text-darkP text-sm sm:text-base">
              {repo.body}
            </p>
          </Fade>
          <Fade bottom cascade duration={1000}>
            <ul className="flex flex-wrap gap-2 w-4/5">
              {repo.languages.map((language, index) => {
                return (
                  <li
                    key={index}
                    className="text-xs py-1 px-2 rounded-md font-bold"
                    style={{ background: language.bg }}
                  >
                    {language.name}
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Project;