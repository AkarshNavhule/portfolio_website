import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <motion.div
      id={id}
      ref={ref}
      role="region"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      className={`py-24 px-4 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.div>
  )
}
