import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import ProjectCard from './ProjectCard'
import DigitalTwinCard from './DigitalTwinCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section className="bg-navy">
      <SectionWrapper id="projects">
        <SectionHeading title="Projects" subtitle="Things I've built & shipped" />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project) =>
            project.type === 'media' ? (
              <DigitalTwinCard key={project.id} {...project} />
            ) : (
              <ProjectCard key={project.id} {...project} />
            )
          )}
        </div>
      </SectionWrapper>
    </section>
  )
}
