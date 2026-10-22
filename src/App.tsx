import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { content, EMAIL, LINKS, type Content, type Lang } from './content'
import foto from './assets/foto.webp'
import cidade from './assets/cidade.webp'
import retrato from './assets/retrato.webp'
import raios from './assets/raios.webp'
import raiosRosa from './assets/raios-rosa.webp'
import notas from './assets/notas.webp'
import notasRosa from './assets/notas-rosa.webp'
import brilhoG from './assets/brilho-grande.webp'
import brilhoGRosa from './assets/brilho-grande-rosa.webp'
import brilhoP from './assets/brilho-pequeno.webp'
import riscos from './assets/riscos.webp'
import assinatura from './assets/assinatura.webp'
import anarteThumb from './assets/anarte-thumb.webp'

type Win = '' | 'case' | 'sys' | 'ai' | 'anarte' | 'exp' | 'spec'
type Flip = 'n' | 'a' | 'b'
const flip = (z: Flip): Flip => (z === 'a' ? 'b' : 'a')
const depth = (d: number) => ({ '--d': d }) as CSSProperties
const BASE = import.meta.env.BASE_URL
const CV_URL = (import.meta.env.VITE_CV_URL as string | undefined) ?? `${BASE}cv.pdf`

/* ---------- hooks ---------- */

function useLang(): [Lang, (l: Lang) => void] {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('lang')
      if (saved === 'pt' || saved === 'en') return saved
    } catch { /* storage indisponível */ }
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
  })
  useEffect(() => {
    const c = content[lang]
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.title = c.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.meta.description)
    try { localStorage.setItem('lang', lang) } catch { /* ok */ }
  }, [lang])
  return [lang, setLang]
}

/** Parallax barato: só escreve --px/--py no elemento, sem re-render. */
function useParallax<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0, x = 0, y = 0
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      x = Math.max(-1, Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1))
      y = Math.max(-1, Math.min(1, ((e.clientY - r.top) / r.height) * 2 - 1))
      if (!raf) raf = requestAnimationFrame(() => {
        raf = 0
        el.style.setProperty('--px', x.toFixed(3))
        el.style.setProperty('--py', y.toFixed(3))
      })
    }
    const leave = () => { el.style.setProperty('--px', '0'); el.style.setProperty('--py', '0') }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf) }
  }, [])
  return ref
}

type Theme = 'dark' | 'light'
function useTheme(): [Theme, (e: MouseEvent<HTMLButtonElement>) => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') return saved
    } catch { /* ok */ }
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#060B1E' : '#EEF3FB')
    try { localStorage.setItem('theme', theme) } catch { /* ok */ }
  }, [theme])
  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } }
    if (!doc.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setTheme(next); return }
    const x = e.clientX || window.innerWidth - 40
    const y = e.clientY || 40
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    const t = doc.startViewTransition(() => { flushSync(() => setTheme(next)) })
    t.ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
        { duration: 650, easing: 'cubic-bezier(.2,.8,.2,1)', pseudoElement: '::view-transition-new(root)' },
      )
    }).catch(() => { /* ok */ })
  }
  return [theme, toggle]
}

function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let raf = 0
    const on = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; setScrolled(window.scrollY > offset) }) }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf) }
  }, [offset])
  return scrolled
}

/* ---------- peças pequenas ---------- */

function Stamp({ id, size = 64, label }: { id: string; size?: number; label?: string }) {
  return (
    <svg width={size} height={size * 1.22} viewBox="0 0 120 146" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true} className="stamp-svg">
      <defs>
        <filter id={id}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={2} seed={4} />
          <feDisplacementMap in="SourceGraphic" scale={3} />
        </filter>
      </defs>
      <g filter={`url(#${id})`} fill="none" stroke="currentColor" strokeWidth={6.5} strokeLinejoin="round">
        <path d="M9 8 L 109 5 L 112 139 L 7 141 Z" />
      </g>
      <g filter={`url(#${id})`} fill="currentColor" textAnchor="middle" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontStretch: '62%', fontSize: 44 }}>
        <text x="60" y="68">THI</text>
        <text x="60" y="114">AGO</text>
      </g>
    </svg>
  )
}

