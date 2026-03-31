export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <div
      className={className}
      style={{
        animation: `revealUp 0.7s ease-out ${delay}s both`,
      }}
    >
      {children}
    </div>
  );
}