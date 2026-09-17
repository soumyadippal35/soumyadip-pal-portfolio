import { motion } from 'framer-motion';
import { useState } from 'react';
import { BriefcaseBusiness, Github, GraduationCap, Languages, Linkedin, Mail, MapPin } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { ResumeActions } from '@/components/portfolio/ResumeActions';
import { SkillsShowcase } from '@/components/portfolio/SkillsShowcase';
import { SEOHead } from '@/components/seo/SEOHead';

export default function About() {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const hasPortrait = Boolean(photographerInfo.portraitImage) && !imageUnavailable;

  return (
    <>
      <SEOHead title="About" description="About Soumyadip Pal - Data Science student, AI practitioner, prompt engineer and vibe coder." />
      <div className="min-h-screen">
        <section className="border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">About</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-4 text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Analytical thinking. Human-centred technology.</motion.h1>
          </div>
        </section>

        <section className="px-6 py-16 md:py-24 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} className="relative min-h-[30rem] overflow-hidden bg-zinc-950">
              {hasPortrait ? <img src={photographerInfo.portraitImage} alt="Soumyadip Pal" className="absolute inset-0 h-full w-full object-cover" onError={() => setImageUnavailable(true)} /> : <div className="absolute inset-0 flex flex-col justify-end bg-[radial-gradient(circle_at_72%_18%,#2563eb_0%,transparent_28%),radial-gradient(circle_at_12%_85%,#1d4ed8_0%,transparent_33%),linear-gradient(135deg,#020617_0%,#172554_100%)] p-8 text-white"><p className="text-xs tracking-[0.25em] text-white/60 uppercase">Soumyadip Pal</p><p className="mt-4 text-6xl font-extralight tracking-wide">SP</p><p className="mt-8 max-w-xs text-sm font-light leading-relaxed text-white/75">Profile image placeholder. Add your supplied portrait at <code className="text-white">public/assets/images/soumyadip-pal-photo.jpg</code>.</p></div>}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
              <div><h2 className="text-4xl font-light tracking-wide">{photographerInfo.name}</h2><p className="mt-3 text-xl font-light text-muted-foreground">{photographerInfo.tagline}</p></div>
              <div className="space-y-5 border-t border-border pt-8">{photographerInfo.biography.split('\n\n').map((paragraph) => <p key={paragraph} className="text-lg font-light leading-relaxed text-muted-foreground">{paragraph}</p>)}</div>
              <ResumeActions />
              <div className="grid gap-4 border-t border-border pt-8 text-sm font-light text-muted-foreground sm:grid-cols-2">
                <a href={`mailto:${photographerInfo.email}`} className="flex items-center gap-3 hover:text-foreground"><Mail className="size-4" />{photographerInfo.email}</a>
                <a href={`tel:${photographerInfo.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-foreground"><MapPin className="size-4" />{photographerInfo.phone}</a>
                <span className="flex items-center gap-3"><MapPin className="size-4" />{photographerInfo.location}</span>
                <a href={photographerInfo.socialLinks.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground"><Github className="size-4" />GitHub</a>
                <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-foreground"><Linkedin className="size-4" />LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 md:py-24 lg:px-8"><div className="mx-auto grid max-w-6xl gap-px bg-border md:grid-cols-3">
          <div className="bg-background p-7"><BriefcaseBusiness className="size-5" /><p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">Experience</p><h3 className="mt-3 text-xl font-light">Full Stack Web Development Intern</h3><p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">Euphoria GenX · 2026-Present<br />Developing responsive web applications using frontend and backend technologies.</p></div>
          <div className="bg-background p-7"><GraduationCap className="size-5" /><p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">Education</p><h3 className="mt-3 text-xl font-light">B.Tech CSE - Data Science</h3><p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">Brainware University, Kolkata<br />2023-2027</p></div>
          <div className="bg-background p-7"><Languages className="size-5" /><p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">Languages</p><h3 className="mt-3 text-xl font-light">English · Hindi · Bengali</h3><p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">Intermediate English and Hindi · Native Bengali</p></div>
        </div></section>

        <SkillsShowcase />

        <section className="border-t border-border px-6 py-16 md:py-24 lg:px-8"><div className="mx-auto max-w-6xl"><p className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">Recognition</p><div className="mt-8 grid gap-px bg-border md:grid-cols-2">{photographerInfo.awards.map((award) => <div key={award} className="bg-background p-7 text-lg font-light leading-relaxed">{award}</div>)}</div></div></section>
      </div>
    </>
  );
}
