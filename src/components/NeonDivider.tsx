export default function NeonDivider() {
  return (
    <div className="relative w-full h-px my-8">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-70 blur-[1px] shadow-neon" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </div>
  )
}
