<script lang="ts">
  import siteData from '$lib/data/site.json';

  const roles = siteData.aboutTitle.split(' | ');
  const expColors = ['var(--color-pink)', 'var(--color-yellow)'];
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
        <div class="about-roles">
          {#each roles as role}
            <span class="about-role">{role}</span>
          {/each}
        </div>
        <p class="about-summary">{siteData.aboutMe}</p>
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
      {#each siteData.experience as job, i}
        <div class="job" style="background-color: {expColors[i % expColors.length]}">
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
    font-size: 0.65rem;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: var(--color-muted);
    margin-bottom: 2rem;
    font-weight: 400;
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
    font-size: clamp(2.8rem, 7vw, 5.5rem);
    font-weight: 300;
    letter-spacing: 0.04em;
    margin-top: -0.5rem;
    line-height: 0.95;
  }

  .about-roles {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: -0.25rem;
  }

  .about-role {
    font-family: var(--font-body);
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-muted);
    border: 1px solid var(--color-border);
    padding: 0.3rem 0.65rem;
    font-weight: 400;
  }

  .about-summary {
    font-family: var(--font-body);
    font-size: 0.92rem;
    line-height: 1.9;
    letter-spacing: 0.01em;
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
    font-size: 2.2rem;
    font-weight: 300;
    letter-spacing: -0.02em;
  }

  .highlight-label {
    font-family: var(--font-body);
    font-size: 0.62rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-muted);
    font-weight: 400;
  }

  /* ── Section 2: Expertise ── */
  .expertise-section {
    border-top: 1px solid var(--color-border);
  }

  .expertise-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    font-size: 1.1rem;
    opacity: 0.5;
    line-height: 1;
    margin-bottom: 0.1rem;
  }

  .expertise-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .expertise-desc {
    font-family: var(--font-body);
    font-size: 0.8rem;
    line-height: 1.8;
    color: var(--color-muted);
    flex: 1;
    letter-spacing: 0.01em;
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
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.01em;
  }

  .job-period {
    font-family: var(--font-body);
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    color: var(--color-muted);
    text-transform: uppercase;
  }

  .job-role {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.01em;
  }

  .job-location {
    font-family: var(--font-body);
    font-size: 0.68rem;
    letter-spacing: 0.15em;
    color: var(--color-muted);
    text-transform: uppercase;
  }

  .job-description {
    font-family: var(--font-body);
    font-size: 0.85rem;
    line-height: 1.8;
    margin-top: 0.65rem;
    letter-spacing: 0.01em;
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
    font-size: 0.62rem;
    padding: 0.2rem 0.6rem;
    border-radius: 0;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.18);
    letter-spacing: 0.08em;
    text-transform: uppercase;
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
      aspect-ratio: auto;
    }

    .profile-image {
      height: auto;
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
