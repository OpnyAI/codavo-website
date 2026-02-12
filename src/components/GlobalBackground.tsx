export default function GlobalBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1F] via-[#0B1226] to-[#070C18]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_50%_0%,rgba(99,102,241,0.18)_0%,rgba(15,23,42,0)_70%)]" />
    </div>
  );
}
