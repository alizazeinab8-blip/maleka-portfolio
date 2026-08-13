"use client";

import { Project } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";
import VideoFrame from "./VideoFrame";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function LinkButton({
  href,
  label,
  variant,
}: {
  href?: string;
  label: string;
  variant: "primary" | "ghost" | "disabled";
}) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-colors";

  if (variant === "disabled" || !href) {
    return (
      <span
        aria-disabled
        className={`${base} cursor-not-allowed border border-line/70 text-muted2`}
      >
        {label}
      </span>
    );
  }

  if (variant === "primary") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-lavender-500 text-white hover:scale-[1.03] active:scale-[0.98]`}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} border border-line text-ink hover:bg-white/5`}
    >
      {label}
    </a>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { dict } = useLanguage();
  const { projects } = dict;
  const isFeatured = project.size === "lg";
  const reversed = isFeatured && index % 2 === 1;

  return (
    <article
      className={`glass reveal is-visible relative overflow-hidden rounded-3xl p-5 sm:p-7 ${
        isFeatured ? "lg:grid lg:grid-cols-2 lg:items-center lg:gap-10" : ""
      }`}
    >
      <div className={reversed ? "lg:order-2" : ""}>
        <VideoFrame
          src={project.video}
          poster={project.poster}
          alt={`${project.title} preview`}
          isImageOnly={project.isImageOnly}
        />
      </div>

      <div className={`mt-6 lg:mt-0 ${reversed ? "lg:order-1" : ""}`}>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-lavender-300">
          {project.tagline}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {project.description}
        </p>

        <div className="mt-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-muted2">
            {projects.featuresLabel}
          </p>
          <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-[13px] leading-snug text-ink/80">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lavender-400" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-ink/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton
            href={project.links.demo}
            label={project.links.demo ? projects.demoLabel : projects.noLinkLabel}
            variant={project.links.demo ? "primary" : "disabled"}
          />
          {project.links.github && (
            <LinkButton href={project.links.github} label={projects.githubLabel} variant="ghost" />
          )}
        </div>
      </div>
    </article>
  );
}
