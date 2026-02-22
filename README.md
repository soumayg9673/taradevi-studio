# Tara Devi — Portfolio

This is the source code for Tara Devi's personal portfolio website. The site is built so that all content — profile details, projects, images, and videos — can be updated by editing just two simple files, without needing to touch any of the design or code.

---

## How the Content Works

All the information on the website lives in two files inside the `src/lib/data/` folder:

- `site.json` — your personal profile, bio, experience, and skills
- `projects.json` — every project and case study in the portfolio

---

## `site.json` — Field by Field

---

### `name`
Your full name.
Appears on the **About page** as the large heading at the top of your profile section. Also used as the descriptive label for your profile photo.

---

### `title`
Your personal statement or creative headline.
Appears on the **Home page** as the large centred quote in the hero section — the very first thing a visitor reads.

> Example: *"What truly makes my heart feel alive is art"*

---

### `summary`
A longer personal statement shown below the title on the **Home page**.
This is the italic paragraph that introduces who you are to a first-time visitor.

---

### `aboutTitle`
A short professional descriptor shown on the **About page** as a subtitle directly below your name — in italic, smaller text.

> Example: *"Creative Strategy Architect | Visual Strategy & Production Lead"*

---

### `aboutMe`
Your full professional bio. Appears on the **About page** as the main body paragraph in the profile section — the detailed, readable version of who you are and what you do.

---

### `profileImage`
The file path to your portrait photo.
Appears on the **About page** as the large image on the left side of the profile section.

> The file must be placed inside the `static/images/` folder. The path starts with `/images/`.

---

### `location`
Your city and country.
Available as data for use across the site (currently used in the experience cards and available for the contact page).

---

### `contact`

| Sub-field | Where it appears |
|---|---|
| `email` | Contact page — shown as a clickable email link |
| `linkedin` | Contact page — shown as a clickable LinkedIn link |

---

### `highlights`
A list of stat cards shown on the **About page** below your bio. Each card has two parts:

| Sub-field | What it does |
|---|---|
| `value` | The large number or figure displayed on the card (e.g. `"4.5"`) |
| `label` | The small text below it (e.g. `"Years of Experience"`) |

The cards cycle through pink, yellow, and blue backgrounds automatically. Add or remove cards by adding or removing entries in this list.

---

### `experience`
Your work history. Each job entry appears as a card on the **About page** in the Experience section. Each entry has:

| Sub-field | Where it appears on the card |
|---|---|
| `company` | Bold, large company name at the top |
| `role` | Italic job title below the company name |
| `period` | Date range shown on the right side of the header row |
| `location` | Small text below the role |
| `description` | A paragraph summarising what you did at this role |
| `skills` | A row of pill-shaped tags at the bottom of the card |

Jobs are displayed in the order they appear in this list, top to bottom.

---

### `expertise`
Your skill domains. Each entry appears as a coloured card in the **About page** Expertise section (shown in a 3-column grid on desktop). Each card has:

| Sub-field | Where it appears on the card |
|---|---|
| `icon` | A decorative symbol at the top (e.g. `✦`, `◈`) |
| `title` | The heading of the card |
| `description` | A short paragraph explaining the area |
| `skills` | A row of pill-shaped tags at the bottom |

Cards cycle through pink, yellow, blue, and lavender backgrounds automatically.

---

### `seo`
Controls what appears in Google search results and browser tab titles for each page. There are four sections — one per page:

| Section | Page it controls |
|---|---|
| `seo.home` | The home page |
| `seo.about` | The about page |
| `seo.work` | The work listing page |
| `seo.contact` | The contact page |

Each section has three fields:

| Sub-field | What it does |
|---|---|
| `title` | The text shown in the browser tab and as the Google result headline |
| `description` | The short summary shown under the headline in Google results |
| `keywords` | Hidden tags that help search engines understand the page topic |

---
---

## `projects.json` — Field by Field

This file is a list of projects. Each project is one entry in the list and becomes its own page on the website.

---

### `slug`
The URL address for the project page. Must be lowercase with hyphens instead of spaces.

> Example: `"winter-campaign-global-aesthetic-scaling"` → the page lives at `/work/winter-campaign-global-aesthetic-scaling`

This must be unique for every project.

---

### `title`
The project name. Appears in three places:
- The project card on the **Home page**
- The project card on the **Work listing page**
- The large heading at the top of the **Project detail page**

---

### `note`
A short one-line description of the project. Appears below the title on both the **Home page card** and the **Work listing page card** — the brief summary a visitor sees before clicking in.

---

### `company`
The brand or client the project was done for (e.g. `"Myntra"`, `"Citykart"`, `"Personal Project"`). Stored in the data and available for display if needed.

---

### `isPersonal`
`true` or `false`. Controls where the project description text appears on the project detail page:

- `true` → the description paragraphs appear **above** the media gallery (before the images)
- `false` → the description paragraphs appear **below** the media gallery (after the images)

---

### `isFeatured`
`true` or `false`. Controls whether the project shows up in the **"Selected Work" section on the Home page**.

- `true` → the project card appears on the home page
- `false` → the project only appears on the full Work listing page, not the home page

