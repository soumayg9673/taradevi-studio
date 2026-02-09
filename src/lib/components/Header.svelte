<script lang="ts">
  import { page } from '$app/stores';
  import siteData from '$lib/data/site.json';
</script>

<header class="header">
  <div class="header-inner">
    <a href="/" class="logo">
      <span class="logo-name">{siteData.name.toUpperCase()}</span>
    </a>
    <nav class="nav">
      <a href="/work" class:active={$page.url.pathname.startsWith('/work')}>Work</a>
      <a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
      <a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
    </nav>
  </div>
</header>

<style>
  .header {
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: rgba(248, 247, 244, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--color-border);
  }

  .header-inner {
    max-width: var(--page-max);
    margin: 0 auto;
    padding: 1.4rem var(--page-pad);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-name {
    font-family: var(--font-display);
    font-size: 1.15rem;
    font-weight: 300;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--color-text);
    transition: opacity 0.4s ease;
  }

  .logo:hover .logo-name {
    opacity: 0.45;
  }

  .nav {
    display: flex;
    gap: 3rem;
  }

  .nav a {
    font-family: var(--font-body);
    font-size: 0.68rem;
    font-weight: 400;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: var(--color-muted);
    transition: color 0.3s ease;
    position: relative;
  }

  .nav a::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--color-text);
    transition: width 0.3s ease;
  }

  .nav a:hover,
  .nav a.active {
    color: var(--color-text);
  }

  .nav a:hover::after,
  .nav a.active::after {
    width: 100%;
  }

  @media (max-width: 640px) {
    .header-inner {
      padding: 1.1rem var(--page-pad);
    }
    .nav {
      gap: 1.75rem;
    }
  }
</style>
