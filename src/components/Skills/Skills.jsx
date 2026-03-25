import SectionWrapper from '../common/SectionWrapper'
import SectionHeading from '../common/SectionHeading'
import SkillCategory from './SkillCategory'
import { skillCategories } from '../../data/skills'

export default function Skills() {
  return (
    <section className="bg-navy">
      <SectionWrapper id="skills">
        <SectionHeading title="Technical Skills" subtitle="Technologies & tools I work with" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat) => (
            <SkillCategory key={cat.category} {...cat} />
          ))}
        </div>
      </SectionWrapper>
    </section>
  )
}
