import Link from 'next/link';
import Image from 'next/image';
import { getSortedProjectsData } from '../lib/projects';

export default function Home() {
  const projects = getSortedProjectsData();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* --- Section 1: Professional Bio --- */}
      <section className="max-w-5xl mx-auto pt-24 pb-16 px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          <div className="shrink-0">
            <div className="relative w-44 h-44 md:w-52 md:h-52 rotate-[-3deg] rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-slate-200">
              <div className="absolute inset-0 pointer-events-none ring-4 ring-white/90" />
              <Image
                src="/images/Headshot.jpg"
                alt="Aadit Noronha headshot"
                fill
                priority
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight mb-2">
              Aadit Noronha
            </h1>
            <p className="text-xl text-blue-600 font-semibold mb-6">
              Software & Robotics Engineer
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in high-performance control systems, ML in robotics, and full-stack systems. 
              From world-finalist robotics stacks to embedded systems, I build projects that bridge the gap between code and hardware.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto text-center md:text-right text-sm text-slate-600">
            <div className="font-semibold text-slate-900">Contact</div>
            <a
              className="block hover:text-blue-700 transition-colors"
              href="mailto:aadit.noronha@gmail.com"
            >
              aadit.noronha@gmail.com
            </a>
            <a
              className="block hover:text-blue-700 transition-colors"
              href="tel:+14084823517"
            >
              (408) 482 3517
            </a>
          </div>
        </div>
      </section>

      {/* --- Section 2: Horizontal Scroll Project View --- */}
      <section className="w-full py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <h3 className="text-3xl font-bold tracking-tight">Featured Projects</h3>
          <p className="text-slate-500">Scroll horizontally to explore my work</p>
        </div>

        {/* Horizontal Container */}
        <div className="flex overflow-x-auto pb-12 px-6 gap-8 snap-x snap-mandatory scrollbar-hide">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/projects/${project.slug}`}
              className="snap-center shrink-0"
            >
              <div className="w-[350px] h-[500px] bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group border border-slate-100">
                
                {/* Header Image */}
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>

                {/* Placard Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-bold mb-3 text-slate-800 leading-tight">
                    {project.title}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.labels.slice(0, 3).map((label) => (
                      <span 
                        key={label} 
                        className="text-[10px] uppercase tracking-wider font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 mb-4">
                    {project.summary}
                  </p>
                  
                  <div className="mt-auto text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Project Details <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* Spacer for end of scroll */}
          <div className="shrink-0 w-6" />
        </div>
      </section>
    </main>
  );
}