import { getProjectData, getSortedProjectsData } from '@/lib/projects';
import Link from 'next/link';

export async function generateStaticParams() {
  const projects = getSortedProjectsData();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const projectData = await getProjectData(slug);

  return (
    <div className="min-h-screen bg-white text-black selection:bg-blue-100">
      
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="text-black hover:text-blue-600 font-bold transition-colors flex items-center gap-2"
          >
            <span>&larr;</span> Back to Gallery
          </Link>
          <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 hidden sm:block">
            Project Detail View
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12 md:py-24">
        
        {/* Header Section */}
        <header className="mb-16">
            <div className="text-sm font-bold text-blue-600 mb-4 tracking-widest uppercase">
              {projectData.date}
            </div>

            <h1 className="text-5xl md:text-5xl ... text-balance">
            {projectData.title}
          </h1>
                      
            <div className="flex flex-wrap gap-2 mb-16">
                {projectData.labels.map((label: string) => (
                    <span 
                      key={label} 
                      className="bg-gray-100 border border-gray-200 text-black px-3 py-1.5 rounded-lg text-xs font-bold"
                    >
                        {label}
                    </span>
                ))}
            </div>

            {/* Summary Highlight Box */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium italic">
                  {projectData.summary}
              </p>
            </div>
        </header>

        {/* Content Body - No Drop Caps */}
        <article 
          suppressHydrationWarning={true} 
          className="prose prose-xl prose-slate max-w-none 
                 prose-headings:text-black prose-headings:font-black
                 prose-p:text-gray-900 prose-p:leading-relaxed prose-p:mb-8
                 prose-strong:text-black
                 prose-img:rounded-[2rem] prose-img:shadow-2xl prose-img:my-16
                 prose-video:rounded-[2rem] prose-video:shadow-2xl prose-video:my-16"
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml || '' }}
        />
        
        {/* Footer Navigation */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-center">
            <Link 
              href="/" 
              className="inline-block bg-black text-white px-10 py-4 rounded-full font-black hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-1"
            >
                Explore More Work
            </Link>
        </div>
      </main>
    </div>
  );
}