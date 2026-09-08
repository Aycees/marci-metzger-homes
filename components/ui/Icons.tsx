import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 18, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    ...props,
  };
}

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const SlidersIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={1.7}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const NavigationIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 11 22 2l-9 19-2-8-8-2Z" />
  </svg>
);

export const MessageIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.7-.8L3 21l1.9-5.2A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={2}>
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

export const StarIcon = ({ size = 15, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
    {...props}
  >
    <path d="m12 2 3 6.6 7 .9-5.1 4.8 1.3 7L12 17.9 5.8 21.3l1.3-7L2 9.5l7-.9Z" />
  </svg>
);

export const FacebookIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
    <path d="M14 9V7.5c0-.8.3-1.2 1.3-1.2H17V3.2A19 19 0 0 0 14.7 3C12 3 10.3 4.6 10.3 7.2V9H8v3.4h2.3V21H14v-8.6h2.5l.4-3.4H14Z" />
  </svg>
);

export const InstagramIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} aria-hidden focusable="false" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const LinkedInIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
    <path d="M4.5 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 9h3v12H3V9Zm6 0h2.9v1.7h.1A3.2 3.2 0 0 1 15 9c3.1 0 3.7 2 3.7 4.7V21h-3v-6c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9V9Z" />
  </svg>
);

export const YelpIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
    <path d="M11 3v9L5.5 9.2 6.8 5.5 11 3Zm2.6 8.4 4.6-2.2 1.4 3.5-5 1.6-1-2.9ZM11 14v7l-4.2-2.4L5.5 15 11 14Zm2.6 1.6 3.4 4.2-3 2-1.6-5 1.2-1.2Z" />
  </svg>
);

export const SpinnerIcon = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden focusable="false" {...props}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2.4} opacity={0.3} />
    <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 12 12"
        to="360 12 12"
        dur="0.8s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
