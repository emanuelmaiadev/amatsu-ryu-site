import type { MetadataRoute } from "next";

import { env } from "@/lib/env";

const routes = [
  "/",
  "/portal",
  "/login",
  "/alunos",
  "/eventos",
  "/presencas",
  "/graduacoes",
  "/admin",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.siteUrl;
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.3,
  }));
}
