import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
  FaAws
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "React",
    img: FaReact,
  },
  { 
    title: "Next.js",
     img: TbBrandNextjs 
  },
  {
     title: "PostgreSQL",
     img: SiPostgresql 
    },
  {
     title: "Docker",
     img: FaDocker
    },
  {
     title: "Git", 
     img: FaGit },
  {
     title: "Python",
     img: FaPython },
  {
    title: "AWS" ,
    img : FaAws
  }
];