function Dim({ label }: { label: string }) {
  return (
    <div className="dim" aria-hidden="true">
      <span className="dim-tick" /><span className="dim-line" /><span className="dim-label">{label}</span><span className="dim-line" /><span className="dim-tick" />
    </div>
  )
}

function Chevron() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 2l6 6-6 6" /></svg>
}

function WaveText({ text, k }: { text: string; k: number }) {
  let n = 0
  const words = text.split(' ')
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="wave-txt">
        {words.map((w, wi) => (
          <span key={`${k}-w${wi}`}>
            <span className="word">
              {Array.from(w).map((ch) => {
                const i = n++
                return <span key={`${k}-${i}`} className="ltr" style={{ '--i': i } as CSSProperties}>{ch}</span>
              })}
            </span>
            {wi < words.length - 1 ? ' ' : null}
          </span>
        ))}
      </span>
    </>
  )
}

/* ---------- janela (dialog nativo) ---------- */

function Window({ open, onClose, file, title, closeLabel, children }: { open: boolean; onClose: () => void; file: string; title: string; closeLabel: string; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const d = ref.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])
  return (
    <dialog ref={ref} className="win" aria-label={title} onClose={onClose} onClick={(e) => { if (e.target === ref.current) onClose() }}>
      <div className="win-bar">
        <span>{file}</span>
        <button type="button" className="xbtn" onClick={onClose} aria-label={closeLabel}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" /></svg>
        </button>
      </div>
      <div className="win-body">{open && children}</div>
    </dialog>
  )
}

/* ---------- conteúdos das janelas ---------- */

function CaseWin({ c }: { c: Content }) {
  const [tab, setTab] = useState('ctx')
  const [z, setZ] = useState<Flip>('a')
  const card = c.cards[0]
  return (
    <div className="stack-28">
      <div className="win-head">
        <h3 className="h-win">{card.title}</h3>
        <dl className="meta">{c.caseMeta.map((m) => <div key={m.k}><dt>{m.k}</dt><dd>{m.v}</dd></div>)}</dl>
      </div>
      <div className="row-wrap">
        {c.tabs.map((t, i) => (
          <button key={t.id} type="button" className="tab" aria-pressed={tab === t.id} onClick={() => { setTab(t.id); setZ(flip(z)) }}>
            <span className="tab-no">{i + 1}</span>{t.label}
          </button>
        ))}
      </div>
      <div className="split">
        <div className="fade" data-z={z}>
          {tab === 'ctx' && (
            <div className="stack-22">
              <p className="lead">{c.ctxText}</p>
              <div className="cells">{c.facts.map((f) => <div key={f.k} className="cell"><small>{f.k}</small><div>{f.v}</div></div>)}</div>
            </div>
          )}
          {tab === 'arq' && (
            <div className="stack-22">
              <ol className="flow">
                {c.steps.map((s, i) => (
                  <li key={s}><span className={i === 1 ? 'flow-box on' : 'flow-box'}>{s}</span>{i < c.steps.length - 1 && <Chevron />}</li>
                ))}
              </ol>
              <p>{c.arqText}</p>
            </div>
          )}
          {tab === 'dec' && (
            <ol className="cells cells-col">
              {c.decisions.map((d) => <li key={d.t} className="cell"><div className="cell-title">{d.t}</div><div className="muted">{d.d}</div></li>)}
            </ol>
          )}
          {tab === 'res' && (
            <div className="stack-22">
              <p className="lead">{c.resText}</p>
              <div className="metrics">{c.metrics.map((m, i) => <div key={i} className="metric"><div className="metric-v">{m.v}</div><small>{m.l}</small></div>)}</div>
            </div>
          )}
        </div>
        <figure className="code-fig">
          <div className="code dark-obj">
            <div className="code-bar"><span>PaymentGateway.cls</span><span className="muted">Apex</span></div>
            <pre><code>{highlight(c.code)}</code></pre>
          </div>
          <figcaption className="hand">{c.codeNote}</figcaption>
        </figure>
      </div>
    </div>
  )
}

