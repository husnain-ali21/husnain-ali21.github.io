// Register each blog post here. See README.md for the full field list.
//
// {
//   slug: 'my-first-post',
//   title: 'My First Post',
//   date: '2026-11-06',
//   tags: ['interpretability'],
//   excerpt: 'One-line summary shown on the blog index and in link previews.',
//   cover: '/blog/assets/2026-11-06-my-first-post/cover.png', // optional
//   load: () => import('../posts/2026-11-06-my-first-post.mdx'),
// },
export const posts = []

export function postYear(post) {
  return post.date.slice(0, 4)
}

export function postUrl(post) {
  return `/blog/${postYear(post)}/${post.slug}`
}

export function getPost(year, slug) {
  return posts.find((p) => p.slug === slug && postYear(p) === year)
}

export function getAllTags() {
  const set = new Set()
  for (const p of posts) for (const t of p.tags) set.add(t)
  return ['all', ...Array.from(set)]
}
