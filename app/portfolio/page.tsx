/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { FEATURED_PROJECTS } from '@/lib/site-data';

interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  order?: number;
}

interface PortfolioResponse {
  data?: PortfolioProject[];
}

const defaultPortfolios: PortfolioProject[] = FEATURED_PROJECTS.map((project) => ({
  ...project,
}));

function isRenderablePortfolio(project: Partial<PortfolioProject> | null | undefined): project is PortfolioProject {
  return Boolean(
    project &&
      typeof project.id === 'number' &&
      typeof project.title === 'string' &&
      project.title.trim() &&
      typeof project.description === 'string' &&
      project.description.trim() &&
      typeof project.image === 'string' &&
      project.image.trim() &&
      typeof project.link === 'string' &&
      project.link.trim() &&
      typeof project.category === 'string' &&
      project.category.trim()
  );
}

function mergePortfolios(base: PortfolioProject[], remote: PortfolioProject[]) {
  const seen = new Set(base.map((project) => `${project.title}|${project.link}`));
  const merged = [...base];

  for (const project of remote) {
    const key = `${project.title}|${project.link}`;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(project);
  }

  return merged;
}

export default function PortfolioPage() {
  const [portfolios, setPortfolios] = useState<PortfolioProject[]>(defaultPortfolios);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const data = (await response.json()) as PortfolioResponse;

        const apiPortfolios = (data.data ?? []).filter(isRenderablePortfolio);

        if (isMounted && apiPortfolios.length) {
          setPortfolios(mergePortfolios(defaultPortfolios, apiPortfolios));
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadPortfolio();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] px-5 py-20 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-black uppercase text-[#ffcc00] sm:text-xl">Our Work</p>
          <h1 className="mt-3 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">Our Portfolio</h1>
          <p className="mt-5 text-base leading-7 text-white/65">
            Explore a small, approved selection of projects that show how we help businesses transform their digital presence.
          </p>
          <p className="mt-3 text-sm text-white/45">
            More approved projects will be added as they are published.
          </p>
        </div>

        {loading && <p className="mt-10 text-center text-sm text-white/55">Loading projects...</p>}

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {portfolios.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-lg border border-white/15 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#ffcc00]/65">
              <div className="relative h-52 overflow-hidden bg-[#111]">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <div className="grid h-full place-items-center bg-[linear-gradient(135deg,#151515,#282000)] px-6 text-center text-lg font-black text-white">
                    {project.title}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-flex rounded-md bg-[#ffcc00] px-3 py-1 text-xs font-black text-black">
                  {project.category}
                </span>
                <h2 className="mt-4 text-2xl font-black leading-tight text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/62">{project.description}</p>
                {project.link && (
                  <a href={project.link} className="mt-5 inline-flex text-sm font-black text-[#ffcc00] transition hover:text-white">
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
