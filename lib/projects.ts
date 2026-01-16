import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content');

export interface ProjectData {
  slug: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  labels: string[];
  contentHtml?: string;
}

export function getSortedProjectsData(): ProjectData[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // FIX: Convert Date object to string to prevent React "Object" error
    const dateValue = matterResult.data.date instanceof Date 
      ? matterResult.data.date.toISOString().split('T')[0] 
      : matterResult.data.date;

    const rawPermalink = matterResult.data.permalink || '';
    return {
      slug: rawPermalink.split('/').pop() || fileName.replace(/\.md$/, ''),
      ...(matterResult.data as any),
      date: dateValue,
    };
  });
  return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getProjectData(slug: string) {
  if (!slug) throw new Error("Project slug is undefined");

  const fileNames = fs.readdirSync(projectsDirectory);
  const matchedFile = fileNames.find(fileName => {
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    if (!matterResult.data.permalink) return false;
    const projectPermalink = matterResult.data.permalink.toLowerCase().replace(/\/$/, '');
    return projectPermalink.endsWith(slug.toLowerCase());
  });

  if (!matchedFile) throw new Error(`Project not found for slug: ${slug}`);

  const fullPath = path.join(projectsDirectory, matchedFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // Formatting the date nicely for the UI
  const dateValue = matterResult.data.date instanceof Date 
    ? matterResult.data.date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }) 
    : matterResult.data.date;

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as any),
    date: dateValue,
  };
}