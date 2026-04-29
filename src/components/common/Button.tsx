import { Link } from 'react-router-dom';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type BaseButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
}>;

type ButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonLinkProps = BaseButtonProps & {
  href: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-raga-pine text-raga-ivory shadow-card hover:-translate-y-0.5 hover:bg-raga-forest hover:shadow-glow focus-visible:ring-raga-gold',
  secondary:
    'border border-raga-pine/20 bg-raga-pearl/90 text-raga-ink shadow-sm hover:-translate-y-0.5 hover:border-raga-gold/70 hover:bg-white hover:shadow-card focus-visible:ring-raga-gold',
  ghost: 'text-raga-ink hover:-translate-y-0.5 hover:bg-raga-mist/70 focus-visible:ring-raga-gold',
};

const baseClasses =
  'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-extrabold tracking-[0.01em] transition duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-raga-linen';

export function Button(props: ButtonProps | ButtonLinkProps) {
  const { children, className = '', variant = 'primary' } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (typeof props.href === 'string') {
    return (
      <Link className={classes} to={props.href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
