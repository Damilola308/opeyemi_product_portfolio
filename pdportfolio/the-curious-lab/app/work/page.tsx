import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
export default function Work(){return <div className="inner-page"><span className="section-index">02 / SELECTED WORK</span><h1 className="page-title">Ideas made <em>tangible.</em></h1><p className="lead narrow">A collection of product concepts I've designed, each labelled clearly so the scope of the work is easy to understand.</p><div className="project-grid work-grid">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} index={i}/>)}</div></div>}
