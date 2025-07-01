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
    title: 'NailDesing',
    description: 'Aplicación web con funcionalidad total realizada con Angular y Laravel',
    category: 'Desarrollo Web',
    techs: ['Angular', 'Laravel', 'Typescript'],
    githubUrl: 'https://github.com/CarlosPD8/NailDesignLab.git',
    demoUrl: 'https://github.com/CarlosPD8/NailDesignLab.git'
  },
  {
    title: 'Ninja Turtle Cross',
    description: 'Aplicación móvil multiplataforma con integración de Firebase',
    category: 'Desarrollo Móvil',
    techs: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'https://github.com/TeamArtic/froggame.git',
    demoUrl: 'https://totugasninjalosdelfondo.netlify.app/html/mainmenu.html'
  },
  {
    title: 'IceVending',
    description: 'Aplicación móvil multiplataforma con Flutter',
    category: 'Full-Stack',
    techs: ['Flutter', 'Dart', 'MongoDB'],
    githubUrl: 'https://github.com/CarlosPD8/Flutter_App.git',
    demoUrl: 'https://github.com/CarlosPD8/Flutter_App.git'
  }
]
