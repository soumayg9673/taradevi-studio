<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import siteData from '$lib/data/site.json';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="description" content={siteData.seo.description} />
  <meta name="keywords" content={siteData.seo.keywords} />
  <meta property="og:title" content={siteData.seo.title} />
  <meta property="og:description" content={siteData.seo.description} />
</svelte:head>

<Header />
<main>
  {@render children()}
</main>
<Footer />

<style>
  main {
    min-height: calc(100vh - 120px);
  }
</style>
