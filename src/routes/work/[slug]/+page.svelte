<script lang="ts">
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

  let lightboxSrc = $state<string | null>(null);

  function openLightbox(src: string) {
    lightboxSrc = src;
  }

  function closeLightbox() {
    lightboxSrc = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && lightboxSrc) closeLightbox();
  }

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
      <h1 class="project-title">{data.project.title}</h1>
      <div class="project-tags">
        {#each data.project.tags as tag}
          <span class="tag" style="background-color: {data.project.color}">{tag}</span>
        {/each}
      </div>
    </header>

    <!-- Description above images for personal projects -->
    {#if data.project.isPersonal}
      <div class="project-description">
        {#each data.project.description as paragraph}
          <p>{paragraph}</p>
        {/each}
      </div>
    {/if}

    <!-- Media -->
    {#if data.project.media && data.project.media.length > 0}
      {@const groups = (() => {
        const result: Array<{ type: string; grid: boolean; topic?: string; brief?: string[]; items: Array<{ type: string; url: string; grid?: boolean; note?: string[]; topic?: string; brief?: string[] }> }> = [];
        for (const item of data.project.media) {
          const last = result[result.length - 1];
          const itemGrid = !!(item as any).grid;
          const itemTopic = (item as any).topic;
          const itemBrief = (item as any).brief;
          if (last && last.type === item.type && last.grid === itemGrid && !itemTopic) {
            last.items.push(item);
          } else {
            result.push({ type: item.type, grid: itemGrid, topic: itemTopic, brief: itemBrief, items: [item] });
          }
        }
        return result;
      })()}

      <div class="project-media">
        {#each groups as group}
          {#if group.topic || group.brief}
            <div class="media-section-header">
              {#if group.topic}
                <h3 class="media-topic">{group.topic}</h3>
              {/if}
              {#if group.brief && group.brief.length > 0}
                <div class="media-note">
                  {#each group.brief as paragraph}
                    <p>{paragraph}</p>
                  {/each}
                </div>
              {/if}
            </div>
          {/if}
          {#if group.type === 'photo'}
            <div class="media-group {group.grid ? 'photo-grid' : 'photo-stack'}">
              {#each group.items as item}
                <figure class="media-figure">
                  <button class="lightbox-trigger" onclick={() => openLightbox(item.url)}>
                    <img src={item.url} alt={data.project.title} loading="lazy" />
                  </button>
                  {#if item.note && item.note.length > 0}
                    <figcaption class="media-note">
                      {#each item.note as paragraph}
                        <p>{paragraph}</p>
                      {/each}
                    </figcaption>
                  {/if}
                </figure>
              {/each}
            </div>
          {:else if group.type === 'reel'}
            <div class="media-group reel-grid">
              {#each group.items as item, i}
                {#if getVideoEmbedUrl(item.url)}
                  <div class="media-figure">
                    <div class="embed-frame reel">
                      <iframe src={getVideoEmbedUrl(item.url) ?? ''} title="Reel {i + 1}" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    {#if item.note && item.note.length > 0}
                      <div class="media-note">
                        {#each item.note as paragraph}
                          <p>{paragraph}</p>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/if}
              {/each}
            </div>
          {:else if group.type === 'landscape'}
            <div class="media-group landscape-stack">
              {#each group.items as item}
                {#if getVideoEmbedUrl(item.url)}
                  <div class="media-figure">
                    <div class="embed-frame landscape">
                      <iframe src={getVideoEmbedUrl(item.url) ?? ''} title="Video" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>
                    {#if item.note && item.note.length > 0}
                      <div class="media-note">
                        {#each item.note as paragraph}
                          <p>{paragraph}</p>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/if}
              {/each}
            </div>
          {/if}
        {/each}
      </div>
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
      {#if !data.project.isPersonal}
        <div class="project-description">
          {#each data.project.description as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      {/if}

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

      {#if data.project.link}
        <a href={data.project.link} target="_blank" rel="noopener noreferrer" class="project-link">
          View Full Project <span class="arrow">→</span>
        </a>
      {/if}
    </div>

    <!-- Related Work -->
    {#if data.related.length > 0}
      <section class="related">
        <h2 class="related-label">Related Work</h2>
        <div class="related-grid">
          {#each data.related as rel, i}
            <a href="/work/{rel.slug}" class="related-item" style="--accent: {rel.color}">
              <div class="related-thumb">
                <img src={rel.image} alt={rel.title} loading="lazy" />
              </div>
              <h3 class="related-name">{rel.title}</h3>
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </div>
</article>

<svelte:window onkeydown={handleKeydown} />

{#if lightboxSrc}
  <div class="lightbox-overlay" role="dialog" aria-modal="true">
    <button class="lightbox-backdrop" onclick={closeLightbox} aria-label="Close lightbox"></button>
    <button class="lightbox-close" onclick={closeLightbox} aria-label="Close">&times;</button>
    <img src={lightboxSrc} alt={data.project.title} />
  </div>
{/if}

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
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .project-media {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin: 2.5rem 0;
  }

  .media-section-header {
    margin-top: 2.5rem;
    margin-bottom: 0.25rem;
  }

  .media-topic {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.4;
    letter-spacing: -0.01em;
    color: var(--color-text);
    margin-bottom: 0.4rem;
  }

  .media-group {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* Photos: 1 per row (default) */
  .photo-stack {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* Photos: 2 per row on desktop/tablet (grid flag) */
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  .media-figure {
    margin: 0;
  }

  .media-note {
    margin-top: 0.6rem;
  }

  .media-note p {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--color-text);
    line-height: 1.75;
    letter-spacing: 0.01em;
    margin-bottom: 0.5rem;
  }

  .media-note p:last-child {
    margin-bottom: 0;
  }

  .photo-stack img,
  .photo-grid img {
    width: 100%;
    border-radius: 14px;
    object-fit: cover;
  }

  .photo-grid img {
    aspect-ratio: 1 / 1;
  }

  /* Reels: 3 per row on desktop/tablet */
  .reel-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  /* Landscape videos: full width, stacked */
  .landscape-stack {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

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
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-description p {
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

  .related-name {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.25;
    letter-spacing: 0.01em;
  }

  /* Lightbox trigger */
  .lightbox-trigger {
    all: unset;
    cursor: pointer;
    display: block;
    width: 100%;
  }

  .lightbox-trigger img {
    transition: opacity 0.2s ease;
  }

  .lightbox-trigger:hover img {
    opacity: 0.85;
  }

  /* Lightbox overlay */
  .lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lightbox-backdrop {
    all: unset;
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.9);
    cursor: pointer;
  }

  .lightbox-overlay img {
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
  }

  .lightbox-close {
    all: unset;
    position: absolute;
    z-index: 1;
    top: 1.25rem;
    right: 1.5rem;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    line-height: 1;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }

  .lightbox-close:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    .project-page {
      padding: 2rem var(--page-pad);
    }

    .photo-grid {
      grid-template-columns: 1fr;
    }

    .reel-grid {
      grid-template-columns: 1fr;
    }

    .embed-frame.reel {
      padding-bottom: 0;
      height: 60vh;
    }

    .project-breakdown {
      grid-template-columns: 1fr;
    }

    .related-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
