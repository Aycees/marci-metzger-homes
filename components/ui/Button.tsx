import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "onDark";
type Size = "md" | "sm";

const VARIANT: Record<Variant, string> = {
  primary: "bg-clay text-white border-transparent hover:bg-clay-dark active:translate-y-px",
  ghost:
    "bg-transparent text-ink border-ink hover:bg-ink hover:text-bone active:translate-y-px",
  onDark:
    "bg-transparent text-white border-white/60 hover:bg-white hover:text-ink active:translate-y-px",
};

const SIZE: Record<Size, string> = {
  md: "h-[52px] px-[26px] text-[15px]",
  sm: "h-[46px] px-[22px] text-[15px]",
};

const BASE =
  "inline-flex items-center justify-center gap-2.5 rounded-[var(--radius-btn)] border font-semibold tracking-[0.02em] " +
  "transition-[background-color,color,transform] duration-150 ease-[var(--ease-brand)] " +
  "disabled:cursor-not-allowed disabled:bg-[#EDE7DE] disabled:text-[#A79E92] disabled:border-line disabled:translate-y-0";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >;

type NativeButtonProps = CommonProps & { href?: undefined } & Omit<
    ComponentProps<"button">,
    "className" | "children"
  >;

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${BASE} ${VARIANT[variant]} ${SIZE[size]} ${className}`;

  if (props.href !== undefined) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    const external = /^(https?:|tel:|sms:|mailto:)/.test(href);

    if (external) {
      return (
        <a href={href} className={classes} {...(rest as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
