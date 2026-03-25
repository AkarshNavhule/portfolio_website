import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

export default function HeroContent() {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <motion.div variants={itemVariants} className="mb-3">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work
        </span>
      </motion.div> */}

      <motion.h1
        variants={itemVariants}
        className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-4 mt-20"
      >
        AKARSH <span className="text-gradient">NAVHULE</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-gray-400 font-medium mb-2"
      >
        Full Stack Developer
        <span className="text-accent mx-2">·</span>
        AI &amp; Automation Engineer
      </motion.p>

      <motion.p
        variants={itemVariants}
        className="text-gray-500 text-base max-w-xl mb-8 leading-relaxed"
      >
        Building production-grade AI-powered applications — React/Next.js frontends, FastAPI backends,
        cloud infra on GCP, and AI pipelines with RAG & LLMs.
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-3 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl transition-all duration-200 glow glow-hover"
        >
          View My Work
        </button>
        <a
          href="mailto:akarshnavhule@gmail.com"
          className="px-6 py-3 border border-surface-3 hover:border-accent text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-200"
        >
          Get In Touch
        </a>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/akarshnavhule"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/akarsh-navhule"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.youtube.com/@akarshnavhule111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>
        </div>
        <span className="text-sm text-gray-500">📍 Bengaluru, India</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center gap-2 text-gray-600 mt-8"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
