import { cn } from '../../utils/cn';

export function Button({ href, children, variant = 'primary', className = '', target, rel, download }) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold transition duration-300',
    variant === 'primary'
      ? 'bg-base-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-base-700'
      : 'border border-base-200 bg-white/85 text-base-900 hover:border-accent-300 hover:bg-accent-100/70',
    className,
  );

  return (
    <a href={href} className={classes} target={target} rel={rel} download={download}>
      {children}
    </a>
  );
}