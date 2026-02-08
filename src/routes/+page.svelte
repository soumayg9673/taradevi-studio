<script lang="ts">
  import siteData from '$lib/data/site.json';
  import projectsData from '$lib/data/projects.json';

  const featuredProjects = projectsData.filter((p) => p.isFeatured);
  const accentColors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-lavender)'];
</script>

<svelte:head>
  <title>{siteData.seo.home.title}</title>
  <meta name="description" content={siteData.seo.home.description} />
  <meta name="keywords" content={siteData.seo.home.keywords} />
  <meta property="og:title" content={siteData.seo.home.title} />
  <meta property="og:description" content={siteData.seo.home.description} />
  <meta property="og:type" content="website" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
  <div class="hero-inner">
    <p class="hero-eyebrow">Creative Director · Art Director · Film Production</p>
    <h1 class="hero-summary">{siteData.summary}</h1>
  </div>
</section>

<div class="divider"></div>

<!-- Featured Projects -->
<section class="projects">
  <div class="projects-inner">
    <h2 class="section-heading">Selected Work</h2>
    {#each featuredProjects as project, i}
      <a href="/work/{project.slug}" class="project-card-link">
        <article class="project-card" style="--accent: {accentColors[i % accentColors.length]}">
          <div class="project-image">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          <div class="project-details">
            <span class="project-index">0{i + 1}</span>
            <span class="project-company">{project.company}</span>
            <h3 class="project-title">{project.title}</h3>
            <p class="project-note">{project.note}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            <span class="project-link">
              View Project <span class="arrow">→</span>
            </span>
          </div>
        </article>
      </a>
    {/each}
    <div class="view-all">
      <a href="/work">View all work →</a>
    </div>
  </div>
</section>

<style>
  /* Hero */
  .hero {
    padding: 8rem var(--page-pad) 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  .hero-inner {
    max-width: 860px;
    text-align: center;
  }

  .hero-eyebrow {
    font-family: var(--font-body);
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 2rem;
  }

  .hero-summary {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 4vw, 3rem);
    font-weight: 300;
    font-style: italic;
    line-height: 1.5;
    color: var(--color-text);
    letter-spacing: -0.01em;
  }

  .divider {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 0 var(--page-pad);
    border-top: 1px solid var(--color-border);
  }

  .project-card-link {
    display: block;
    text-decoration: none;
    color: inherit;
    margin-bottom: 2rem;
  }

  /* Projects */
  .projects {
    padding: 5rem var(--page-pad);
  }

  .projects-inner {
    max-width: var(--page-max);
    margin: 0 auto;
  }

  .section-heading {
    font-family: var(--font-body);
    font-size: 0.78rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 3rem;
  }

  .project-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5rem;
    align-items: center;
    padding: 2.5rem;
    border-radius: 4px;
    background-color: var(--accent);
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-card-link:hover .project-card {
    transform: translateY(-6px);
  }

  .project-image {
    border-radius: 2px;
    overflow: hidden;
    aspect-ratio: 4/3;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-card-link:hover .project-image img {
    transform: scale(1.04);
  }

  .project-details {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .project-index {
    font-family: var(--font-body);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    color: var(--color-muted);
  }

  .project-company {
    font-family: var(--font-body);
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  .project-title {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    font-weight: 400;
    line-height: 1.2;
    margin-top: 0.25rem;
  }

  .project-note {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-muted);
    line-height: 1.7;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.25rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.07);
    letter-spacing: 0.04em;
  }

  .project-link {
    margin-top: 0.75rem;
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--color-text);
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: gap 0.2s ease;
  }

  .project-link:hover {
    gap: 0.75rem;
  }

  .arrow {
    transition: transform 0.2s ease;
  }

  .project-link:hover .arrow {
    transform: translateX(4px);
  }

  .view-all {
    margin-top: 1rem;
    text-align: right;
  }

  .view-all a {
    font-family: var(--font-body);
    font-size: 0.85rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    color: var(--color-muted);
    transition: color 0.2s;
  }

  .view-all a:hover {
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    .hero {
      padding: 4rem var(--page-pad) 3rem;
    }

    .projects {
      padding: 3rem var(--page-pad);
    }

    .project-card {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.75rem;
    }
  }
</style>
