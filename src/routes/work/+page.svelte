<script lang="ts">
  import siteData from '$lib/data/site.json';
  import projectsData from '$lib/data/projects.json';
</script>

<svelte:head>
  <title>{siteData.seo.work.title}</title>
  <meta name="description" content={siteData.seo.work.description} />
  <meta name="keywords" content={siteData.seo.work.keywords} />
  <meta property="og:title" content={siteData.seo.work.title} />
  <meta property="og:description" content={siteData.seo.work.description} />
  <meta property="og:type" content="website" />
</svelte:head>

<section class="work-page">
  <div class="work-header">
    <p class="eyebrow">Portfolio</p>
    <h1 class="page-title">Work</h1>
  </div>

  <div class="projects-list">
    {#each projectsData as project, i}
      <a href="/work/{project.slug}" class="project-item" style="--accent: {project.color}">
        <div class="project-item-inner">
          <div class="project-thumb">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          <div class="project-info">
            <h2 class="project-title">{project.title}</h2>
            <p class="project-note">{project.note}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .work-page {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }

  .work-header {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 0 var(--page-pad);
    margin-bottom: 3.5rem;
  }

  .eyebrow {
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .page-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 8vw, 7rem);
    font-weight: 300;
    letter-spacing: -0.02em;
    line-height: 0.95;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .project-item {
    background-color: var(--accent);
    transition: transform 0.3s ease;
  }

  .project-item-inner {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 2.5rem var(--page-pad);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .project-item:hover {
    transform: translateY(-3px);
  }

  .project-item:nth-child(even) .project-thumb {
    order: 2;
  }

  .project-thumb {
    border-radius: 2px;
    overflow: hidden;
    aspect-ratio: 4/3;
    background-color: rgba(0, 0, 0, 0.04);
  }

  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .project-item:hover .project-thumb img {
    transform: scale(1.04);
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .project-title {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2.2vw, 2rem);
    font-weight: 300;
    line-height: 1.15;
    margin-top: 0.25rem;
    letter-spacing: -0.01em;
  }

  .project-note {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--color-muted);
    line-height: 1.75;
    letter-spacing: 0.01em;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.2rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.62rem;
    padding: 0.2rem 0.6rem;
    border-radius: 0;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.18);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .work-page {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .project-item-inner {
      grid-template-columns: 1fr;
      gap: 1.25rem;
      padding: 1.75rem var(--page-pad);
    }
  }
</style>
