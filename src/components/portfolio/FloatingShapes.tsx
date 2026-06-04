export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute top-20 left-[8%] h-24 w-24 rounded-2xl bg-gradient-primary opacity-40 blur-xl animate-float" />
      <div className="absolute top-40 right-[12%] h-32 w-32 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-float-slow" />
      <div className="absolute bottom-32 left-[15%] h-40 w-40 rounded-3xl bg-accent/30 blur-3xl animate-float" />
      <div className="absolute top-1/2 right-[5%] h-20 w-20 rounded-full border border-primary/40 animate-spin-slow" />
      <div className="absolute bottom-20 right-[20%] h-16 w-16 rotate-45 border border-accent/40 animate-float-slow" />
    </div>
  );
}
