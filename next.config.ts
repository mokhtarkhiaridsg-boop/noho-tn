import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      /*
       * Tounsi became the default locale in 2026-08 and moved from /tn to the
       * bare path (French moved the other way, to /fr). Every /tn URL that is
       * already indexed or shared keeps working through this one rule.
       */
      { source: "/tn", destination: "/", permanent: true },
      { source: "/tn/:path*", destination: "/:path*", permanent: true },

      { source: "/retainer", destination: "/suivi-mensuel", permanent: true },
      { source: "/fr/retainer", destination: "/fr/suivi-mensuel", permanent: true },
      { source: "/ar/retainer", destination: "/ar/suivi-mensuel", permanent: true },
      { source: "/en/retainer", destination: "/en/suivi-mensuel", permanent: true },
      // Campaign-friendly Pillar-1 slug → canonical address/colis hub.
      { source: "/adresse-us", destination: "/virtual-mailbox", permanent: true },
      { source: "/fr/adresse-us", destination: "/fr/virtual-mailbox", permanent: true },
      { source: "/ar/adresse-us", destination: "/ar/virtual-mailbox", permanent: true },
      { source: "/en/adresse-us", destination: "/en/virtual-mailbox", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
