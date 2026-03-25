import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import ExperienceCard from './ExperienceCard'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section className="bg-surface/30">
      <SectionWrapper id="experience">
        <SectionHeading title="Work Experience" subtitle="Where I've built things" />
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              {...exp}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
