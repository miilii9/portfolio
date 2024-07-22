import React from "react";
import Image from "next/image";
export default function TalentChips() {
  const talents = [
    {
      title: "React",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "Next",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Typescript",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      title: "Javascript",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      title: "# C",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    },
    {
      title: "Net core.",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    },
    {
      title: "MySql",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      title: "Tailwind",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },

    {
      title: "Material UI",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    },

    {
      title: "Bootstrap",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    },
    {
      title: "HTML",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      title: "Babel",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg",
    },
    {
      title: "Webpack",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
    },

    {
      title: "Redux",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    {
      title: "Git",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      title: "Github",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      title: "NPM",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
    },

    {
      title: "VsCode",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    {
      title: "Figma",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
    {
      title: "Adobe XD",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-original.svg",
    },
    {
      title: "Notion",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
    },
    {
      title: "Slack",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
    },
    {
      title: "trello",
      Image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg",
    },
  ];

  return (
    <div className='flex gap-3 flex-wrap'>
      {talents.map((talent) => (
        <div
          className='flex rounded-full items-center bg-dark w-fit p-1'
          key={talent.title}>
          <div className='p-1 bg-light rounded-full'>
            <Image
              src={talent.Image}
              width={20}
              height={20}
              alt={Image.title}
            />
          </div>
          <span className='mx-2 text-light'>{talent.title}</span>
        </div>
      ))}
    </div>
  );
}
