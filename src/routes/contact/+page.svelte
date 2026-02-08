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
			<a
				href="mailto:{siteData.contact.email}"
				class="contact-item"
				style="background-color: var(--color-pink)"
			>
				<span class="contact-icon">✉</span>
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
				style="background-color: var(--color-blue)"
			>
				<i class="fa-brands fa-linkedin text-lg hover:text-[#FF671F]"></i>
				<div class="contact-text">
					<span class="contact-label">LinkedIn</span>
					<span class="contact-value">tara-devi</span>
				</div>
				<span class="contact-arrow">→</span>
			</a>

			<a
				href={siteData.contact.instagram}
				target="_blank"
				rel="noopener noreferrer"
				class="contact-item"
				style="background-color: var(--color-lavender)"
			>
				<i class="fa-brands fa-instagram text-lg hover:text-[#FF671F]"></i>
				<div class="contact-text">
					<span class="contact-label">Instagram</span>
					<span class="contact-value">@tara-devi</span>
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
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-muted);
		margin-bottom: 0.75rem;
	}

	.page-title {
		font-family: var(--font-display);
		font-size: clamp(3.5rem, 9vw, 7rem);
		font-weight: 300;
		line-height: 1.0;
		letter-spacing: -0.01em;
		margin-bottom: 1.5rem;
	}

	.page-title em {
		font-style: italic;
	}

	.contact-subtitle {
		font-family: var(--font-body);
		font-size: 1rem;
		color: var(--color-muted);
		margin-bottom: 3rem;
		line-height: 1.7;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.4rem 1.75rem;
		border-radius: 2px;
		transition: transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	}

	.contact-item:hover {
		transform: translateX(8px);
	}

	.contact-icon {
		font-size: 1.2rem;
		width: 1.75rem;
		text-align: center;
		font-weight: 700;
		font-family: var(--font-body);
	}

	.contact-text {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
		flex: 1;
	}

	.contact-label {
		font-family: var(--font-body);
		font-size: 0.7rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-muted);
	}

	.contact-value {
		font-family: var(--font-body);
		font-size: 0.95rem;
		font-weight: 400;
	}

	.contact-arrow {
		font-size: 1.1rem;
		color: var(--color-muted);
		transition: transform 0.25s ease;
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
