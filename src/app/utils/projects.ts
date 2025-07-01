export interface Project {
  title: string
  description: string
  category: string
  techs: string[]
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    title: 'Undressed',
    description: 'Aplicación web con funcionalidad de scraping, frontend moderno y backend robusto',
    category: 'Desarrollo Web',
    techs: ['React', 'TailwindCSS', 'Node.js', 'Flask'],
    githubUrl: 'https://github.com/tu-usuario/undressed',
    demoUrl: 'https://undressed.demo.com'
  },
  {
    title: 'Ninja Turtle Cross',
    description: 'Aplicación móvil multiplataforma con integración de Firebase',
    category: 'Desarrollo Móvil',
    techs: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'https://github.com/tu-usuario/ninja-turtle-cross',
    demoUrl: 'https://ninjaturtlecross.demo.com'
  },
  {
    title: 'Proyecto 3',
    description: 'Breve descripción de tu tercer proyecto',
    category: 'Full-Stack',
    techs: ['Vue', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-3',
    demoUrl: 'https://proyecto3.demo.com'
  }
]
