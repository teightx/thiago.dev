import { useEffect, useRef, useState } from 'react'
import { EMAIL, waLink, type Content } from './content'
import avatar from './assets/avatar-chat.webp'

type Msg = { id: number; from: 'me' | 'you'; text: string; cta?: boolean }
let uid = 0
const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

export function ChatIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.4-5.1A8 8 0 1 1 21 12z" /><path d="M9 10.5h.01M12 10.5h.01M15 10.5h.01" /></svg>
}
export function MailIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
}
function CloseIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13" /></svg>
}

/** FAQ como um chatzinho: a pessoa toca numa pergunta e a resposta "chega digitando". */
export function FaqChat({ c, hidden }: { c: Content; hidden: boolean }) {
  const f = c.faq
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [typing, setTyping] = useState(false)
  const [asked, setAsked] = useState<number[]>([])
  const [busy, setBusy] = useState(false)
  const started = useRef(false)
  const ctaShown = useRef(false)
  const listRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const fabRef = useRef<HTMLButtonElement>(null)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const say = async (texts: string[], cta = false) => {
    for (const text of texts) {
      setTyping(true)
      await wait(reduced ? 60 : Math.min(1300, 420 + text.length * 9))
      setTyping(false)
      setMsgs((m) => [...m, { id: ++uid, from: 'me', text, cta }])
      await wait(reduced ? 20 : 150)
    }
  }

  // primeira abertura: cumprimento
  useEffect(() => {
    if (!open || started.current) return
    started.current = true
    setBusy(true)
    ;(async () => { await wait(250); await say(f.hello); setBusy(false) })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  // troca de idioma: recomeça a conversa no idioma novo
  useEffect(() => {
    if (!started.current) return
    setMsgs([]); setAsked([]); ctaShown.current = false
    if (open) { setBusy(true); (async () => { await say(f.hello); setBusy(false) })() } else started.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [f])

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduced ? 'auto' : 'smooth' })
  }, [msgs, typing, reduced])

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => panelRef.current?.querySelector<HTMLElement>('.chat-close')?.focus(), 60)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.documentElement.classList.add('chat-open')
    return () => { clearTimeout(t); window.removeEventListener('keydown', onKey); document.documentElement.classList.remove('chat-open') }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const close = () => { setOpen(false); setTimeout(() => fabRef.current?.focus(), 30) }

  const ask = async (i: number) => {
    if (busy) return
    setBusy(true)
    setAsked((a) => [...a, i])
    setMsgs((m) => [...m, { id: ++uid, from: 'you', text: f.items[i].q }])
    await wait(280)
    await say(f.items[i].a)
    if (asked.length + 1 >= 2 && !ctaShown.current) { ctaShown.current = true; await say([f.done], true) }
    setBusy(false)
  }

  const restart = () => {
    setMsgs([]); setAsked([]); ctaShown.current = false; setBusy(true)
    ;(async () => { await say(f.hello); setBusy(false) })()
  }

  const remaining = f.items.map((it, i) => ({ q: it.q, i })).filter(({ i }) => !asked.includes(i))
  const wa = waLink(c.waMsg)

  return (
    <>
      <button ref={fabRef} type="button" className={`faq-fab${open || hidden ? ' is-hidden' : ''}`} onClick={() => setOpen(true)} aria-expanded={open} aria-controls="faq-chat">
        <ChatIcon />
        <span className="faq-fab-label">{f.fab}</span>
        <span className="faq-fab-dot" aria-hidden="true" />
      </button>

      <div className={`chat-root${open ? ' is-open' : ''}`}>
        <div className="chat-scrim" onClick={close} aria-hidden="true" />
        <div className="chat" id="faq-chat" ref={panelRef} role="dialog" aria-modal="false" aria-labelledby="chat-title" aria-hidden={!open}>
          <header className="chat-head">
            <img className="chat-avatar" src={avatar} alt="" width={46} height={46} />
            <div className="chat-who">
              <p className="chat-name" id="chat-title">Thiago <span className="muted">· {f.title}</span></p>
              <p className="chat-status"><span className="dot" aria-hidden="true" />{f.status}</p>
            </div>
            <button type="button" className="chat-close" onClick={close} aria-label={f.close} tabIndex={open ? 0 : -1}><CloseIcon /></button>
          </header>

          <div className="chat-list" ref={listRef} aria-live="polite">
            {msgs.map((m) => (
              <div key={m.id} className={`msg msg-${m.from}${m.cta ? ' msg-cta' : ''}`}>
                <p>{m.text}</p>
                {m.cta && (
                  <div className="msg-actions">
                    <a className="msg-btn msg-btn-wa" href={wa} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}><ChatIcon /> WhatsApp</a>
                    <a className="msg-btn" href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}><MailIcon /> E-mail</a>
                  </div>
                )}
              </div>
            ))}
            {typing && <div className="msg msg-me msg-typing" aria-label={f.typing}><i /><i /><i /></div>}
          </div>

          <div className="chat-options">
            {msgs.length > 2 && remaining.length > 0 && <p className="chat-more">{f.more}</p>}
            <div className="chat-chips">
              {remaining.map(({ q, i }) => (
                <button key={i} type="button" className="qchip" onClick={() => ask(i)} disabled={busy} tabIndex={open ? 0 : -1}>{q}</button>
              ))}
              {remaining.length === 0 && <button type="button" className="qchip qchip-ghost" onClick={restart} tabIndex={open ? 0 : -1}>{f.restart}</button>}
            </div>
            <a className="chat-wa" href={wa} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}><ChatIcon /> {f.direct}</a>
          </div>
        </div>
      </div>
    </>
  )
}
