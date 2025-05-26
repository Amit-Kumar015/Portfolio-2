"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import CppIcon from "@/assets/icons/c++.svg";
import ExpressIcon from "@/assets/icons/express-js.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import MongoDbIcon from "@/assets/icons/mongodb.svg";
import MysqlIcon from "@/assets/icons/mysql.svg";
import NodejsIcon from '@/assets/icons/nodejs.svg';
import PythonIcon from '@/assets/icons/python.svg';
import tailwindIcon from '@/assets/icons/tailwindcss.svg';
import TypescriptIcon from '@/assets/icons/typescript.svg';
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavascriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Nextjs",
    iconType: NextIcon,
  },
  {
    title: "C++",
    iconType: CppIcon,
  },
  {
    title: "ExpressJs",
    iconType: ExpressIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "MySQL",
    iconType: MysqlIcon,
  },
  {
    title: "NodeJs",
    iconType: NodejsIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "Tailwindcss",
    iconType: tailwindIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
];
const hobbies = [
  { title: "Cricket", emoji: "🏏", top: "5%", left: "5%" },
  { title: "Movies", emoji: "🎬", top: "50%", left: "5%" },
  { title: "Music", emoji: "🎵", top: "10%", left: "35%" },
  { title: "Gaming", emoji: "🎮", top: "35%", left: "40%" },
  { title: "Bike Ride", emoji: "🚴", top: "70%", left: "45%" },
  { title: "Cooking", emoji: "👨‍🍳", top: "5%", left: "65%" },
  { title: "Badminton", emoji: "🏸", top: "45%", left: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my experiences."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book cover" />
              </div>
            </Card> */}
            <Card className="h-[320px] md:col-span-5 lg:col-span-3">
              <CardHeader
                className=""
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemWrapperClassName=" animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    className="inline-flex absolute items-center gap-2 px-6 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full py-1.5"
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute size-14 rounded-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-300 to-sky-400 -z-10"></div>
                <Image className="size-14" src={smileEmoji} alt="smile" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};