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
  primary: 'bg-raga-pine text-white hover:bg-raga-ink focus-visible:ring-raga-gold',
  secondary:
    'border border-raga-pine/30 bg-raga-linen text-raga-ink hover:border-raga-pine focus-visible:ring-raga-gold',
  ghost: 'text-raga-ink hover:bg-raga-sand/60 focus-visible:ring-raga-gold',
};

const baseClasses =
  'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-raga-linen';

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
