import {Link} from "react-router-dom"

type Props = { 
  title: string; 
  description: string; 
  image: string; 
  tags: string[]; 
  linkLabel: string; 
  slug: string; 
};


export default function ProjectCard({ title, description, image, tags, linkLabel, slug }: Props) { 
  return ( 
  <article className="group bg-white rounded-xl border overflow-hidden hover:shadow-xl transition"> 
    <div className="h-56 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${image})` }} /> 
    <div className="p-6 flex flex-col gap-4"> 
        <div className="flex gap-2 flex-wrap"> 
          {tags.map((tag, i) => ( 
            <span key={i} className="text-xs px-2 py-1 rounded bg-slate-100" > {tag} </span>
          ))} 
        </div> 
        <h3 className="text-xl font-bold">{title}</h3> 
        <p className="text-slate-500 text-sm">{description}</p> 
        <Link to={slug} className="text-primary font-semibold text-sm"> {linkLabel} → </Link> 
      </div> 
    </article> 
  );
}