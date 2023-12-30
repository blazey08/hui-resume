import { Heading2 } from "@/components/common/typography/Heading2";
import { ProjectList } from "@/components/projects/projectList";

export function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center h-screen gap-y-4">
            <Heading2>Projects</Heading2>
            <ProjectList />
        </div>
    )
}