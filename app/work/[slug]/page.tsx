import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../lib/content';
import styles from './case.module.scss';

const siteUrl = 'https://sunil-human-variable.rarefern512.chatgpt.site';
type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `${siteUrl}/work/${project.slug}/` },
    openGraph: {
      title: `${project.title} — a case study by Sunil Singh Chaisir`,
      description: project.summary,
      url: `${siteUrl}/work/${project.slug}/`,
      type: 'article',
    },
  };
}

export default async function CaseStudy({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/work/${project.slug}/`,
    author: {
      '@type': 'Person',
      name: 'Sunil Singh Chaisir',
      url: siteUrl,
      sameAs: ['https://www.linkedin.com/in/sunil1singh/'],
    },
    genre: project.category,
    text: [project.context, project.contribution, project.outcome, project.learning].join('\n\n'),
  };

  return (
    <div className={styles.page} style={{ '--case-accent': project.color } as CSSProperties}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <a className={styles.skipLink} href="#case-content">Skip to case study</a>
      <header className={styles.header}>
        <Link className={styles.identity} href="/">The Human Variable</Link>
        <nav aria-label="Case study navigation">
          <Link href="/#archive">All work</Link>
          <Link href="/#contact">Let’s connect</Link>
        </nav>
      </header>

      <main id="case-content">
        <section className={styles.hero} aria-labelledby="project-title">
          <p className={styles.eyebrow}>From the archive / {project.category}</p>
          <h1 id="project-title">{project.title}</h1>
          <div className={styles.intro}>
            <p className={styles.summary}>{project.summary}</p>
            <dl className={styles.details}>
              <div><dt>My role</dt><dd>{project.role}</dd></div>
              <div><dt>Timeline</dt><dd>{project.period}</dd></div>
            </dl>
          </div>
          <div className={styles.statement}>
            <p>{project.subtitle}</p>
            <span>Strategy / people / practice</span>
            <div className={styles.orbit} aria-hidden="true" />
          </div>
        </section>

        <section className={styles.reading} aria-labelledby="context-heading">
          <div className={styles.sectionLabel}>The starting point</div>
          <div className={styles.readingBody}>
            <h2 id="context-heading">A real business.<br /><em>A real question.</em></h2>
            <p>{project.context}</p>
          </div>
        </section>

        <section className={styles.contribution} aria-labelledby="contribution-heading">
          <div>
            <p className={styles.eyebrow}>My contribution</p>
            <h2 id="contribution-heading">Where I<br /><em>came in.</em></h2>
          </div>
          <div className={styles.contributionBody}>
            <p>{project.contribution}</p>
            <h3>How the work took shape</h3>
            <ul>{project.approach.map((step) => <li key={step}>{step}</li>)}</ul>
          </div>
        </section>

        <section className={styles.results} aria-labelledby="results-heading">
          <div className={styles.resultsHeader}>
            <p className={styles.eyebrow}>Evidence & context</p>
            <h2 id="results-heading">The signal.</h2>
          </div>
          <dl className={styles.metrics}>
            {project.metrics.map((metric) => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
          </dl>
          <p className={styles.outcome}>{project.outcome}</p>
          {project.slug === 'nirmala-home-kitchen' && <p className={styles.sourceNote}>Source: supplied professional profile, November 2026. Brand-reported 2026 snapshots; these figures are not live.</p>}
          {project.slug === 'muso' && <p className={styles.sourceNote}>Source: company-acknowledged team totals, September–November 2026, as recorded in the supplied professional profile.</p>}
          {project.slug === 'sabera' && <p className={styles.sourceNote}>Source: reported project outcomes in the supplied professional profile, November 2026.</p>}
        </section>

        <section className={styles.learning} aria-labelledby="learning-heading">
          <p className={styles.eyebrow} id="learning-heading">What stayed with me</p>
          <blockquote>{project.learning}</blockquote>
          <div className={styles.links}>
            {project.links.map((link) => <a key={link.url} href={link.url}>{link.label}</a>)}
          </div>
        </section>

        <section className={styles.next} aria-labelledby="next-heading">
          <p className={styles.eyebrow}>Keep exploring</p>
          <Link href={`/work/${nextProject.slug}/`}>
            <h2 id="next-heading">{nextProject.title}</h2>
            <span>Read the next case study</span>
          </Link>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Many worlds. One evolving story.</Link>
        <a href="mailto:sunilchaisir22187@gmail.com">sunilchaisir22187@gmail.com</a>
      </footer>
    </div>
  );
}
