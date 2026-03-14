<script lang="ts">
	import siteData from '$lib/data/site.json';
</script>

<svelte:head>
	<title>{siteData.seo.contact.title}</title>
	<meta name="description" content={siteData.seo.contact.description} />
	<meta name="keywords" content={siteData.seo.contact.keywords} />
	<meta property="og:title" content={siteData.seo.contact.title} />
	<meta property="og:description" content={siteData.seo.contact.description} />
	<meta property="og:type" content="website" />
</svelte:head>

<section class="contact-page">
	<div class="contact-inner">
		<p class="eyebrow">Get in touch</p>
		<h1 class="page-title">Let's<br /><em>Connect</em></h1>
		<p class="contact-subtitle">
			Looking for a creative leader who blends strategy with execution?
		</p>

		<div class="contact-links">
			<a href="mailto:{siteData.contact.email}" class="contact-item">
				<div class="contact-accent" style="background-color: var(--color-pink)"></div>
				<i class="fa-regular fa-envelope contact-icon"></i>
				<div class="contact-text">
					<span class="contact-label">Email</span>
					<span class="contact-value">{siteData.contact.email}</span>
				</div>
				<span class="contact-arrow">→</span>
			</a>

			<a
				href={siteData.contact.linkedin}
				target="_blank"
				rel="noopener noreferrer"
				class="contact-item"
			>
				<div class="contact-accent" style="background-color: var(--color-blue)"></div>
				<i class="fa-brands fa-linkedin-in contact-icon"></i>
				<div class="contact-text">
					<span class="contact-label">LinkedIn</span>
					<span class="contact-value">tara-devi</span>
				</div>
				<span class="contact-arrow">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.contact-page {
		padding: 5rem var(--page-pad);
		min-height: 65vh;
		display: flex;
		align-items: center;
	}

	.contact-inner {
		max-width: 680px;
		margin: 0 auto;
		width: 100%;
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
		line-height: 0.95;
		letter-spacing: -0.02em;
		margin-bottom: 1.75rem;
	}

	.page-title em {
		font-style: italic;
		font-weight: 300;
	}

	.contact-subtitle {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-style: italic;
		font-weight: 300;
		color: var(--color-muted);
		margin-bottom: 3.5rem;
		line-height: 1.6;
		letter-spacing: 0.01em;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--color-border);
		transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.contact-item:first-child {
		border-top: 1px solid var(--color-border);
	}

	.contact-item:hover {
		transform: translateX(6px);
	}

	.contact-accent {
		width: 3px;
		height: 2rem;
		flex-shrink: 0;
		border-radius: 1px;
	}

	.contact-icon {
		font-size: 1rem;
		width: 1.25rem;
		text-align: center;
		color: var(--color-muted);
		flex-shrink: 0;
	}

	.contact-text {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		flex: 1;
	}

	.contact-label {
		font-family: var(--font-body);
		font-size: 0.58rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		color: var(--color-muted);
		font-weight: 400;
	}

	.contact-value {
		font-family: var(--font-body);
		font-size: 0.9rem;
		font-weight: 400;
		letter-spacing: 0.02em;
	}

	.contact-arrow {
		font-size: 1.1rem;
		color: var(--color-muted);
		transition: transform 0.25s ease, color 0.25s ease;
	}

	.contact-item:hover .contact-arrow {
		transform: translateX(4px);
		color: var(--color-text);
	}

	@media (max-width: 640px) {
		.contact-page {
			padding: 3rem var(--page-pad);
			align-items: flex-start;
		}
	}
</style>
