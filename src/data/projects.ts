import type { Project } from '@/types';

const codeImage = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85';
const dashboardImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85';
const ragImage = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85';
const healthImage = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85';
const sportsImage = 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1800&q=85';

export const projects: Project[] = [
  {
    id: 'scan', title: 'SCAN - Resume x JD Match Engine', category: 'AI / Full Stack', year: '2026', slug: 'scan-resume-matcher', coverImage: codeImage,
    description: 'An AI-assisted resume-to-job-description matching product. It combines local keyword and ATS checks with semantic fit feedback, comparison mode, scan history and a live resume preview.',
    client: 'React • TypeScript • Vite • Three.js • PDF.js • Mammoth • jsPDF', camera: 'AI-assisted career product', location: 'Deployed on Vercel',
    github: 'https://github.com/soumyadippal35/Scan-resume-matcher', live: 'https://scan-resume-matcher-one.vercel.app/',
    images: [{ id: 'scan-1', src: codeImage, alt: 'Developer working with a laptop', aspectRatio: 'landscape' }, { id: 'scan-2', src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=85', alt: 'Code editor on a monitor', aspectRatio: 'landscape' }]
  },
  {
    id: 'hr-analytics', title: 'HR Analytics - Employee Attrition Dashboard', category: 'Data Analytics / BI', year: '2026', slug: 'hr-analytics-dashboard', coverImage: dashboardImage,
    description: 'A Power BI and Excel analysis of 1,480 employee records across 37 attributes. The dashboard surfaces retention signals including a 16.3% attrition rate, overtime impact and departmental trends.',
    client: 'Excel • Power BI • DAX', camera: 'Business intelligence dashboard', location: 'GitHub repository',
    github: 'https://github.com/soumyadippal35/HR-ANALYTICS-DASHBOARD',
    images: [{ id: 'hr-1', src: dashboardImage, alt: 'Analytics dashboard on a screen', aspectRatio: 'landscape' }, { id: 'hr-2', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85', alt: 'Team reviewing data insights', aspectRatio: 'landscape' }]
  },
  {
    id: 'tracerag', title: 'TraceRAG - Grounded Retrieval Pipeline', category: 'Generative AI / RAG', year: '2026', slug: 'tracerag', coverImage: ragImage,
    description: 'A production-ready RAG pipeline that pairs BM25 with dense retrieval to generate grounded answers supported by source citations.',
    client: 'Python • Hybrid Retrieval • RAG • Source Citations', camera: 'AI knowledge retrieval system', location: 'Deployed on Vercel',
    github: 'https://github.com/soumyadippal35/tracerag', live: 'https://tracerag-zeta.vercel.app',
    images: [{ id: 'tracerag-1', src: ragImage, alt: 'Digital data network', aspectRatio: 'landscape' }, { id: 'tracerag-2', src: codeImage, alt: 'Programming workspace', aspectRatio: 'landscape' }]
  },
  {
    id: 'bpins', title: 'Bengali Prescription Intelligence System', category: 'AI / Computer Vision', year: '2026', slug: 'bengali-prescription-intelligence-system', coverImage: healthImage,
    description: 'An academic OCR prototype that extracts prescription information and explains medicine details in simple, patient-friendly Bengali.',
    client: 'Python • OpenCV • Tesseract OCR • Streamlit • Prompt Engineering', camera: 'OCR and rule-based intelligence prototype', location: 'GitHub repository',
    github: 'https://github.com/soumyadippal35/Bengali-Prescription-Intelligence-System',
    images: [{ id: 'bpins-1', src: healthImage, alt: 'Healthcare technology workspace', aspectRatio: 'landscape' }, { id: 'bpins-2', src: codeImage, alt: 'Developer working on an application', aspectRatio: 'landscape' }]
  },
  {
    id: 'rcb-ipl', title: 'RCB IPL Analytics Dashboard', category: 'Data Analytics / 3D Web', year: '2026', slug: 'rcb-ipl-analytics-dashboard', coverImage: sportsImage,
    description: 'A broadcast-style analytics platform for Royal Challengers Bengaluru, built from 286 IPL matches and more than 67,000 ball-by-ball deliveries. It combines a React 3D experience with a Power BI star-schema pipeline.',
    client: 'React • Three.js • Tailwind CSS • Python • Pandas • Power BI • DAX', camera: 'Interactive sports analytics platform', location: 'Deployed on Vercel',
    github: 'https://github.com/soumyadippal35/RCB-IPL-Analytics-Dashboard', live: 'https://rcb-ipl-analytics-dashboard-iota.vercel.app',
    images: [{ id: 'rcb-1', src: sportsImage, alt: 'Cricket stadium under lights', aspectRatio: 'landscape' }, { id: 'rcb-2', src: dashboardImage, alt: 'Analytics data visualisation', aspectRatio: 'landscape' }]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
export const getProjectsByCategory = (category: string) => category === 'all' ? projects : projects.filter((project) => project.category === category);
export const getFeaturedProjects = () => projects;
export const getAdjacentProjects = (currentSlug: string) => {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  return { prev: currentIndex > 0 ? projects[currentIndex - 1] : null, next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null };
};
