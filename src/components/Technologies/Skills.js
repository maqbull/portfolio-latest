import { DiReact,DiJavascript , DiCss3 } from "react-icons/di";
import { SiGit , SiCplusplus , SiAmazonaws } from "react-icons/si";

export const Skills = [
  {
    slug: "react",
    Component: DiReact,
    title: "React",
    Description: () => <>I work on front-end using React.</>,
  },
  {
    slug: "javscript",
    Component: DiJavascript,
    title: "Javascript",
    Description: () => <>I can code in javascript , do basic front-end stuff with it . </>,
  },
  {
    slug: "CSS",
    Component: DiCss3,
    title: "CSS",
    Description: () => <>I do write CSS for my front-end projects.</>,
  },
  {
    slug: "C++",
    Component: SiCplusplus ,
    title: "C++",
    Description: () => <>I can code in C++. But I mainly use it for leetcode question.</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS",
    Description: () => <>I have used AWS for deploying my python twitter-telegram bot.</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Git is a tool that I use every day. I use GitHub for pushing my code.</>,
  },
];
