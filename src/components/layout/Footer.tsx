import { Github, Linkedin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';

export function Footer() {
  return <footer className="border-t border-border"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row lg:px-8"><p className="text-sm font-light tracking-wide text-muted-foreground">© {new Date().getFullYear()} {photographerInfo.name}. All rights reserved.</p><div className="flex items-center gap-6">{photographerInfo.socialLinks.github && <a href={photographerInfo.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><Github className="size-5" /></a>}{photographerInfo.socialLinks.linkedin && <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><Linkedin className="size-5" /></a>}</div></div></footer>;
}
