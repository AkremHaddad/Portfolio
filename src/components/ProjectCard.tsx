"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { WorkItem } from "@/content/site";

const stripeBg = {
  backgroundImage:
    "repeating-linear-gradient(135deg, var(--tile), var(--tile) 10px, var(--tile-alt) 10px, var(--tile-alt) 20px)",
};

export function ProjectCard({ item }: { item: WorkItem }) {
  if (!item.real) {
    return (
      <div className="rounded border border-dashed border-dash flex min-h-[340px] flex-col justify-between p-7">
        <div
          className="mb-5 flex aspect-[16/10] items-center justify-center rounded-sm font-mono text-xs text-label"
          style={stripeBg}
        >
          open project slot
        </div>
        <div className="mb-1.5 font-display text-xl font-bold text-label">
          {item.name}
        </div>
        <div className="text-sm text-placeholder-text">Next project goes here.</div>
      </div>
    );
  }

  return <RealProjectCard item={item} />;
}

function RealProjectCard({
  item,
}: {
  item: Extract<WorkItem, { real: true }>;
}) {
  const router = useRouter();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % item.shots.length);
    }, 3500);
    return () => clearInterval(id);
  }, [item.shots.length]);

  const open = () => router.push(`/work/${item.slug}`);

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter") open();
      }}
      className="cursor-pointer overflow-hidden rounded border border-border transition-colors hover:border-border-strong"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-tile">
        {item.shots.map((shot, i) => (
          <div
            key={shot.src}
            className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="px-6 pt-[22px] pb-[26px]">
        <div className="mb-1.5 font-display text-xl font-bold">{item.name}</div>
        <div className="mb-4 text-[14.5px] leading-normal text-muted">
          {item.description}
        </div>
        <div className="flex gap-5 text-[13.5px]">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="border-b border-border-strong hover:border-foreground transition-colors"
          >
            Visit site ↗
          </a>
          {item.github && (
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="border-b border-border-strong hover:border-foreground transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
