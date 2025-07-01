'use client'
import React from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects, Project } from '../utils/projects'

export default function Projects() {
  return (
    <section id="proyectos" className="relative z-10 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-[#006666] mb-12">
          Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p: Project) => (
            <article
              key={p.title}
              className="
                relative 
                border border-[#CCCCCC] 
                rounded-2xl p-6 
                bg-transparent backdrop-blur-sm 
                hover:shadow-lg transition-shadow
              "
            >
              <span className="
                inline-block 
                bg-[#E9E9E9]/20 
                text-[#006666] 
                text-xs font-medium 
                px-2 py-1 rounded-full uppercase
              ">
                {p.category}
              </span>

              <h3 className="mt-4 text-2xl font-semibold text-[#006666]">
                {p.title}
              </h3>
              <p className="mt-2 text-[#006666]/80">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.techs.map((tech) => (
                  <span
                    key={tech}
                    className="
                      inline-block 
                      border border-[#CCCCCC] 
                      text-[#006666] 
                      text-xs font-medium 
                      px-2 py-1 rounded-full
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 flex items-center justify-center 
                    border border-[#006666] 
                    text-[#006666] 
                    hover:bg-[#006666]/10 
                    rounded-lg px-4 py-2 
                    text-sm font-medium 
                    transition
                  "
                >
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1 flex items-center justify-center 
                    border border-[#006666] 
                    text-[#006666] 
                    hover:bg-[#006666]/10 
                    rounded-lg px-4 py-2 
                    text-sm font-medium 
                    transition
                  "
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/proyectos"
            className="
              inline-block 
              border border-[#006666] 
              text-[#006666] 
              hover:bg-[#006666]/10 
              rounded-lg px-6 py-3 
              font-medium transition
            "
          >
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  )
}
