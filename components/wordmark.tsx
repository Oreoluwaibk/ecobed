type WordmarkProps = {
  tone?: "ink" | "light";
  size?: "md" | "lg";
  /** Hide the red bar and the expanded name on the smallest screens. */
  compact?: boolean;
  className?: string;
};

export function Wordmark({
  tone = "ink",
  size = "md",
  compact = false,
  className = "",
}: WordmarkProps) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  const nameSize = size === "lg" ? "text-3xl sm:text-5xl" : "text-[1.35rem]";
  const sideSize = size === "lg" ? "text-[0.68rem] sm:text-xs" : "text-[0.62rem]";
  const sideDisplay = compact ? "hidden sm:flex" : "flex";
  const barDisplay = compact ? "hidden sm:block" : "block";
  const expansionTone = tone === "light" ? "text-white" : "text-brand";
  const expansionDisplay = compact ? "mt-1 hidden md:block" : "mt-1 block";

  return (
    <span className={`inline-flex min-w-0 flex-col ${className}`}>
      <span className="inline-flex items-stretch gap-2.5">
        <span
          className={`self-center font-condensed font-bold leading-none tracking-[0.06em] ${ink} ${nameSize}`}
        >
          ECOBED
        </span>
        <span
          className={`w-[3px] self-stretch bg-brand ${barDisplay}`}
          aria-hidden="true"
        />
        <span
          className={`${sideDisplay} flex-col justify-center font-semibold uppercase leading-[1.15] tracking-[0.14em] ${ink} ${sideSize}`}
        >
          <span>Insurance</span>
          <span>Brokers Ltd.</span>
        </span>
      </span>
      <span
        className={`${expansionDisplay} max-w-full text-[0.62rem] font-semibold uppercase leading-snug tracking-[0.12em] ${expansionTone}`}
      >
        (Economy Bedrock Insurance Brokers)
      </span>
    </span>
  );
}
