import Image from "next/image";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="pt-[92px]">
        {/* Hero */}
        <section className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-6 py-20 sm:px-14 sm:py-[90px] sm:pb-[140px] md:grid-cols-[1.1fr_0.9fr] md:gap-18">
          <div>
            <div className="mb-[22px] text-[13px] tracking-[0.08em] text-label uppercase">
              {site.role}
            </div>
            <h1 className="mb-7 font-display text-6xl leading-[0.98] font-extrabold tracking-tight sm:text-7xl lg:text-[76px]">
              {site.firstName}
              <br />
              {site.lastName}
            </h1>
            <p className="max-w-[480px] text-xl leading-[1.4] sm:text-2xl">
              {site.heroTagline}
            </p>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[18px]">
            <Image
              src="/images/me2.webp"
              alt={site.name}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Specialization */}
        <section
          id="about"
          className="mx-auto max-w-[1120px] border-t border-border px-6 py-16 pb-20 sm:px-14 sm:pb-[140px] scroll-mt-8"
        >
          <div className="mb-6 text-[13px] tracking-[0.08em] text-label uppercase">
            {site.specialization.eyebrow}
          </div>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            <h2 className="font-display text-4xl leading-[1.15] font-bold tracking-tight sm:text-[38px]">
              {site.specialization.heading}
            </h2>
            <div className="text-[17px] leading-[1.7] text-ink-60">
              {site.specialization.paragraphs.map((p) => (
                <p key={p} className="mb-5 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section
          id="work"
          className="mx-auto max-w-[1120px] px-6 pb-20 sm:px-14 sm:pb-[140px] scroll-mt-8"
        >
          <div className="mb-7 text-[13px] tracking-[0.08em] text-label uppercase">
            Selected Work
          </div>
          <div className="grid grid-cols-1 gap-11 sm:grid-cols-2 sm:gap-x-10">
            {site.work.map((item) => (
              <ProjectCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="mx-auto max-w-[1120px] border-t border-border px-6 py-16 pb-24 sm:px-14 sm:pb-[120px] scroll-mt-8"
        >
          <div className="mb-6 text-[13px] tracking-[0.08em] text-label uppercase">
            Contact
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[480px] font-display text-[34px] leading-tight font-bold tracking-tight">
              {site.contact.heading}
            </h2>
            <div className="flex flex-col gap-2.5 text-base">
              <a
                href={`mailto:${site.email}`}
                className="border-b border-border-strong hover:border-foreground transition-colors"
              >
                {site.email}
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border-strong hover:border-foreground transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={site.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-border-strong hover:border-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
