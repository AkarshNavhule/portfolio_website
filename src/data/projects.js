export const projects = [
  {
    id: 'digital-twin',
    number: '01',
    title: 'AI Digital Twin — Face, Voice & Video Synthesis',
    badge: null,
    description:
      'Trained a FLUX LoRA model on personal photos for consistent, high-fidelity face generation. Cloned voice using Chatterbox and integrated it with Infinite Talk ComfyUI workflow. Generated lip-synced talking video from a single image + audio + text prompt, end-to-end.',
    tech: ['ComfyUI', 'FLUX LoRA', 'Chatterbox (voice cloning)', 'Infinite Talk', 'Hugging Face', 'ngrok', 'Jarvis Labs GPU'],
    github: [{ label: 'GitHub', url: 'https://github.com/AkarshNavhule/ComfyUI_Workflows' }],
    live: null,
    type: 'media',
    images: [
      '/AI_digital_Twin_assets/ComfyUI_00005_.png',
      '/AI_digital_Twin_assets/ComfyUI_00007_ (1).png',
      '/AI_digital_Twin_assets/ComfyUI_00019_.png',
      '/AI_digital_Twin_assets/ComfyUI_00020_.png',
    ],
    video: '/AI_digital_Twin_assets/Twin1.mp4',
  },
  {
    id: 'sahayak',
    number: '02',
    title: 'Sahayak — AI Student Assistant',
    badge: 'Hackathon',
    description:
      'Full-stack RAG application for textbook Q&A, question paper generation, and AI-assisted answer sheet correction. FastAPI backend with ChromaDB vector store; Google Vision API for OCR; Gemini Flash 2.5 for evaluation.',
    tech: ['FastAPI', 'Next.js', 'ChromaDB', 'Google Gemini Flash 2.5', 'Google Vision API', 'Firestore', 'GCP VM'],
    github: [
      { label: 'Backend', url: 'https://github.com/AkarshNavhule/fastapi-chromadb-backend' },
      { label: 'Frontend', url: 'https://github.com/AkarshNavhule/sahayak-app' },
    ],
    live: null,
    type: 'standard',
  },
  {
    id: 'malnad-realty',
    number: '03',
    title: 'Malnad Realty — Property Marketplace',
    badge: 'Live',
    description:
      'NoBroker-style full-stack property marketplace integrating 150+ REST APIs. Sole engineer for end-to-end GCP deployment, Nginx reverse proxy, OTP login, WhatsApp notifications, and headless WordPress CMS.',
    tech: ['Next.js', 'Spring Boot', 'FastAPI', 'MongoDB', 'PostgreSQL', 'GCP', 'Nginx', 'WordPress CMS'],
    github: null,
    live: [{ label: 'malnadrealty.com', url: 'https://malnadrealty.com' }],
    type: 'standard',
  },
  {
    id: 'attendance',
    number: '04',
    title: 'AI Face Recognition Attendance System',
    badge: 'L&T Finance',
    description:
      'FastAPI service using AWS Rekognition for facial-recognition attendance handling 500+ concurrent API calls/second. React.js analytics dashboard with real-time attendance stats. Resolved multi-threading race conditions via async request batching.',
    tech: ['FastAPI', 'AWS Rekognition', 'React.js', 'MongoDB', 'GCP VM'],
    github: null,
    live: null,
    type: 'standard',
  },
  {
    id: 'automation-agents',
    number: '05',
    title: 'AI Automation Agents (n8n)',
    badge: null,
    description:
      'Suite of AI automation workflows: Auto Email Labeling & Reply Agent (Gmail + GPT-4.1), WhatsApp AI Clinic Agent (appointment booking with Razorpay + Calendar sync), AI UGC Video Generator (Sora2 pipeline at $0.15/video).',
    tech: ['n8n', 'OpenAI GPT-4.1', 'Gmail API', 'Razorpay', 'Google Calendar', 'Sora2', 'Google Sheets'],
    github: [{ label: 'GitHub', url: 'https://github.com/AkarshNavhule/n8n-workflows' }],
    live: null,
    type: 'standard',
  },
  {
    id: 'claude-agent-projects',
    number: '06',
    title: 'Claude Code Agent Projects',
    badge: null,
    description:
      'YouTube Niche Analyzer Agent — fetches top-performing videos and auto-generates Excel + PPT reports via email. Motion Graphics Generator — prompt-driven pipeline using Claude Code + Remotion. Google Sheet AI Chat — LLM-powered natural language Q&A over Google Sheets.',
    tech: ['Claude Code', 'Remotion', 'YouTube Data API', 'Google Sheets API', 'LLM APIs'],
    github: [
      { label: 'YouTube Analyzer', url: 'https://github.com/AkarshNavhule/-YouTube-Intelligence-Pipeline' },
      { label: 'Motion Graphics', url: 'https://github.com/AkarshNavhule/motion_graphics' },
      { label: 'Sheets Chat', url: 'https://github.com/AkarshNavhule/sheets_to_chatbot' },
    ],
    live: [
      { label: 'YouTube Analyzer Live', url: 'https://youtube-intelligence-pipeline.onrender.com/' },
      { label: 'Sheets Chat Live', url: 'https://sheetstochatbot-akarshnavhule.streamlit.app/' },
    ],
    type: 'standard',
  },
]

export const youtubeVideos = [
  { id: 'Zl35iiiUlk8', title: 'AI Project Demo #1' },
  { id: 'Z_D8yHdnWn0', title: 'AI Project Demo #2' },
  { id: 'OvJCpCWDaX0', title: 'AI Project Demo #3' },
  { id: 'dlGMf-kzlBg', title: 'AI Project Demo #4' },
]
