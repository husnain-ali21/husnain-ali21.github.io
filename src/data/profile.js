// Everything shown on the home page lives here, so updating the site rarely
// means touching JSX.

// Square crop shown in the circle; clicking it opens the full photo.
export const photo = '/images/profile.webp'
export const photoFull = '/images/profile-full.webp'

export const links = [
  { label: 'email', href: 'mailto:husnainalikhan21@gmail.com' },
  { label: 'cv', href: '/data/Husnain_Ali_CV.pdf' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/husnain-ali-295254185/' },
  { label: 'github', href: 'https://github.com/husnain-ali21' },
]

export const researchInterests = [
  'Mechanistic interpretability',
  'Explainable AI',
  'Energy-based models and JEPA',
  'Non-autoregressive language models (e.g. diffusion LLMs)',
]

export const experience = [
  {
    org: 'Isgen',
    url: 'https://isgen.ai/',
    role: 'Founding Research Engineer',
    dates: 'Nov 2025 – present',
    location: 'Manchester, UK (remote)',
    summary:
      'Multilingual AI-generated-text detection in production for 10M+ users (99.6% AUROC on held-out benchmarks), plus interpretability work (feature attribution, probing, activation analysis) shipped as sentence- and phrase-level explanations.',
  },
  {
    org: 'Smodin.io',
    url: 'https://smodin.io/',
    role: 'AI Research and Development Engineer',
    dates: 'Aug 2021 – Oct 2025',
    location: 'Casper, USA (remote)',
    summary:
      'Led AI tools for education, including Omni, a real-time multilingual assistant serving 450k+ calls a month. Fine-tuned open models (Mistral, Gemma, Llama-3) with SFT, PPO and DPO; built RAG pipelines and computer-vision prototypes.',
  },
  {
    org: 'MathLeaks',
    url: 'https://mathleaks.com/',
    role: 'Computer Vision Research and Development Engineer',
    dates: 'Apr 2021 – Jul 2021',
    location: 'Sweden (remote)',
    summary:
      'Benchmarked handwritten mathematical expression recognition models and built a transformer prototype that converts handwritten maths to LaTeX.',
  },
]

// Same shape as the template's paper cards: { id, title, thumb, alt, paperUrl,
// authors: [{ name, me?, equal? }], venue, year, links: [{ label, href }], blurb }.
// The section is hidden while this is empty.
export const publications = []
