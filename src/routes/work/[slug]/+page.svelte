<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  const accentColors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-lavender)'];

  function getVideoEmbedUrl(url: string): string | null {
    if (!url) return null;
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
    if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;
    const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
    if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;
    return null;
  }

  function getSlidesEmbedUrl(url: string): string | null {
    if (!url) return null;
    const match = url.match(/docs\.google\.com\/presentation\/d\/([^/]+)/);
    if (match) return `https://docs.google.com/presentation/d/${match[1]}/embed?start=false&loop=false`;
    return null;
  }
</script>

<svelte:head>
  <title>{data.project.seo.title}</title>
  <meta name="description" content={data.project.seo.description} />
  <meta name="keywords" content={data.project.seo.keywords} />
  <meta property="og:title" content={data.project.seo.title} />
  <meta property="og:description" content={data.project.seo.description} />
  <meta property="og:type" content="article" />
</svelte:head>

<article class="project-page">
  <div class="project-inner">
    <!-- Back -->
    <a href="/work" class="back-link">← All Work</a>

    <!-- Header -->
    <header class="project-header">
      <span class="project-company">{data.project.company}</span>
      <h1 class="project-title">{data.project.title}</h1>
      <div class="project-tags">
        {#each data.project.tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    </header>

    <!-- Images -->
    <div class="project-images">
      {#each data.project.images as img}
        <img src={img} alt={data.project.title} loading="lazy" />
      {/each}
    </div>

    <!-- Videos -->
    {#if data.project.videos && data.project.videos.length > 0}
      {@const reels = data.project.videos.filter((v: {url: string, type: string}) => v.type === 'reel')}
      {@const landscapes = data.project.videos.filter((v: {url: string, type: string}) => v.type === 'landscape')}

      {#if landscapes.length > 0}
        <div class="video-section">
          <p class="media-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Videos
          </p>
          <div class="landscape-videos">
            {#each landscapes as video, i}
              {#if getVideoEmbedUrl(video.url)}
                <div class="embed-frame landscape">
                  <iframe src={getVideoEmbedUrl(video.url) ?? ''} title="Video {i + 1}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}

      {#if reels.length > 0}
        <div class="video-section">
          <p class="media-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Reels
          </p>
          <div class="reel-videos">
            {#each reels as video, i}
              {#if getVideoEmbedUrl(video.url)}
                <div class="embed-frame reel">
                  <iframe src={getVideoEmbedUrl(video.url) ?? ''} title="Reel {i + 1}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
              {/if}
            {/each}
          </div>
        </div>
      {/if}
    {/if}

    <!-- Presentation -->
    {#if getSlidesEmbedUrl(data.project.presentationUrl ?? '')}
      <div class="video-section">
        <p class="media-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
          Presentation
        </p>
        <div class="embed-frame landscape">
          <iframe src={getSlidesEmbedUrl(data.project.presentationUrl ?? '') ?? ''} title="Project presentation" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    {/if}

    <!-- Description & Link -->
    <div class="project-body">
      <p class="project-description">{data.project.description}</p>

      {#if (data.project.plan && data.project.plan.length > 0) || (data.project.strategy && data.project.strategy.length > 0)}
        <div class="project-breakdown">
          {#if data.project.plan && data.project.plan.length > 0}
            <div class="breakdown-section">
              <h3 class="breakdown-title">Plan</h3>
              <ul class="breakdown-list">
                {#each data.project.plan as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
          {/if}
          {#if data.project.strategy && data.project.strategy.length > 0}
            <div class="breakdown-section">
              <h3 class="breakdown-title">Strategy</h3>
              <ul class="breakdown-list">
                {#each data.project.strategy as item}
                  <li>{item}</li>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      {/if}

      <a href={data.project.link} target="_blank" rel="noopener noreferrer" class="project-link">
        View Full Project <span class="arrow">→</span>
      </a>
    </div>

    <!-- Related Work -->
    {#if data.related.length > 0}
      <section class="related">
        <h2 class="related-label">Related Work</h2>
        <div class="related-grid">
          {#each data.related as rel, i}
            <a href="/work/{rel.slug}" class="related-item" style="--accent: {accentColors[i % accentColors.length]}">
              <div class="related-thumb">
                <img src={rel.image} alt={rel.title} loading="lazy" />
              </div>
              <span class="related-company">{rel.company}</span>
              <h3 class="related-name">{rel.title}</h3>
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</article>

<style>
  .project-page {
    padding: 3.5rem var(--page-pad);
  }

  .project-inner {
    max-width: 960px;
    margin: 0 auto;
  }

  .back-link {
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-muted);
    transition: color 0.3s;
    font-weight: 400;
  }

  .back-link:hover {
    color: var(--color-text);
  }

  .project-header {
    margin: 2.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-company {
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-muted);
    font-weight: 400;
  }

  .project-title {
    font-family: var(--font-display);
    font-size: clamp(2.2rem, 5.5vw, 4rem);
    font-weight: 300;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }

  .tag {
    font-family: var(--font-body);
    font-size: 0.62rem;
    padding: 0.22rem 0.75rem;
    border-radius: 999px;
    background-color: var(--color-lavender);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-images {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 2.5rem 0;
  }

  .project-images img {
    width: 100%;
    border-radius: 14px;
    object-fit: cover;
  }

  /* Video sections */
  .video-section {
    margin: 2.5rem 0;
  }

  .media-label {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-family: var(--font-body);
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 0.75rem;
    font-weight: 400;
  }

  .landscape-videos {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .reel-videos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .embed-frame {
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    background-color: #000;
  }

  .embed-frame.landscape {
    width: 100%;
    padding-bottom: 56.25%;
  }

  .embed-frame.reel {
    padding-bottom: 177.78%; /* 9:16 */
  }

  .embed-frame iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  .project-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0 4rem;
  }

  .project-description {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.9;
    letter-spacing: 0.01em;
  }

  .project-breakdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    border-radius: 14px;
    background-color: var(--color-lavender);
  }

  .breakdown-title {
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 1rem;
  }

  .breakdown-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .breakdown-list li {
    font-family: var(--font-body);
    font-size: 0.85rem;
    line-height: 1.7;
    padding-left: 1.1rem;
    position: relative;
    letter-spacing: 0.01em;
  }

  .breakdown-list li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: var(--color-muted);
  }

  .project-link {
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-text);
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: gap 0.25s ease;
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

  /* Related */
  .related {
    border-top: 1px solid var(--color-border);
    padding-top: 3rem;
  }

  .related-label {
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 400;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 1.5rem;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .related-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 12px;
    background-color: var(--accent);
    transition: transform 0.25s ease;
  }

  .related-item:hover {
    transform: translateY(-4px);
  }

  .related-thumb {
    border-radius: 8px;
    overflow: hidden;
    aspect-ratio: 4/3;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .related-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .related-company {
    font-family: var(--font-body);
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-muted);
    font-weight: 400;
  }

  .related-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.01em;
  }

  @media (max-width: 768px) {
    .project-page {
      padding: 2rem var(--page-pad);
    }

    .reel-videos {
      grid-template-columns: repeat(2, 1fr);
    }

    .project-breakdown {
      grid-template-columns: 1fr;
    }

    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
