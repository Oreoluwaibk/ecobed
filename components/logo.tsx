type LogoProps = {
  className?: string;
  showMark?: boolean;
};

export function Logo({ className, showMark = false }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 68"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M14 46c-4 2-7 8-6 14 6 1 10 5 14 8"
          strokeWidth="1.7"
        />
        <path d="M16 44c1 7 3 12 8 16" strokeWidth="1.5" />
        <path
          d="M50 46c4 2 7 8 6 14-6 1-10 5-14 8"
          strokeWidth="1.7"
        />
        <path d="M48 44c-1 7-3 12-8 16" strokeWidth="1.5" />
        <path d="M22 64c3 3 7 4 10 4s7-1 10-4" strokeWidth="1.6" />
      </g>
      <g stroke="currentColor" strokeLinecap="round">
        <circle cx="32" cy="26" r="15" strokeWidth="1.7" />
        {showMark ? (
          <>
            <path d="M19.5 19.5h25" strokeWidth="1.15" />
            <path d="M19.5 32.5h25" strokeWidth="1.15" />
          </>
        ) : (
          <>
            <ellipse cx="32" cy="26" rx="15" ry="5.6" strokeWidth="1.2" />
            <ellipse cx="32" cy="26" rx="6" ry="15" strokeWidth="1.2" />
            <path
              d="M18.5 21.4c3.5 2.2 8 3.4 13.5 3.4s10-1.2 13.5-3.4"
              strokeWidth="1.15"
            />
            <path
              d="M18.5 30.6c3.5-2.2 8-3.4 13.5-3.4s10 1.2 13.5 3.4"
              strokeWidth="1.15"
            />
          </>
        )}
      </g>
      {showMark ? (
        <text
          x="32"
          y="28.4"
          textAnchor="middle"
          fill="currentColor"
          fontSize="7"
          fontWeight="700"
          fontFamily="Arial, Helvetica, sans-serif"
          letterSpacing="0.4"
        >
          EBIB
        </text>
      ) : null}
    </svg>
  );
}
