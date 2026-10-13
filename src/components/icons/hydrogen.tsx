import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { size?: number; color?: string };

/**
 * Shopify Hydrogen mark, taken from .github/images/hydrogen-logo.svg in
 * github.com/Shopify/hydrogen (wordmark removed). The lower H is black in the
 * original; it is drawn in `color` (default white) so it reads on dark backgrounds.
 */
export function Hydrogen({ size = 24, color = "#ffffff", ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="154 27 80 85"
      width={size}
      height={size}
      fill="none"
      {...rest}
    >
      <path
        d="m193.98 109.45-37.817-20.092 12.934-6.8171 14.561 7.7326 12.219-6.4411-14.562-7.7325 12.934-6.8334 37.817 20.092-12.934 6.817-13.757-7.3074-12.235 6.4573 13.774 7.3076-12.934 6.817z"
        fill={color}
      />
      <path
        d="m193.98 69.482-37.817-20.092 12.933-6.817 14.562 7.7325 12.218-6.4411-14.562-7.7325 12.934-6.8334 37.817 20.092-12.933 6.817-13.757-7.3074-12.236 6.4574 13.774 7.3074-12.933 6.8171z"
        fill="url(#hydrogen-gradient)"
      />
      <defs>
        <linearGradient
          id="hydrogen-gradient"
          x1="230.64"
          x2="174.89"
          y1="50.952"
          y2="80.993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#430470" offset="0.002" />
          <stop stopColor="#8E01F0" offset="0.385" />
          <stop stopColor="#354CF6" offset="0.635" />
          <stop stopColor="#01FFFF" offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
