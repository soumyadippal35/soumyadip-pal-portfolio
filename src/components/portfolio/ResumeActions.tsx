import { Download, Eye, FileText } from 'lucide-react';

const resumePdf = '/assets/resume/Soumyadip-Pal-Resume.pdf';
const resumeDocx = '/assets/resume/Soumyadip-Pal-Resume.docx';

export function ResumeActions({ dark = false }: { dark?: boolean }) {
  const primary = dark ? 'border border-white bg-white text-zinc-950 hover:bg-white/90' : 'bg-foreground text-background hover:bg-foreground/90';
  const secondary = dark ? 'border border-white/45 text-white hover:bg-white/10' : 'border border-border text-foreground hover:bg-muted';
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <a href={resumePdf} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors ${primary}`}>
        <Eye className="size-4" /> View resume
      </a>
      <details className="relative">
        <summary className={`flex cursor-pointer list-none items-center gap-2 px-5 py-3 text-sm font-medium transition-colors [&::-webkit-details-marker]:hidden ${secondary}`}>
          <Download className="size-4" /> Download resume
        </summary>
        <div className={`absolute right-0 z-20 mt-2 w-52 border p-2 shadow-lg ${dark ? 'border-white/20 bg-zinc-900 text-white' : 'border-border bg-background'}`}>
          <a href={resumePdf} download className="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-muted dark:hover:bg-white/10"><FileText className="size-4" /> PDF format</a>
          <a href={resumeDocx} download className="flex items-center gap-3 px-3 py-2.5 text-sm hover:bg-muted dark:hover:bg-white/10"><FileText className="size-4" /> DOCX format</a>
        </div>
      </details>
    </div>
  );
}
