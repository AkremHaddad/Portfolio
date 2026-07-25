import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // next/image re-encodes every image it serves, defaulting to quality 75 -
    // that, not the host, is what softens the hero headshot and mushes the
    // fine text in the project screenshots. Raising it needs BOTH halves:
    // as of Next.js 16 `qualities` is an explicit allowlist (default [75]),
    // and a `quality` prop outside it silently snaps to the nearest allowed
    // value rather than erroring - so setting quality={90} alone would have
    // quietly kept serving 75.
    qualities: [75, 90],
    // AVIF first, WebP as the fallback for browsers without it (Next.js
    // content-negotiates automatically). AVIF at 90 is typically both
    // sharper and smaller than WebP at 75, so this buys back the quality
    // without paying for it in page weight.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
