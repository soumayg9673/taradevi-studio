<script lang="ts">
  import siteData from '$lib/data/site.json';
</script>

<svelte:head>
  <title>{siteData.seo.about.title}</title>
  <meta name="description" content={siteData.seo.about.description} />
  <meta name="keywords" content={siteData.seo.about.keywords} />
  <meta property="og:title" content={siteData.seo.about.title} />
  <meta property="og:description" content={siteData.seo.about.description} />
  <meta property="og:type" content="profile" />
</svelte:head>

<!-- Section 1: Profile -->
<section class="section profile-section">
  <div class="container">
    <div class="profile-grid">
      <div class="profile-image-col">
        <div class="profile-image-wrapper">
          <img src={siteData.profileImage} alt={siteData.name} class="profile-image" />
        </div>
      </div>
      <div class="profile-content">
        <p class="eyebrow">About</p>
        <h1 class="about-name">{siteData.name}</h1>
        <p class="about-subtitle">{siteData.title}</p>
        <p class="about-summary">{siteData.summary}</p>
        <div class="highlights">
          {#each siteData.highlights as highlight, i}
            {@const colors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)']}
            <div class="highlight-card" style="background-color: {colors[i % colors.length]}">
              <span class="highlight-value">{highlight.value}</span>
              <span class="highlight-label">{highlight.label}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Section 2: Expertise -->
<section class="section expertise-section">
  <div class="container">
    <p class="eyebrow">Expertise</p>
    <div class="expertise-grid">
      {#each siteData.expertise as area, i}
        {@const colors = ['var(--color-pink)', 'var(--color-yellow)', 'var(--color-blue)', 'var(--color-lavender)']}
        <div class="expertise-card" style="background-color: {colors[i % colors.length]}">
          <span class="expertise-icon">{area.icon}</span>
          <h3 class="expertise-title">{area.title}</h3>
          <p class="expertise-desc">{area.description}</p>
          <div class="skill-list">
            {#each area.skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Section 3: Experience -->
<section class="section experience-section">
  <div class="container">
    <p class="eyebrow">Experience</p>
    <div class="experience-list">
      {#each siteData.experience as job}
        <div class="job">
          <div class="job-header">
            <strong class="job-company">{job.company}</strong>
            <span class="job-period">{job.period}</span>
          </div>
          <span class="job-role">{job.role}</span>
          <span class="job-location">{job.location}</span>
          <p class="job-description">{job.description}</p>
          <div class="skill-list">
            {#each job.skills as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .section {
    padding: 5rem var(--page-pad);
  }

  .section + .section {
    padding-top: 0;
  }

  .container {
    max-width: var(--page-max);
    margin: 0 auto;
  }

  .eyebrow {
    font-family: var(--font-body);
    font-size: 0.78rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 2rem;
  }

  /* ── Section 1: Profile ── */
  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 5rem;
    align-items: start;
  }

  .profile-image-wrapper {
    position: sticky;
    top: 5.5rem;
    border-radius: 0;
    overflow: hidden;
    background-color: var(--color-lavender);
    aspect-ratio: 3/4;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .about-name {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 5rem);
    font-weight: 300;
    letter-spacing: 0.06em;
    margin-top: -0.5rem;
  }

  .about-subtitle {
    font-family: var(--font-body);
    font-size: 0.9rem;
    color: var(--color-muted);
    line-height: 1.7;
    margin-top: -0.75rem;
  }

  .about-summary {
    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.85;
  }

  .highlights {
    display: flex;
    gap: 0.85rem;
    flex-wrap: wrap;
  }

  .highlight-card {
    flex: 1;
    min-width: 100px;
    padding: 1.25rem 1rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.3rem;
  }

  .highlight-value {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 500;
    letter-spacing: -0.02em;
  }

  .highlight-label {
    font-family: var(--font-body);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  /* ── Section 2: Expertise ── */
  .expertise-section {
    border-top: 1px solid var(--color-border);
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .expertise-card {
    padding: 1.75rem 1.5rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .expertise-icon {
    font-size: 1.5rem;
    line-height: 1;
  }

  .expertise-title {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 500;
    margin-top: 0.3rem;
  }

  .expertise-desc {
    font-family: var(--font-body);
    font-size: 0.82rem;
    line-height: 1.75;
    color: var(--color-muted);
    flex: 1;
  }

  /* ── Section 3: Experience ── */
  .experience-section {
    border-top: 1px solid var(--color-border);
  }

  .experience-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .job {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 1.75rem 2rem;
    border-radius: 2px;
    background-color: var(--color-yellow);
  }

  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.1rem;
  }

  .job-company {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 500;
  }

  .job-period {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: var(--color-muted);
  }

  .job-role {
    font-family: var(--font-body);
    font-size: 0.9rem;
  }

  .job-location {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: var(--color-muted);
  }

  .job-description {
    font-family: var(--font-body);
    font-size: 0.88rem;
    line-height: 1.75;
    margin-top: 0.65rem;
  }

  /* ── Shared ── */
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
  }

  .skill-tag {
    font-family: var(--font-body);
    font-size: 0.7rem;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    background-color: rgba(0, 0, 0, 0.07);
    letter-spacing: 0.04em;
  }

  /* ── Responsive ── */
  @media (max-width: 1024px) {
    .expertise-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem var(--page-pad);
    }

    .profile-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .profile-image-wrapper {
      position: static;
      aspect-ratio: 1/1;
    }

    .expertise-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 480px) {
    .expertise-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
