import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cx } from '@/utils/cx';
import styles from './PixelButton.module.css';

export type PixelButtonVariant = 'primary' | 'secondary' | 'inverse';
export type PixelButtonSize = 'md' | 'lg';
/** `dark` swaps the border and shadow to light colours for use on dark sections. */
export type PixelButtonTone = 'light' | 'dark';

interface CommonProps {
  variant?: PixelButtonVariant;
  size?: PixelButtonSize;
  tone?: PixelButtonTone;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

type AsLink = CommonProps & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;
type AsButton = CommonProps & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export type PixelButtonProps = AsLink | AsButton;

const isExternal = (href: string) => /^https?:\/\//.test(href);

/**
 * The kit's core button: square corners, a 2px ink border and a hard offset
 * shadow that presses in on click. Renders an <a> when given `href`, otherwise a <button>.
 */
export function PixelButton(props: PixelButtonProps) {
  const { variant = 'secondary', size = 'md', tone = 'light', icon, children, className, ...rest } = props;
  const classes = cx(styles.button, styles[variant], styles[size], tone === 'dark' && styles.dark, className);
  const content = (
    <>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </>
  );

  if (typeof props.href === 'string') {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    const externalProps = isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...anchorRest}>
        {content}
        {isExternal(href) && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
