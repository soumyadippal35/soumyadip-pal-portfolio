import aiImage from '@/assets/certificates/ai-tools-certificate.jpg';
import aiPdf from '@/assets/certificates/ai-tools-certificate.pdf';
import deeptechImage from '@/assets/certificates/deeptech-certificate.jpg';
import deeptechPdf from '@/assets/certificates/deeptech-certificate.pdf';
import dsaImage from '@/assets/certificates/dsa-certificate.jpg';
import dsaPdf from '@/assets/certificates/dsa-certificate.pdf';
import pythonImage from '@/assets/certificates/python-certificate.jpg';
import pythonPdf from '@/assets/certificates/python-certificate.pdf';
import softSkillsImage from '@/assets/certificates/soft-skills-certificate.jpg';
import softSkillsPdf from '@/assets/certificates/soft-skills-certificate.pdf';
import tradingImage from '@/assets/certificates/trading-certificate.jpg';
import tradingPdf from '@/assets/certificates/trading-certificate.pdf';

export type Certificate = { title: string; issuer: string; year: string; category: string; note?: string; image?: string; pdf?: string };

export const certificates: Certificate[] = [
  { title: 'Data Structures and Algorithms', issuer: 'MindLuster', year: '2025', category: 'Programming', note: 'Credential ID: cee33bc6', image: dsaImage, pdf: dsaPdf },
  { title: 'Python Programming Language', issuer: 'MindLuster', year: '2025', category: 'Programming', note: '12-hour course - Credential ID: 53683b4d', image: pythonImage, pdf: pythonPdf },
  { title: 'Trading Algorithms with Python', issuer: 'MindLuster', year: '2025', category: 'Data Science', note: 'Credential ID: 26b86bad', image: tradingImage, pdf: tradingPdf },
  { title: 'Database Connectivity and Reporting', issuer: 'MindLuster', year: '2025', category: 'Data Science' },
  { title: 'Artificial Intelligence Tools', issuer: 'MindLuster', year: '2025', category: 'AI / Machine Learning', note: 'Credential ID: 02cae438', image: aiImage, pdf: aiPdf },
  { title: 'ADCA - Advanced Diploma in Computer Applications', issuer: 'Diploma programme', year: '2023', category: 'Programming' },
  { title: 'Soft Skills', issuer: 'MindLuster', year: '2025', category: 'Professional Development', note: 'Credential ID: 5748001b', image: softSkillsImage, pdf: softSkillsPdf },
  { title: 'Entrepreneurship Foundations for Deep Tech Startups', issuer: 'Turnip Innovations - Qualcomm - L2Pro India', year: '2026', category: 'Professional Development', note: 'Scored 100% - Credential ID: CERT-DTE-2026-02716', image: deeptechImage, pdf: deeptechPdf },
  { title: 'INSTAN-C8 Coding Competition', issuer: 'Brainware University - Kreative Machinex', year: '2026', category: 'Achievement', note: 'Certificate of participation - 3rd Runner-Up achievement', image: '/assets/images/instan-c8-certificate.jpg' }
];
