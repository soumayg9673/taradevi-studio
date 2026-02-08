<script lang="ts">
  import siteData from '$lib/data/site.json';
  import projectsData from '$lib/data/projects.json';

  const accentColors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-lavender)'];
</script>

<svelte:head>
  <title>Work — {siteData.name}</title>
  <meta name="description" content="Projects and work by {siteData.name} — Art Director, Creative Director, Film Production." />
</svelte:head>

<section class="work-page">
  <div class="work-inner">
    <header class="page-header">
      <p class="eyebrow">Portfolio</p>
      <h1 class="page-title">Work</h1>
    </header>

    <div class="projects-list">
      {#each projectsData as project, i}
        <a href="/work/{project.slug}" class="project-item" style="--accent: {accentColors[i % accentColors.length]}">
          <div class="project-thumb">
            <img src={project.image} alt={project.title} loading="lazy" />
          </div>
          <div class="project-info">
            <span class="project-num">0{i + 1}</span>
            <span class="project-company">{project.company}</span>
            <h2 class="project-title">{project.title}</h2>
            <p class="project-note">{project.note}</p>
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="tag">{tag}</span>
              {/each}
            </div>
            {#if project.videoUrl || project.presentationUrl}
              <div class="project-media">
                {#if project.videoUrl}
                  <button class="media-badge" onclick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.videoUrl, '_blank', 'noopener,noreferrer'); }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    {project.videoUrl.includes('youtube') ? 'YouTube' : 'Video'}
                  </button>
                {/if}
                {#if project.presentationUrl}
                  <button class="media-badge" onclick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.presentationUrl, '_blank', 'noopener,noreferrer'); }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    Slides
                  </button>
                {/if}
              </div>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .work-page {
    padding: 5rem var(--page-pad);
  }

  .work-inner {
    max-width: var(--page-max);
    margin: 0 auto;
  }

  .page-header {
    margin-bottom: 3.5rem;
  }

  .eyebrow {
    font-family: var(--font-body);
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-family: var(--font-display);
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 300;
    letter-spacing: -0.01em;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .project-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2.5rem;
    border-radius: 4px;
    background-color: var(--accent);
    transition: transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .project-item:hover {
    transform: translateY(-5px);
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

  .project-num {
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
    font-size: clamp(1.3rem, 2vw, 1.9rem);
    font-weight: 400;
    line-height: 1.2;
    margin-top: 0.2rem;
  }

  .project-note {
    font-family: var(--font-body);
    font-size: 0.88rem;
    color: var(--color-muted);
    line-height: 1.7;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.2rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.07);
    letter-spacing: 0.04em;
  }

  .project-media {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.4rem;
  }

  .media-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-body);
    font-size: 0.7rem;
    padding: 0.25rem 0.75rem;
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.12);
    letter-spacing: 0.04em;
    text-decoration: none;
    color: inherit;
    transition: background-color 0.2s ease;
  }

  .media-badge:hover {
    background-color: rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 768px) {
    .work-page {
      padding: 3rem var(--page-pad);
    }

    .project-item {
      grid-template-columns: 1fr;
      gap: 1.25rem;
      padding: 1.75rem;
    }
  }
</style>
