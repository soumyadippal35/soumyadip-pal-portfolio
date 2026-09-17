import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { ResumeActions } from '@/components/portfolio/ResumeActions';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SEOHead } from '@/components/seo/SEOHead';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <section className="relative h-screen min-h-[44rem] w-full overflow-hidden bg-zinc-950">
          <div className="absolute inset-0">
            <video autoPlay muted loop playsInline preload="metadata" poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85" className="h-full w-full object-cover" onError={(event) => { event.currentTarget.style.opacity = '0'; }}>
              <source src="/assets/video/hero-coding.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(3,7,18,.88),rgba(7,30,70,.42)_55%,rgba(3,7,18,.82)),radial-gradient(circle_at_80%_20%,rgba(37,99,235,.42),transparent_40%)]" />
          </div>
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
            <motion.div className="max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }}>
              <p className="text-xs font-medium tracking-[0.32em] text-white/70 uppercase">AI · Data · Automation</p>
              <h1 className="mt-5 text-5xl font-extralight tracking-[0.08em] text-white sm:text-6xl md:text-8xl lg:text-9xl">SOUMYADIP PAL</h1>
              <p className="mt-6 text-lg font-light tracking-wide text-white/90 md:text-2xl">Data Science · AI · Vibe Coder · Prompt Engineer</p>
              <p className="mt-6 max-w-2xl text-base font-light leading-relaxed text-white/80 md:text-lg">{photographerInfo.heroIntroduction}</p>
              <div className="mt-9"><ResumeActions dark /></div>
            </motion.div>
            <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}><ScrollIndicator /></motion.div>
          </div>
        </section>

        <section className="bg-background px-6 py-24 md:py-32 lg:px-8"><div className="mx-auto max-w-4xl text-center"><ScrollReveal><p className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">Profile</p><h2 className="mt-4 text-3xl font-light tracking-wide md:text-4xl">Building clear solutions from complex information.</h2><p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">{photographerInfo.biography.split('\n\n')[0]}</p><Link to="/about" className="mt-7 inline-flex items-center gap-2 text-base font-light tracking-wide hover:text-muted-foreground"><span>More about my experience and skills</span><ArrowRight className="size-4" /></Link></ScrollReveal></div></section>

        <section className="border-y border-border bg-muted/30 px-6 py-10 lg:px-8"><div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4"><Trophy className="size-5 shrink-0" /><p className="font-light">3rd Runner-Up - INSTAN-C8 Coding Competition, Brainware University, 2026</p><Link to="/certificates" className="text-sm underline underline-offset-4">View credentials</Link></div></section>

        <section className="py-24 md:py-32"><ScrollReveal><div className="mb-16 space-y-4 px-6 text-center"><p className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">Selected work</p><h2 className="text-4xl font-light tracking-wide md:text-5xl">Projects with purpose.</h2><p className="text-lg font-light tracking-wide text-muted-foreground">AI, data analytics, computer vision and interactive web applications.</p></div></ScrollReveal><div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">{featuredProjects.map((project, index) => <ProjectCard key={project.id} project={project} aspectRatio="landscape" showCategory index={index} />)}</div><ScrollReveal delay={0.25}><div className="mt-16 flex justify-center px-6"><Link to="/portfolio" className="inline-flex items-center gap-2 text-lg font-light tracking-wide hover:text-muted-foreground"><span>View all projects</span><ArrowRight className="size-5" /></Link></div></ScrollReveal></section>
      </div>
    </>
  );
}
