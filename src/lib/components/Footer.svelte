<script lang="ts">
  import siteData from '$lib/data/site.json';
  import favicon from '$lib/assets/favicon.svg';

  const year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-inner">

    <!-- CTA block -->
    <div class="footer-cta-block">
      <p class="footer-label">Get in touch</p>
      <p class="footer-cta">Interested in working<br />together? Let's connect!</p>
    </div>

    <!-- Divider -->
    <div class="footer-rule"></div>

    <!-- Bottom row -->
    <div class="footer-bottom">
      <div class="footer-identity">
        <img src={favicon} alt="TD" class="footer-monogram" />
        <p class="footer-name">{siteData.name}</p>
      </div>

      <div class="footer-contact">
        <a href="mailto:{siteData.contact.email}" class="footer-email">
          <i class="fa-regular fa-envelope"></i>
          {siteData.contact.email}
        </a>
        <a href={siteData.contact.linkedin} target="_blank" rel="noopener noreferrer" class="footer-linkedin">
          <i class="fa-brands fa-linkedin-in"></i>
          LinkedIn
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <p class="footer-copy">© {year} {siteData.name}. All rights reserved.</p>

  </div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--color-border);
    margin-top: 8rem;
  }

  .footer-inner {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 5rem var(--page-pad) 3rem;
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  /* CTA block */
  .footer-cta-block {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding-bottom: 4rem;
  }

  .footer-label {
    font-family: var(--font-body);
    font-size: 0.68rem;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-muted);
    font-weight: 400;
  }

  .footer-cta {
    font-family: var(--font-display);
    font-size: clamp(2.4rem, 5vw, 4rem);
    font-style: normal;
    font-weight: 300;
    color: var(--color-text);
    line-height: 1.15;
    letter-spacing: -0.01em;
  }

  /* Divider */
  .footer-rule {
    border-top: 1px solid var(--color-border);
  }

  /* Bottom row */
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 2.5rem 0 2rem;
    gap: 2rem;
  }

  .footer-identity {
    display: flex;
    align-items: center;
    gap: 1.1rem;
  }

  .footer-monogram {
    width: 2.75rem;
    height: 2.75rem;
    opacity: 0.9;
    flex-shrink: 0;
  }

  .footer-name {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 300;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text);
    line-height: 1;
  }

  /* Contact links */
  .footer-contact {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.75rem;
  }

  .footer-email,
  .footer-linkedin {
    font-family: var(--font-body);
    font-size: 0.78rem;
    color: var(--color-muted);
    letter-spacing: 0.08em;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    transition: color 0.25s;
  }

  .footer-email:hover,
  .footer-linkedin:hover {
    color: var(--color-text);
  }

  .footer-email i,
  .footer-linkedin i {
    font-size: 0.7rem;
    opacity: 0.7;
  }

  /* Copyright */
  .footer-copy {
    font-family: var(--font-body);
    font-size: 0.6rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--color-muted);
    opacity: 0.6;
    padding-top: 0.5rem;
    border-top: 1px solid var(--color-border);
  }

  @media (max-width: 640px) {
    .footer-cta {
      font-size: clamp(1.8rem, 7vw, 2.6rem);
    }

    .footer-bottom {
      flex-direction: column;
      gap: 2rem;
    }

    .footer-contact {
      align-items: flex-start;
    }
  }
</style>
