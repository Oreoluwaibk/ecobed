import Image from "next/image";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-14 w-auto" }: LogoProps) {
  return (
    <Image
      src="/ecobed-logo.svg"
      alt=""
      width={360}
      height={430}
      unoptimized
      className={className}
    />
  );
}
