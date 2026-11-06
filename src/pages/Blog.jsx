import { useMemo, useState } from 'react'
import Header from '../components/Header.jsx'
import SEO from '../components/SEO.jsx'
import PostCard from '../components/PostCard.jsx'
import { posts, getAllTags } from '../data/posts.js'

export default function Blog() {
  const [filter, setFilter] = useState('all')
  const tags = useMemo(() => getAllTags(), [])

  const filtered = filter === 'all' ? posts : posts.filter((p) => p.tags.includes(filter))

  return (
    <div className="app-shell">
      <SEO
        title="Blog"
        description="Notes on interpretability, language models, and machine learning research."
        path="/blog"
      />
      <Header />

      <main className="writings-page">
        <div className="writings-header">
          <h1 className="page-title">blog</h1>
          <p className="page-subtitle">
            notes on interpretability, language models, and machine learning research.
          </p>
        </div>

        <div className="writing-tags">
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFilter(t)}
              className={`writing-tag${filter === t ? ' writing-tag-active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="post-list">
          {filtered.length === 0 ? (
            <p className="writing-empty">{posts.length ? 'no posts under this tag yet.' : 'no posts yet. check back soon.'}</p>
          ) : (
            filtered.map((p) => <PostCard key={p.slug} post={p} />)
          )}
        </div>
      </main>
    </div>
  )
}
