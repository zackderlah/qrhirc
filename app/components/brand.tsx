export function Brand({ home = '/' }: { home?: string }) {
  return (
    <a href={home} aria-label="QRHIRC home" className="brand">
      <img
        src="/assets/logo.png"
        alt="Queensland Rural Health Innovation and Research Collaborative"
      />
    </a>
  );
}
