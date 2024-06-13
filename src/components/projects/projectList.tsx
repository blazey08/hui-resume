import { ProjectCard } from "./projectCard";
import { projects } from "./projects";

export interface ProjectDetails {
  name: string;
  languages: string[];
  description: string;
  longtext: string;
  image: string;
  link: string;
}

export function ProjectList() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      {projects.map((project: ProjectDetails) => (
        <ProjectCard key={project.name} card={project} />
      ))}
    </div>
  );
}
