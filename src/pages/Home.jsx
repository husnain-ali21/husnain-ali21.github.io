import Header from '../components/Header.jsx'
import SEO from '../components/SEO.jsx'
import PaperCard from '../components/PaperCard.jsx'
import TypingText from '../components/TypingText.jsx'
import { siteDescription, siteName } from '../data/site.js'
import { experience, links, photo, publications, researchInterests } from '../data/profile.js'

const isExternal = (href) => /^https?:\/\//.test(href)

export default function Home() {
  return (
    <div className="app-shell">
      <SEO title={siteName} description={siteDescription} path="/" />
      <Header />

      <main className="home">
        <section className={`bio-section${photo ? '' : ' bio-section--no-photo'}`}>
          <div className="bio-text">
            <h1 className="brand-name">
              <TypingText text={siteName} />
            </h1>
            <p>
              I'm a Founding Research Engineer at Isgen, where I build multilingual detectors for
              AI-generated text and work on making their decisions explainable to the people who
              use them.
            </p>
            <p>
              I've spent about five years in industry working on natural language processing and
              computer vision, most of it at Smodin.io. Over that time my interest has moved from
              building applications on top of models to understanding the models themselves: the
              representations they learn, the mechanisms they encode, and the algorithms they end
              up implementing.
            </p>
            <p>
              I studied Software Engineering at the National University of Sciences and Technology
              (NUST) in Islamabad, Pakistan.
            </p>

            <p className="contact-row">
              {links.map((l, i) => (
                <span key={l.label}>
                  <a
                    href={l.href}
                    {...(isExternal(l.href) ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {l.label}
                  </a>
                  {i < links.length - 1 ? <span className="sep"> /</span> : null}
                </span>
              ))}
            </p>
          </div>

          {photo ? (
            <div className="bio-portrait">
              <a href={photo}>
                <img src={photo} alt={`Photo of ${siteName}`} />
              </a>
            </div>
          ) : null}
        </section>

        <section className="section">
          <h2 className="section-heading">research interests</h2>
          <ul className="plain-list">
            {researchInterests.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </section>

        {publications.length ? (
          <section className="section">
            <h2 className="section-heading">publications</h2>
            <div className="paper-list">
              {publications.map((p) => (
                <PaperCard key={p.id} paper={p} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="section">
          <h2 className="section-heading">experience</h2>
          <ul className="plain-list experience-list">
            {experience.map((e) => (
              <li key={e.org}>
                <div className="experience-head">
                  <strong>
                    {e.org}, {e.role}
                  </strong>
                  <span className="experience-dates">{e.dates}</span>
                </div>
                <div className="experience-location">{e.location}</div>
                <p className="experience-summary">{e.summary}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}
