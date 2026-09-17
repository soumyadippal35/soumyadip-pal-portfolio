const skillGroups = [
  {
    title: 'Languages & development',
    items: [
      ['Python', 'python'], ['C++', 'cpp'], ['JavaScript', 'javascript'], ['Node.js', 'nodejs'], ['HTML5', 'html5'], ['CSS3', 'css3']
    ]
  },
  {
    title: 'Data & analytics',
    items: [
      ['SQL', 'sql'], ['MySQL', 'mysql'], ['Power BI', 'powerbi'], ['DAX', 'dax'], ['Excel', 'excel'], ['Pandas', 'pandas'], ['NumPy', 'numpy'], ['Matplotlib', 'matplotlib']
    ]
  },
  {
    title: 'AI & automation',
    items: [
      ['Generative AI', 'generative-ai'], ['Prompt Engineering', 'prompt-engineering'], ['Vibe Coding', 'vibe-coding'], ['Automation', 'automation'], ['n8n', 'n8n']
    ]
  },
  {
    title: 'DevOps & collaboration',
    items: [
      ['Docker', 'docker'], ['Git', 'git'], ['GitHub', 'github']
    ]
  }
] as const;

const softSkills = ['Teamwork', 'Time management', 'Problem solving', 'Quick learner', 'Communication', 'Adaptability', 'Attention to detail'];

export function SkillsShowcase() {
  return (
    <section className="border-t border-border px-6 py-16 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">Toolkit</p>
          <h2 className="mt-4 text-3xl font-light tracking-wide md:text-4xl">Tools, languages and working strengths.</h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-muted-foreground">A practical toolkit for analytics, AI-assisted development, automation and product delivery.</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {skillGroups.map((group) => <div key={group.title}><h3 className="border-b border-border pb-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">{group.title}</h3><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">{group.items.map(([label, file]) => <div key={label} className="group flex items-center gap-3 border border-border bg-card p-3 transition-colors hover:border-foreground"><img src={`/assets/tools/${file}.png`} alt="" className="size-9 rounded-sm object-cover" loading="lazy" /><span className="text-sm font-light">{label}</span></div>)}</div></div>)}
        </div>
        <div className="mt-14 border-t border-border pt-8"><p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">Professional strengths</p><div className="mt-5 flex flex-wrap gap-2">{softSkills.map((skill) => <span key={skill} className="border border-border px-4 py-2 text-sm font-light">{skill}</span>)}</div></div>
      </div>
    </section>
  );
}
