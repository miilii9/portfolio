import React from "react";
import Link from "next/link";
import MoreButtons from "@/components/ui/buttons/MoreButtons";
export default function ExperiencesList() {
  const experiences = [
    {
      company: "شرکت معماران داده",
      position: "برنامه نویس فرانت اند",
      link: "",
      date: "1401 تیر",
    },

    {
      company: "شرکت pjeco",
      position:
        "توسعه دهنده وب سایت های  مختلف برای مشتریان با استفاده از ریکت، نکست، تیلویند، متریال یو آی   ",
      link: "",
      date: "1402 اردیبهشت",
    },
    {
      company: "شرکت اوتاپ",
      position:
        "توسعه دهنده سمت فرانت با استک ریکت، نکست، تیلویند، متریال یو آی، بوت استرپ، جی کوئری",
      link: "https://evtap.ir/",
      date: "1402 بهمن",
    },
  ];
  return (
    <ol className='relative border-s border-gray-200 dark:border-gray-700 py-5'>
      {experiences.map((experience, index) => (
        <li key={index} className='ms-4 mb-12'>
          <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 bg-primary'></div>
          <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
            {experience.date}
          </time>
          <h3 className='text-lg text-gray-900 dark:text-white'>
            {experience.company}
          </h3>
          <p className='mb-2 text-base font-normal text-gray-500 dark:text-gray-400'>
            {experience.position}
          </p>
          <Link href={experience.link !== "" ? experience.link : "#"}>
            <MoreButtons />
          </Link>
        </li>
      ))}
    </ol>
  );
}
