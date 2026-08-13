"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { dict } = useLanguage();
  const { projects } = dict;

  const featured = projects.items.filter((p) => p.size === "lg");
  const rest = projects.items.filter((p) => p.size !== "lg");

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-grid-glow opacity-60"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal is-visible mb-14 max-w-2xl">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-lavender-300">
            {projects.label}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
            {projects.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{projects.intro}</p>
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
