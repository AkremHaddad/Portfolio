import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies, site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) return {};
  return {
    title: `${study.name} — Akram Haddad`,
    description: study.problem[0],
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();

  const workItem = site.work.find((w) => w.real && w.slug === slug);
  const shots = workItem && workItem.real
    ? workItem.shots.filter((shot) => !shot.hideInGallery)
    : [];

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[900px] px-6 pt-[92px] pb-[140px] sm:px-14">
        <div className="mt-11 mb-4 text-[13px] tracking-[0.08em] text-label uppercase">
          Case Study
        </div>
        <h1 className="mb-10 font-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
          {study.name}
        </h1>

        <div className="mb-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-b border-border py-[18px] text-sm text-muted">
          <span>{study.category}</span>
          <span>·</span>
          <span>{study.scope}</span>
          <span>·</span>
          <a
            href={study.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-border-strong hover:border-foreground transition-colors"
          >
            {study.liveLabel}
          </a>
        </div>

        {shots.length > 0 && (
          <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {shots.map((shot) => (
              <div
                key={shot.src}
                className={`overflow-hidden rounded border border-border ${
                  shot.wide ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  quality={90}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>
        )}

        <Row label="The Problem">
          {study.problem.map((p) => (
            <p key={p} className="mb-[18px] leading-[1.75] last:mb-0">
              {p}
            </p>
          ))}
        </Row>

        <Row label="Architecture">
          <p className="mb-8 leading-[1.75]">{study.architecture.intro}</p>
          <div className="flex items-stretch font-mono text-[13px]">
            {study.architecture.steps.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <div className="flex items-center px-3.5 text-faint">→</div>
                )}
                <div className="flex-1 rounded border border-border-strong px-4 py-[18px] text-center text-foreground">
                  {step.title}
                  <br />
                  <span className="text-label">{step.subtitle}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </Row>

        <Row label="Decisions & Trade-offs">
          <div className="flex flex-col gap-7">
            {study.decisions.map((d) => (
              <div key={d.title}>
                <div className="mb-1.5 text-base font-semibold">{d.title}</div>
                <div className="text-base leading-[1.7] text-ink-60">
                  {d.body}
                </div>
              </div>
            ))}
          </div>
        </Row>

        <Row label="Outcome" last>
          {study.outcome.map((p) => (
            <p key={p} className="leading-[1.75]">
              {p}
            </p>
          ))}
        </Row>
      </main>
    </div>
  );
}

function Row({
  label,
  last,
  children,
}: {
  label: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-6 sm:grid-cols-[200px_1fr] sm:gap-10 ${
        last ? "" : "mb-14"
      }`}
    >
      <div className="font-display text-[15px] font-bold">{label}</div>
      <div className="text-[17px] text-ink-70">{children}</div>
    </div>
  );
}
