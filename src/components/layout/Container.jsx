export function Container({ id, className = '', children }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      {children}
    </section>
  );
}
