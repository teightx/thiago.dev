export default function NeonDivider() {
  return (
    <div className="relative w-full h-px my-16">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 blur-[1px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />
    </div>
  )
}