const KW = /\b(public|with|sharing|class|static|new|try|return|catch)\b/
function highlight(src: string) {
  return src.split('\n').map((line, li) => {
    const parts: ReactNode[] = []
    const comment = line.indexOf('//')
    const body = comment >= 0 ? line.slice(0, comment) : line
    body.split(/('[^']*')/).forEach((chunk, ci) => {
      if (chunk.startsWith("'")) parts.push(<span key={`${li}s${ci}`} className="st">{chunk}</span>)
      else chunk.split(/(\b(?:public|with|sharing|class|static|new|try|return|catch)\b)/).forEach((w, wi) => {
        parts.push(KW.test(w) && w.length > 2 ? <span key={`${li}k${ci}-${wi}`} className="kw">{w}</span> : w)
      })
    })
    if (comment >= 0) parts.push(<span key={`${li}c`} className="cm">{line.slice(comment)}</span>)
    return <span key={li}>{parts}{'\n'}</span>
  })
}

type NodeId = 'sf' | 'kc' | 'ai' | 'gw' | 'ex'
function SysWin({ c }: { c: Content }) {
  const [node, setNode] = useState<NodeId>('sf')
  const [z, setZ] = useState<Flip>('a')
  const pick = (n: NodeId) => { setNode(n); setZ(flip(z)) }
  const on = (n: NodeId) => node === 'sf' || node === n
  const d = c.nodes[node]
  const N = (id: NodeId, cls: string, delay: number) => (
    <button type="button" className={`node node-${id} ${cls}`} aria-pressed={node === id} onClick={() => pick(id)} style={{ animationDelay: `${delay}s` }}>
      <span className="node-title">{c.nodes[id].title}</span><span className="node-sub">{c.nodes[id].sub}</span>
    </button>
  )
  return (
    <div className="stack-28">
      <div className="win-head">
        <h3 className="h-win">{c.cards[1].title}</h3>
        <p className="hand">{c.sysHint}</p>
      </div>
      <div className="split split-sys">
        <figure className="dgm-fig">
          <div className="dgm">
            <svg className="net" width="640" height="440" viewBox="0 0 640 440" aria-hidden="true">
              <circle className="orbit" cx="320" cy="220" r="176" />
              <path className="reg" d="M2 18 V2 H18 M622 2 H638 V18 M638 422 V438 H622 M18 438 H2 V422" />
              <line className="wire" data-on={on('kc')} x1="320" y1="96" x2="320" y2="170" />
              <line className="wire" data-on={on('ex')} x1="320" y1="270" x2="320" y2="344" />
              <line className="wire" data-on={on('ai')} x1="152" y1="220" x2="230" y2="220" />
              <line className="wire" data-on={on('gw')} x1="410" y1="220" x2="488" y2="220" />
            </svg>
            {(['kc', 'ex', 'ai', 'gw'] as NodeId[]).map((id, i) => (
              <span key={id}>
                <span className={`pk p-${id}`} data-on={on(id)} style={{ animationDelay: `${1.3 + i * 0.2}s` }} />
                <span className={`pk rv p-${id}`} data-on={on(id)} style={{ animationDelay: `${2.5 + i * 0.2}s` }} />
              </span>
            ))}
            <span className="wl" style={{ left: 332, top: 125 }}>OAuth 2.0</span>
            <span className="wl" style={{ left: 332, top: 299 }}>{c.wireBottom}</span>
            <span className="wl wl-c" style={{ left: 172, top: 190, width: 40 }}>API</span>
            <span className="wl wl-c" style={{ left: 424, top: 190, width: 50 }}>HTTPS</span>
            {N('kc', '', 0.55)}
            {N('ai', 'node-pink', 0.65)}
            {N('sf', 'node-core', 0.35)}
            {N('gw', '', 0.75)}
            {N('ex', '', 0.85)}
          </div>
          <figcaption className="muted small">{c.figCap}</figcaption>
        </figure>
        <aside className="detail" aria-live="polite">
          <p className="kind">{d.kind}</p>
          <h4 className="fade" data-z={z}>{d.title}</h4>
          <p>{d.body}</p>
          <ul className="chips">{d.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        </aside>
      </div>
    </div>
  )
}

function AiWin({ c }: { c: Content }) {
  const [id, setId] = useState('cmp')
  const [z, setZ] = useState<Flip>('a')
  const d = c.demos.find((x) => x.id === id) ?? c.demos[0]
  return (
    <div className="stack-28">
      <div className="win-head">
        <h3 className="h-win">{c.cards[2].title}</h3>
        <div className="stack-10 maxw-460"><p className="muted">{c.aiText}</p><p className="muted small">{c.aiHint}</p></div>
      </div>
      <div className="tv-row dark-obj">
        <div className="tv">
          <div className="tv-screen glitch" data-z={z} aria-live="polite">
            <div className="tv-top"><span>{c.channel} {d.no}</span><span>{d.where}</span></div>
            <div className="tv-model">{d.model}</div>
            <div><small>{c.input}</small><p className="tv-input">{d.input}</p></div>
            <div className="wire-line"><span className="pkt" /><span className="pkt d2" /></div>
            <div><small>{c.back}</small>
              <div className="tv-out">{d.out.map((o) => <div key={o.k}><small>{o.k}</small><b>{o.v}</b></div>)}</div>
            </div>
          </div>
        </div>
        <div className="channels">
          {c.demos.map((x) => (
            <button key={x.id} type="button" className="ch" aria-pressed={x.id === id} onClick={() => { setId(x.id); setZ(flip(z)) }}>
              <span className="ch-no">{x.no}</span><span className="ch-txt"><b>{x.label}</b><small>{x.model}</small></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnarteWin({ c }: { c: Content }) {
  return (
    <div className="split split-anarte">
      <figure className="shot"><img src={anarteThumb} alt={c.anarteAlt} /></figure>
      <div className="stack-18">
        <h3 className="h-win">{c.cards[3].title}</h3>
        <p className="lead">{c.anarteText}</p>
        <ul className="plus">{c.anarteFeats.map((f) => <li key={f}>{f}</li>)}</ul>
        <p className="small pink">React 19, TypeScript, Vite, GSAP, GitHub Pages</p>
        <div className="row-wrap">
          <a className="btn btn-cyan" href={LINKS.anarteSite} target="_blank" rel="noreferrer">{c.openSite}</a>
          <a className="btn btn-o" href={LINKS.anarteCode} target="_blank" rel="noreferrer">{c.viewCode}</a>
        </div>
      </div>
    </div>
  )
}

function ExpWin({ c }: { c: Content }) {
  const [open, setOpen] = useState<string | null>('r4')
  return (
    <div className="stack-24">
      <div className="win-head"><h3 className="h-win">{c.expTitle}</h3><p className="muted small">{c.expHint}</p></div>
      <div className="board dark-obj">
        <div className="board-head rowgrid hide-sm">{c.expHead.map((h) => <span key={h}>{h}</span>)}</div>
        {c.revs.map((r) => (
          <div key={r.id} className="board-row">
            <button type="button" className="row rowgrid" aria-expanded={open === r.id} onClick={() => setOpen(open === r.id ? null : r.id)}>
              <span className="hide-sm cyan wide">{r.period}</span>
              <span><b className="row-company">{r.company}</b><span className="muted">{r.role}</span></span>
              <span className="hide-sm">{r.client}</span>
              <span className={r.live ? 'status live' : 'status'}><span className={r.live ? 'sdot blink' : 'sdot'} />{r.live ? c.ongoing : c.done}</span>
            </button>
            {open === r.id && <ul className="plus row-items">{r.items.map((it) => <li key={it}>{it}</li>)}</ul>}
          </div>
        ))}
      </div>
    </div>
  )
}

function SpecWin({ c }: { c: Content }) {
  return (
    <div className="stack-28">
      <h3 className="h-win">{c.specTitle}</h3>
      <dl className="spec">{c.spec.map((s) => <div key={s.k}><dt>{s.k}</dt><dd>{s.v}</dd></div>)}</dl>
      <div className="groups">
        {c.groups.map((g) => (
          <div key={g.name} className="cell">
            <div className={g.pink ? 'group-name pink' : 'group-name cyan'}>{g.name}</div>
            <ul className="chips small">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ---------- página ---------- */

export default function App() {
  const [lang, setLang] = useLang()
  const [theme, toggleTheme] = useTheme()
  const c = content[lang] as Content
  const scrolled = useScrolled()
  const heroRef = useParallax<HTMLElement>()
  const artRef = useParallax<HTMLElement>()
  const talkRef = useParallax<HTMLDivElement>()

  const [z, setZ] = useState<Flip>('n')
  const [pink, setPink] = useState(false)
  const [zapped, setZapped] = useState(false)
  const [z2, setZ2] = useState<Flip>('n')
  const [bubble, setBubble] = useState(0)
  const [talk, setTalk] = useState(0)
  const [z3, setZ3] = useState<Flip>('n')
  const [win, setWin] = useState<Win>('')
  const [copied, setCopied] = useState<'' | 'ok' | 'fail'>('')
  const [stamps, setStamps] = useState(0)
  const [zs, setZs] = useState<Flip>('n')

  const zap = () => { setZ(flip(z)); setPink(!pink); setZapped(true) }
  const poke = () => { setZ2(flip(z2)); setBubble((bubble + 1) % c.bubbles.length) }
  const nextTalk = () => { setZ3(flip(z3)); setTalk((talk + 1) % c.talk.length) }
  const stamp = () => { setZs(flip(zs)); setStamps((n) => Math.min(n + 1, 6)) }
  const copyEmail = useCallback(() => {
    try { navigator.clipboard.writeText(EMAIL).then(() => setCopied('ok'), () => setCopied('fail')) } catch { setCopied('fail') }
  }, [])

  const winMeta: Record<Exclude<Win, ''>, { file: string; title: string }> = {
    case: { file: c.cards[0].file, title: c.cards[0].title },
    sys: { file: c.cards[1].file, title: c.cards[1].title },
    ai: { file: c.cards[2].file, title: c.cards[2].title },
    anarte: { file: c.cards[3].file, title: c.cards[3].title },
    exp: { file: c.winFiles.exp, title: c.expTitle },
    spec: { file: c.winFiles.spec, title: c.specTitle },
  }
  const wm = win ? winMeta[win] : { file: '', title: '' }
  const imprints = [
    { x: -150, y: -30, r: -14 }, { x: 132, y: 10, r: 9 }, { x: -96, y: 70, r: 6 },
    { x: 180, y: -60, r: -20 }, { x: -210, y: 40, r: 16 }, { x: 70, y: 86, r: -8 },
  ].slice(0, stamps)
  const tick = [...c.clients, ...c.clients]

  return (
    <div className="page">
      <a className="skip" href="#work">{c.cta1}</a>

      <header className={scrolled ? 'top top-compact' : 'top'}>
        <div className="top-in">
          <a href="#top" className="stamp-link" aria-label="Thiago Santos">
            <span className="stamp stamp-drop"><Stamp id="ink-top" size={58} /></span>
          </a>
          <nav aria-label={c.navLabel}>
            <ul className="nav">{c.nav.map((n) => <li key={n.id}><a className="nl" href={`#${n.id}`}>{n.label}</a></li>)}</ul>
          </nav>
          <div className="top-tools">
            <button type="button" className="theme-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? c.toLight : c.toDark}>
              {theme === 'dark'
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" /></svg>}
            </button>
            <div className="lang" role="group" aria-label={c.langLabel}>
              <span className="knob" data-lang={lang} aria-hidden="true" />
              <button type="button" aria-pressed={lang === 'pt'} onClick={() => setLang('pt')}>PT</button>
              <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            </div>
            <a className="btn btn-cyan btn-sm" href={CV_URL} target="_blank" rel="noreferrer"><span className="cv-long">{c.cv}</span><span className="cv-short">CV</span></a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="top" ref={heroRef}>
          <img className="hero-city lay" style={depth(-14)} src={cidade} alt="" aria-hidden="true" />
          <div className="bpgrid hero-grid" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <span className="flash" data-z={z} aria-hidden="true" />

          <div className="person lay rise" style={depth(18)}>
            <img className="person-img" src={foto} alt={c.photoAlt} />
            <div className="ear-note hide-sm" aria-hidden="true">
              <span>{c.earNote}</span>
              <svg width="200" height="160" viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M180 4 C 160 70, 90 130, 18 150" /><path d="M32 136 L 17 150 L 36 157" /></svg>
            </div>
            <span className="fx fx-notes lay" style={depth(30)} aria-hidden="true"><span className="zap" data-z={z}><img className={pink ? 'neon neon-pink float b' : 'neon float b'} src={pink ? notasRosa : notas} alt="" /></span></span>
            <span className="fx fx-spark lay" style={depth(36)} aria-hidden="true"><img className={pink ? 'neon neon-pink twinkle' : 'neon twinkle'} src={pink ? brilhoGRosa : brilhoG} alt="" /></span>
            <button type="button" className={zapped ? 'fx fx-bolts lay' : 'fx fx-bolts lay nudge'} style={depth(30)} onClick={zap} aria-label={c.zapLabel}>
              <span className="zap" data-z={z}><img className={pink ? 'neon neon-pink float' : 'neon float'} src={pink ? raiosRosa : raios} alt="" /></span>
              <span className="popn" data-z={z} aria-hidden="true">{c.zapPop}</span>
            </button>
            {!zapped && (
              <span className="zap-hint" aria-hidden="true">
                <svg width="46" height="26" viewBox="0 0 46 26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M44 18 C 30 22, 16 18, 6 8" /><path d="M4 18 L 5 7 L 15 6" /></svg>
                {c.zapHint}
              </span>
            )}
          </div>

          <div className="hero-left wrap">
            <div className="hero-name lay" style={depth(8)}>
              <h1 className="name-in">Thiago<br />Santos</h1>
              <Dim label={c.role} />
            </div>
            <div className="hero-copy rise">
              <div className="hero-copy-in">
                <p className="status"><span className="dot" />{c.status}</p>
                <p className="headline">{c.headline}</p>
                <div className="row-wrap">
                  <a className="btn btn-cyan" href="#work">{c.cta1}</a>
                  <a className="btn btn-o" href="#contact">{c.cta2}</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="proof">
          <div className="proof-in">
            {c.proof.map((p) => <div key={p.label} className="proof-cell"><span className="proof-n">{p.n}</span><span className="proof-l">{p.label}</span></div>)}
          </div>
        </div>

        <section id="work" className="wrap sec">
          <div className="sec-head">
            <h2 className="h-sec">{c.workTitle}</h2>
          </div>
          <div className="cards">
            {c.cards.map((card) => (
              <button key={card.id} type="button" className="card" onClick={() => setWin(card.id as Win)}>
                <span className="card-bar"><span>{card.file}</span><span>{card.tag}</span></span>
                <span className={card.id === 'anarte' ? 'card-art card-art-img' : 'card-art halftone'} aria-hidden="true">
                  {card.id === 'case' && (
                    <span className="mini-flow">
                      <span className="mf-box">LWC</span><span className="mf-line"><span className="pkt" /></span>
                      <span className="mf-box on">Apex</span><span className="mf-line"><span className="pkt d2" /></span>
                      <span className="mf-box">Gateway</span>
                    </span>
                  )}
                  {card.id === 'sys' && (
                    <svg className="mini-sys" width="260" height="160" viewBox="0 0 260 160" fill="none">
                      <line className="dash s-a" x1="130" y1="80" x2="130" y2="22" />
                      <line className="dash s-a" x1="130" y1="80" x2="130" y2="138" />
                      <line className="dash s-p" x1="130" y1="80" x2="34" y2="80" />
                      <line className="dash s-a" x1="130" y1="80" x2="226" y2="80" />
                      <rect className="f-bg s-i" x="96" y="60" width="68" height="40" />
                      <rect className="f-bg s-a" x="108" y="6" width="44" height="24" />
                      <rect className="f-bg s-a" x="108" y="130" width="44" height="24" />
                      <rect className="f-bg s-p" x="6" y="68" width="44" height="24" />
                      <rect className="f-bg s-a" x="210" y="68" width="44" height="24" />
                    </svg>
                  )}
                  {card.id === 'ai' && (
                    <span className="mini-tv dark-obj">
                      <span className="ail">AWS Comprehend</span>
                      <span className="ail" style={{ animationDelay: '2s' }}>Einstein GPT</span>
                      <span className="ail" style={{ animationDelay: '4s' }}>Claude</span>
                      <span className="pink">&gt; Case.Summary__c<span className="cur">_</span></span>
                    </span>
                  )}
                  {card.id === 'anarte' && <img src={anarteThumb} alt="" />}
                </span>
                <span className="card-body">
                  <span className="card-title">{card.title}</span>
                  <span className="muted">{card.desc}</span>
                  <span className="card-foot"><span className="small pink">{card.tech}</span><span className="cgo">{c.openWin}</span></span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="sec-band">
          <div className="wrap sec about">
            <div className="about-copy">
              <h2 className="h-sec">{c.aboutTitle}</h2>
              <p className="lead">{c.aboutBio1}</p>
              <p className="muted lead">{c.aboutBio2}</p>
              <p className="now"><span className="blink pink">●</span><span>{c.nowLine}</span></p>
              <div className="row-wrap">
                <button type="button" className="btn btn-cyan" onClick={() => setWin('exp')}>{c.expBtn}</button>
                <button type="button" className="btn btn-o" onClick={() => setWin('spec')}>{c.specBtn}</button>
              </div>
            </div>
            <figure className="art" ref={artRef}>
              <div className="art-host">
                <div className="art-halo halftone" aria-hidden="true" />
                <img className="lay art-scratch" style={depth(-8)} src={riscos} alt="" aria-hidden="true" />
                <span className="lay art-fx art-bolts" style={depth(22)} aria-hidden="true"><span className="zap" data-z={z2}><img className="neon float" src={raios} alt="" /></span></span>
                <span className="lay art-fx art-s1" style={depth(32)} aria-hidden="true"><span className="zap" data-z={z2}><img className="neon twinkle" src={brilhoP} alt="" /></span></span>
                <button type="button" className="lay art-head" style={depth(9)} onClick={poke} aria-label={c.illusLabel}>
                  <span className="boop" data-z={z2}><img className="headimg" src={retrato} alt="" /></span>
                </button>
                <img className="lay art-sign" style={depth(9)} src={assinatura} alt="" aria-hidden="true" />
                <span className="lay art-fx art-notes" style={depth(22)} aria-hidden="true"><span className="zap" data-z={z2}><img className="neon float b" src={notas} alt="" /></span></span>
                <span className="lay art-fx art-big" style={depth(30)} aria-hidden="true"><span className="zap" data-z={z2}><img className="neon twinkle" src={brilhoG} alt="" /></span></span>
                <div className="bubble bubble-art lay" style={depth(14)} aria-live="polite">
                  <span className="bubble-txt note" data-z={z2}>{c.bubbles[bubble]}</span>
                </div>
              </div>
              <figcaption className="art-cap"><span className="hand-sm">{c.illusHint}</span></figcaption>
            </figure>
          </div>
        </section>

        <section id="companies" className="companies">
          <div className="wrap sec-top">
            <h2 className="h-sec center">{c.compTitle}</h2>
            <ul className="employers">
              {c.employers.map((e) => (
                <li key={e.name} className="employer">
                  <span className="employer-name">{e.name}</span>
                  <span className="employer-role">{e.role}</span>
                  <span className="small muted">{e.when}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="led dark-obj" role="region" aria-label={`${c.clientsLabel}: ${c.clients.join(', ')}`}>
            <span className="led-label">{c.clientsLabel}</span>
            <div className="led-view">
              <div className="track" aria-hidden="true">
                {tick.map((s, i) => <span key={i} className={i % 2 ? 'led-item pink' : 'led-item cyan'}>{s}<span className="led-sq" /></span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="bpgrid contact-grid" aria-hidden="true" />
          <div className="wrap contact-in">
            <h2 className="sr-only">{c.contactTitle}</h2>
            <div className="talk" ref={talkRef}>
              <span className="talk-head-wrap lay" style={depth(12)}>
                <span className="boop" data-z={z3}><img className="talk-head" src={retrato} alt="" aria-hidden="true" /></span>
              </span>
              <button type="button" className="bubble bubble-talk lay" style={depth(-8)} onClick={nextTalk} title={c.talkLabel}>
                <span className="sign"><WaveText text={c.talk[talk]} k={talk} /></span>
              </button>
            </div>
            <p className="muted center maxw-48">{c.contactLine}</p>
            <div className="row-wrap center-row">
              <a className="btn btn-cyan btn-lg" href={`mailto:${EMAIL}`}>{c.cta2}</a>
              <button type="button" className="btn btn-o btn-lg" onClick={copyEmail} aria-live="polite">{copied === 'ok' ? c.copied : copied === 'fail' ? c.copyFail : c.copy}</button>
            </div>
            <ul className="pills">
              <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href={LINKS.trailhead} target="_blank" rel="noreferrer">Trailhead</a></li>
            </ul>
            <div className="stamp-zone">
              {imprints.map((p, i) => (
                <span key={i} className="imprint" aria-hidden="true" style={{ transform: `translate(${p.x}px, ${p.y}px) rotate(${p.r}deg)` }}><Stamp id={`ink-i${i}`} size={70} /></span>
              ))}
              <button type="button" className="stamp-btn" onClick={stamp} aria-label={c.stampLabel}>
                <span className="stamp-press" data-z={zs}><Stamp id="ink-foot" size={92} /></span>
              </button>
              <span className="hand-sm">{c.stampHint}</span>
            </div>
            <p className="foot small muted"><span>© 2026 Thiago Santos</span><span>{c.credit} <a className="nl" href={LINKS.anartePost} target="_blank" rel="noreferrer">Anarte</a></span></p>
          </div>
        </section>
      </main>

      <Window open={!!win} onClose={() => setWin('')} file={wm.file} title={wm.title} closeLabel={c.close}>
        {win === 'case' && <CaseWin c={c} />}
        {win === 'sys' && <SysWin c={c} />}
        {win === 'ai' && <AiWin c={c} />}
        {win === 'anarte' && <AnarteWin c={c} />}
        {win === 'exp' && <ExpWin c={c} />}
        {win === 'spec' && <SpecWin c={c} />}
      </Window>
    </div>
  )
}
