import { error } from '@sveltejs/kit';
import projectsData from '$lib/data/projects.json';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    error(404, 'Project not found');
  }

  const related = projectsData.filter((p) => p.slug !== params.slug).slice(0, 3);

  return { project, related };
};
