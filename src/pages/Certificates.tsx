import { Award, ExternalLink, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { certificates, type Certificate } from '@/data/certificates';
import { SEOHead } from '@/components/seo/SEOHead';

function CertificatePreview({ certificate }: { certificate: Certificate }) {
  const [failed, setFailed] = useState(false);

  if (!certificate.image || failed) {
    return <div className="flex h-48 items-center justify-center border-b border-border bg-muted"><Award className="size-10 text-muted-foreground" /></div>;
  }

  return <img src={certificate.image} alt={`${certificate.title} certificate`} className="h-48 w-full border-b border-border object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" onError={() => setFailed(true)} />;
}

export default function Certificates() {
  return (
    <>
      <SEOHead title="Certificates" description="Certificates and achievements earned by Soumyadip Pal." />
      <div className="min-h-screen">
        <section className="border-b border-border px-6 py-24 md:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">Credentials & learning</p>
            <h1 className="text-5xl font-light tracking-wide md:text-6xl lg:text-7xl">Certificates</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">A growing record of technical learning, professional development and competition work.</p>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
          <div className="mb-12 flex items-start gap-4 border-l-2 border-foreground pl-5">
            <Trophy className="mt-1 size-5 shrink-0" />
            <div><p className="text-sm font-medium tracking-wide uppercase">Latest achievement</p><p className="mt-1 text-lg font-light">3rd Runner-Up — INSTAN-C8 Coding Competition, Brainware University, 2026</p></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.article key={certificate.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} className="group overflow-hidden border border-border bg-card">
                <CertificatePreview certificate={certificate} />
                <div className="p-6"><p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">{certificate.category} • {certificate.year}</p><h2 className="mt-3 text-xl font-light leading-snug">{certificate.title}</h2><p className="mt-2 text-sm text-muted-foreground">{certificate.issuer}</p>{certificate.note && <p className="mt-4 text-sm font-light leading-relaxed text-muted-foreground">{certificate.note}</p>}{certificate.pdf && <a href={certificate.pdf} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">Open certificate <ExternalLink className="size-3.5" /></a>}</div>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
