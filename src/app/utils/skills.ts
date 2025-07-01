// src/utils/skills.ts
import type { IconType } from 'react-icons'
import {
  SiPython,
  SiJavascript,
  SiPhp,
  SiSwift,
  SiTypescript,
  SiKotlin,
  SiReact,
} from 'react-icons/si'

export interface Skill {
  id: string
  name: string
  Icon: IconType
}

export const skills: Skill[] = [
  { id: 'python',     name: 'Python',     Icon: SiPython },
  { id: 'javascript', name: 'JavaScript', Icon: SiJavascript },
  { id: 'php',        name: 'PHP',        Icon: SiPhp },
  { id: 'swift',      name: 'Swift',      Icon: SiSwift },
  { id: 'typescript', name: 'TypeScript', Icon: SiTypescript },
  { id: 'kotlin',     name: 'Kotlin',     Icon: SiKotlin },
  { id: 'csharp',     name: 'C#',         Icon: SiReact },
  { id: 'react',      name: 'React',      Icon: SiReact },
  // añade más aquí…
]
