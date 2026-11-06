export const siteName = 'Husnain Ali'
export const siteUrl = 'https://husnain-ali21.github.io'
export const siteDescription =
  'Husnain Ali is an AI research engineer writing about interpretability, language models, and machine learning research.'
// Social preview image. Set to e.g. '/images/profile.jpg' once you add a photo.
export const defaultOgImage = null

// Trailing-slash canonical form. GitHub Pages serves directory routes
// (e.g. /blog/2026/my-post/index.html) and 301-redirects the no-slash URL to
// the trailing-slash one, so canonical URLs and the sitemap must use it too.
export function canonicalPath(path) {
  if (!path || path === '/') return '/'
  const trimmed = path.replace(/\/+$/, '')
  return `${trimmed}/`
}

// Page <title>. Avoids "Husnain Ali | Husnain Ali" when the page title already
// equals the site name (the home page).
export function buildTitle(title) {
  return title && title !== siteName ? `${title} | ${siteName}` : siteName
}
