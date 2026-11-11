import { notFound } from 'next/navigation';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=projects.find(x=>x.slug===slug);return p?{title:p.name,description:p.summary}:{};}
export function generateStaticParams(){return projects.map(p=>({slug:p.slug}));}
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const project=projects.find(p=>p.slug===slug); if(!project) notFound();
 return <article className="inner-page case-page">
  <Link href="/work" className="back-link"><ArrowLeft size={15}/> ALL PROJECTS</Link>
  <span className="section-index">{project.number} / {project.type}{project.type==='DESIGNED'?' CONCEPT':''}</span>
  <h1 className="page-title">{project.name}<em>.</em></h1><p className="lead narrow">{project.description}</p>
  {project.snapshot&&<div className="case-snapshot"><div><small>PROBLEM</small><p>{project.snapshot.problem}</p></div><div><small>SOLUTION</small><p>{project.snapshot.solution}</p></div><div><small>MY ROLE</small><p>{project.role}</p></div></div>}
  <div className="case-hero-image"><img src={`/projects/${project.slug}/hero.webp`} alt={`${project.name} project overview`}/></div>
  <div className="case-meta"><div><small>MY ROLE</small><p>{project.role}</p></div><div><small>TOOLS / TECHNOLOGY</small><p>{project.tools.join(' · ')}</p></div></div>
  <h2 className="case-heading">The thinking behind it.</h2>{project.details.map((d,i)=>{const m=d.match(/^([A-Z][^:.]{2,30}):\s+([\s\S]+)$/);return m?<div key={i}><h3 className="case-sub">{m[1]}</h3><p className="case-paragraph">{m[2]}</p></div>:<p className="case-paragraph" key={i}>{d}</p>;})}
  <h2 className="case-heading">Product screens.</h2><p className="case-paragraph">A closer look at the key flows represented in this concept.</p>
  <div className="case-gallery">{project.screens.map((screen,i)=><figure key={screen}><img src={`/projects/${project.slug}/mockup-${String(i+1).padStart(2,'0')}.webp`} alt={`${project.name}: ${screen}`}/><figcaption><span>0{i+1}</span>{screen}</figcaption></figure>)}</div>
  <div className="case-disclaimer"><strong>Project status & scope</strong><p>{project.disclaimer}</p></div>
 </article>;
}
