// src/utils/skills.ts
import type { IconType } from 'react-icons'
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiFlutter,
  SiAngular,
  SiTypescript,
  SiMysql,
  SiCplusplus,
} from 'react-icons/si'

import { FaJava } from "react-icons/fa";

export interface Skill {
  id: string
  name: string
  Icon: IconType
}

export const skills: Skill[] = [
  { id: 'javascript', name: 'JavaScript', Icon: SiJavascript },
  { id: 'html',       name: 'HTML',          Icon: SiHtml5 },
  { id: 'php',        name: 'PHP',           Icon: SiPhp },
  { id: 'python',     name: 'Python',        Icon: SiPython },
  { id: 'java',       name: 'Java',          Icon: FaJava },
  { id: 'nodejs',     name: 'Node.js',       Icon: SiNodedotjs },
  { id: 'express',    name: 'Express.js',    Icon: SiExpress },
  { id: 'react',      name: 'React',         Icon: SiReact },
  { id: 'flutter',    name: 'Flutter',       Icon: SiFlutter },
  { id: 'angular',    name: 'Angular',       Icon: SiAngular },
  { id: 'typescript', name: 'TypeScript',    Icon: SiTypescript },
  { id: 'sql',        name: 'SQL',           Icon: SiMysql },
  { id: 'cplusplus',  name: 'C++',           Icon: SiCplusplus },
]
