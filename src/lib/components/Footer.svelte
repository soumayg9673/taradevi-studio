<script lang="ts">
  import siteData from '$lib/data/site.json';
  import favicon from '$lib/assets/favicon.svg';

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-label">Contact</p>
    <p class="footer-cta">Interested in working together? Let's connect!</p>
    <a href="mailto:{siteData.contact.email}" class="footer-email">{siteData.contact.email}</a>

    <img src={favicon} alt="TD" class="footer-monogram" />

    <p class="footer-copy">© {siteData.name} {year}</p>
  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border);
    margin-top: 6rem;
    text-align: center;
  }

  .footer-inner {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 5rem var(--page-pad) 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .footer-label {
    font-family: var(--font-body);
    font-size: 0.78rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-muted);
  }

  .footer-cta {
    font-family: var(--font-display);
    font-size: clamp(1.2rem, 2.8vw, 1.8rem);
    font-style: italic;
    font-weight: 300;
    color: var(--color-text);
    margin-top: 0.25rem;
    letter-spacing: -0.01em;
  }

  .footer-email {
    font-family: var(--font-body);
    font-size: 0.95rem;
    color: var(--color-muted);
    letter-spacing: 0.04em;
    transition: color 0.2s;
    margin-top: 0.25rem;
  }

  .footer-email:hover {
    color: var(--color-text);
  }

  .footer-monogram {
    width: 3rem;
    height: 3rem;
    margin-top: 2.5rem;
    opacity: 0.85;
  }

  .footer-copy {
    font-family: var(--font-body);
    font-size: 0.72rem;
    letter-spacing: 0.06em;
    color: var(--color-muted);
    margin-top: 0.5rem;
  }
</style>
