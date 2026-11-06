# husnain-ali21.github.io

Source for [husnain-ali21.github.io](https://husnain-ali21.github.io): a personal site and blog built with React, Vite and MDX. The layout and build setup are adapted from [JaydenTeoh/JaydenTeoh.github.io](https://github.com/JaydenTeoh/JaydenTeoh.github.io).

## Local development

Requires Node 18+ (Node 20 recommended).

```bash
npm install
npm run dev        # dev server with hot reload
npm run build      # production build into dist/ (plus per-route prerendered HTML + sitemap)
npm run preview    # serve the built site locally
```

## Where things live

- `src/data/site.js`: site name, URL, description, default social image
- `src/data/profile.js`: home page content (links, research interests, experience, publications, photo)
- `src/data/posts.js`: the list of blog posts
- `src/posts/`: MDX post sources
- `public/blog/assets/<slug>/`: images used by posts
- `public/data/Husnain_Ali_CV.pdf`: the CV linked from the home page

## Writing a post

1. Create `src/posts/<date>-<slug>.mdx`. Markdown, GFM tables and KaTeX math (`$...$`, `$$...$$`) all work, and you can import React components for interactive demos.
2. Put images in `public/blog/assets/<date>-<slug>/` and reference them as `/blog/assets/<date>-<slug>/file.png`.
3. Register the post in `src/data/posts.js`:

   ```js
   {
     slug: 'my-post',
     title: 'My Post',
     date: '2026-11-06',
     tags: ['interpretability'],
     excerpt: 'One-line summary for the blog index and link previews.',
     cover: '/blog/assets/2026-11-06-my-post/cover.png', // optional
     load: () => import('../posts/2026-11-06-my-post.mdx'),
   }
   ```

The post is served at `/blog/<year>/<slug>/`.

For research-paper-style posts, add `layout: 'paper'` and use the components in `src/components/paper/` (`PaperHero`, `TLDR`, `Abstract`, `TOC`, `Section`, `Figure`, `BibTeX`, `Cite`, `Footnote`, …). Adding a `scholar: { title, authors, arxivId, pdf, ... }` block emits Google Scholar citation tags (see `src/data/scholar.js`).

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

One-time setup: in the GitHub repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
