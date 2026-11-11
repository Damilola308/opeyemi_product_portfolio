import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Work', description: 'Product design concepts by Opeyemi Ogunbona: Pawluck, Ona, Ajo, Hallchop, Cura HMO and Rapada.' };
export default function Work(){return <div className="inner-page"><span className="section-index">02 / SELECTED WORK</span><h1 className="page-title">Problems first.<br /><em>Screens second.</em></h1><p className="lead narrow">Product concepts that start with a real problem, then show the thinking and the screens.</p><div className="project-grid work-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div>}