---

### `color`
The background colour of the project card. Uses a colour token from the design system (e.g. `"var(--color-blue)"`, `"var(--color-pink)"`).

This colour is used in four places:
1. The background of the project card on the Home and Work listing pages
2. The background behind the tags at the top of the Project detail page
3. The background of the Plan & Strategy box on the Project detail page
4. The background of the Key Learnings box on the Project detail page
5. The background of Related Work cards at the bottom of the Project detail page

---

### `image`
The file path to the cover image shown on the project card.
Appears on both the **Home page card** and the **Work listing page card** as the thumbnail image.

> The file must be placed inside `static/images/`. The path starts with `/images/`.

---

### `link`
An optional external URL. If provided, a **"View Full Project →"** button appears at the bottom of the project detail page, linking out to this URL.

Leave it as an empty string `""` to hide the button.

---

### `tags`
A list of skill or category labels. Appear as small pill-shaped tags in two places:
- On the project card (Home and Work listing pages)
- Across the top of the Project detail page (using the project `color` as background)

---

### `seo`
Controls search engine information specifically for this project's page:

| Sub-field | What it does |
|---|---|
| `title` | Browser tab title and Google headline for this project's page |
| `description` | The summary shown under the headline in Google results |
| `keywords` | Hidden search tags for this project |

---

### `description`
One or more paragraphs that explain what the project is about. Written as a list so you can split it across multiple paragraphs.

Where it appears depends on `isPersonal`:
- If `isPersonal: true` → shown **above** the gallery
- If `isPersonal: false` → shown **below** the gallery

---

### `media`
The ordered list of photos and videos shown in the gallery on the project detail page. Items appear in the exact order listed.

Each media item has a `type` field that controls how it is displayed:

---

#### `type: "photo"` — Still Image

Displays a static image from the `static/images/` folder.

| Field | What it does |
|---|---|
| `url` | The file path to the image (e.g. `/images/project-folder/1.webp`) |
| `grid` | Optional. A number from 2–6. Groups consecutive same-type images into a grid row with that many columns. No `grid` value = full-width, one image per row |
| `topic` | Optional. A bold section heading that appears **above** this image in the gallery — use it to start a new named section |
| `brief` | Optional. An introductory paragraph that appears below the `topic` heading, before the image |
| `note` | Optional. An annotation paragraph that appears **below** the image. For grid photos, the note appears below the entire grid |

> Photos are **clickable** — visitors can click any photo to open it in a fullscreen lightbox overlay.

---

#### `type: "reel"` — Short Vertical Video

Displays a short vertical video (portrait format, 9:16 ratio) embedded from Google Drive or YouTube. Three reels appear side by side in a row on desktop.

| Field | What it does |
|---|---|
| `url` | The Google Drive or YouTube share link for the video |
| `topic` | Optional. A section heading above the reel group |
| `note` | Optional. An annotation paragraph shown below the reel group |

---

#### `type: "landscape"` — Wide Horizontal Video

Displays a wide horizontal video (16:9 ratio) embedded full-width from Google Drive or YouTube. Each landscape video stacks one per row.

| Field | What it does |
|---|---|
| `url` | The Google Drive or YouTube share link for the video |
| `note` | Optional. An annotation paragraph shown below the video |

---

### `plan`
An optional list of bullet points shown in a **"Plan"** section at the bottom of the project detail page. Appears inside a coloured box (using the project `color`) side by side with the `strategy` list.

Leave this out entirely or set it to an empty list `[]` to hide the section.

---

### `strategy`
An optional list of bullet points shown in a **"Strategy"** column in the same coloured box as `plan`.

Leave this out or set to `[]` to hide.

---

### `keyLearnings`
An optional list of bullet points shown in a **"Key Learnings"** box below the plan/strategy section. Uses the project `color` as the background.

Leave this out or set to `[]` to hide.

---

### `presentationUrl`
An optional link to a Google Slides presentation. If provided and valid, the presentation is **embedded directly** on the project page as a full interactive viewer.

Leave as an empty string `""` to hide.

---

## How the Pages Are Built from These Files

```
site.json  →  Home page hero (title, summary)
           →  About page (name, profileImage, aboutTitle, aboutMe, highlights, experience, expertise)
           →  Contact page (contact.email, contact.linkedin)
           →  SEO tags on all 4 pages (seo.home / seo.about / seo.work / seo.contact)

projects.json  →  Home page "Selected Work" section (only projects where isFeatured = true)
               →  Work listing page /work (all projects)
               →  One dedicated page per project at /work/{slug}
```

---

## Build & Deploy

The website is hosted on **GitHub Pages**. To publish an update:

**Step 1 — Build the site**
```sh
npm run build
```
This compiles everything into a `build/` folder.

**Step 2 — Copy the build into the `docs/` folder**
```sh
rm -rf docs && cp -r build docs
```
GitHub Pages reads from the `docs/` folder to serve the live website.

**Step 3 — Push to GitHub**
```sh
git add docs
git commit -m "deploy: update production build"
git push origin main
```
Once pushed, the live site updates automatically.
