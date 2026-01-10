'use client'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/[0.05]">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/35">
          <p>© {new Date().getFullYear()} Thiago Santos</p>
          <p>Salesforce Architect</p>
        </div>
      </div>
    </footer>
  )
}
