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
    title: 'Ninja Turtle Cross',
    description: 'Juego multiplataforma con integración de Firebase para autenticación y sincronización en tiempo real.',
    category: 'Desarrollo Móvil',
    techs: ['Flutter', 'Firebase', 'Dart'],
    githubUrl: 'https://github.com/TeamArtic/froggame.git',
    demoUrl: 'https://totugasninjalosdelfondo.netlify.app/html/mainmenu.html'
  },
  {
    title: 'IA Solutions Web',
    description: 'Landing page profesional para empresa de soluciones de automatización con IA, con integración de servicios inteligentes.',
    category: 'IA & Automatización',
    techs: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/CarlosPD8/ia-solutions-web.git',
    demoUrl: 'https://github.com/CarlosPD8/ia-solutions-web.git'
  },
  {
    title: 'DemoLlamadas',
    description: 'Plataforma inmobiliaria con asistente de IA integrado para atención al cliente y gestión de consultas en tiempo real.',
    category: 'IA & Inmobiliaria',
    techs: ['Next.js', 'TypeScript', 'AI Chat'],
    githubUrl: 'https://github.com/CarlosPD8/demollamadas.git',
    demoUrl: 'https://github.com/CarlosPD8/demollamadas.git'
  },
  {
    title: 'HealthyApp',
    description: 'Aplicación web full-stack para registro diario de peso, altura e IMC con autenticación segura (scrypt + pepper), WAF con Nginx/ModSecurity y documentación OpenAPI/Swagger.',
    category: 'Full-Stack',
    techs: ['React', 'Express.js', 'SQLite', 'Docker', 'Nginx / WAF'],
    githubUrl: 'https://github.com/CarlosPD8/HealthyApp.git',
    demoUrl: 'https://github.com/CarlosPD8/HealthyApp.git'
  }
]
