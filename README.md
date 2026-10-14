# Shashwat Jain — The Intelligence Lab

A responsive AI/ML portfolio with a chemistry-inspired visual identity: dark laboratory greens, elemental typography, warm desert accents, and an original molecular illustration. Built with plain HTML, CSS, and JavaScript for GitHub Pages; no build step or API keys.

## Preview

Open `index.html`, or serve this folder with `python -m http.server 8000` and visit `http://localhost:8000`. The site remains readable if the optional Google Fonts request is blocked. All decorative graphics are inline SVG; there are no third-party image dependencies.

## Publish on GitHub Pages

1. Use the public repository [`maishashwathu/Portfolio`](https://github.com/maishashwathu/Portfolio).
2. The website files belong at the root of its `main` branch.
3. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, then save.
4. GitHub's Pages deployment will publish the site at `https://maishashwathu.github.io/Portfolio/`. Check the deployment result before considering that address live.

Alternatively, use a named project repository and the resulting `https://maishashwathu.github.io/REPOSITORY/` address. All local asset links are relative so both work.

## Editing

- `index.html`: profile, navigation, education, achievements, skills, contact links.
- `projects.js`: all seven reviewed public projects, categories, metrics, methods, and caveats.
- `app.js`: original SVG artwork, rendering, filters, case-study dialogs, navigation, email copy.
- `styles.css`: responsive layout, colors, typography, motion preferences.
- `resume.html`: printable résumé. Its button supports browser Print / Save as PDF.
- `favicon.svg`: original elemental S mark.
- `.nojekyll`: prevents Jekyll processing.

New repositories are added deliberately to `projects.js`; the site does not depend on GitHub API availability or expose private repositories. Update the count in `index.html` when changing the inventory.

## Content and evaluation context

Content is grounded in the supplied résumé and public repository files reviewed on 14 October 2026. LinkedIn is linked using the supplied URL; its profile content was not available for inspection. The private CouncilOne repository is excluded. Résumé-only projects are clearly separated from public repositories.

VoxCeleb results are validation results; molecular ROC-AUC is not accuracy; energy savings refer to a one-day synthetic simulation against an always-on baseline; news accuracy comes from an article-level random split. Market research is an unpublished manuscript coauthored with Kartik Soni. Team polymer work is credited as a team project. Case-study dialogs retain limitations from repository documentation. Decorative card charts are illustrations, not experimental evidence.

## Visual research

The Breaking Bad inspiration comes from green laboratory lighting, periodic-table title design, sparse scientific labels, and desert earth tones. No show stills, logos, actor likenesses, music, or video assets are included. This is an independent personal portfolio, not an official or affiliated Breaking Bad site.

- [WIRED — Breaking Bad's camera work and visual palette](https://www.wired.com/2012/08/the-look-the-feel-of-breaking-bad)
- [ARTpublika — Chemistry-inspired title sequences](https://www.artpublikamag.com/post/clever-title-sequences-inspired-by-chemistry-for-breaking-bad-euphoria-chernobyl-a-visual-essay)
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Accessibility

Semantic landmarks, visible keyboard focus, skip navigation, native modal dialogs with Escape and focus restoration, live filter counts, reduced-motion support, and mobile navigation are included. Contact uses a mailto link; no nonfunctional form is presented. Email copy has a visible fallback when clipboard permissions are unavailable.
