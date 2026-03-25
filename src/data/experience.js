export const experiences = [
  {
    id: 'lnt',
    role: 'Full Stack Developer',
    company: 'L&T Finance',
    location: 'Bengaluru, India',
    duration: 'Jul 2024 – Oct 2025',
    bullets: [
      'Built a high-throughput FastAPI service using AWS Rekognition for facial-recognition attendance, handling 500+ concurrent API calls/second.',
      'Architected a concurrent, multi-threaded FastAPI service with async request handling and event-loop optimizations.',
      'Developed a React.js analytics dashboard surfacing real-time attendance states (present / absent / face not found).',
      'Integrated MongoDB for persistent logging of every recognition event, enabling audit trails and reporting.',
      'Leveraged Claude Code with precision context-aware prompting to reduce average feature delivery from 3 weeks to 1 week.',
    ],
    tech: ['FastAPI', 'AWS Rekognition', 'React.js', 'MongoDB', 'Python', 'GCP'],
  },
  {
    id: 'freelance',
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    location: 'Bengaluru, India',
    duration: 'Nov 2025 – Mar 2026',
    bullets: [
      'Built and maintained Malnad Realty (malnadrealty.com), a NoBroker-style property marketplace, integrating 150+ REST APIs across Next.js, Spring Boot, and FastAPI.',
      'Sole engineer for end-to-end GCP deployment: Compute Engine VMs, Nginx reverse proxy, iptables firewall, MongoDB and PostgreSQL.',
      'Integrated OTP login, WhatsApp notification APIs, Google Cloud Storage, and headless WordPress CMS.',
    ],
    tech: ['Next.js', 'Spring Boot', 'FastAPI', 'MongoDB', 'PostgreSQL', 'GCP', 'Nginx'],
  },
]
