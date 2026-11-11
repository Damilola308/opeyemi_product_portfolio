'use client';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project, index = 0, featured = false }: { project: Project; index?: number; featured?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`project-card-wrap ${featured ? 'featured' : ''}`}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.75, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className={`project-card ${project.accent}`}>
        <div className="project-art image-art">
          <img src={`/projects/${project.slug}/hero.webp`} alt={`${project.name} project overview`} />
          <span className="art-index">{project.number}</span>
        </div>
        <div className="project-info">
          <div className="project-meta">
            <span>{featured ? 'FEATURED / ' : ''}{project.type}{project.type === 'DESIGNED' ? ' / CONCEPT' : ' / PRODUCT'}</span>
            <ArrowUpRight size={17} />
          </div>
          <h3>{project.name}</h3>
          <p>{project.summary}</p>
          <small>{project.tools.slice(0, 3).join(' · ')}</small>
        </div>
      </Link>
    </motion.div>
  );
}
