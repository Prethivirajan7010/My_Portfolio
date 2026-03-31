export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="font-display text-[2rem] font-semibold leading-[1.14] text-base-900 sm:text-[2.2rem] lg:text-[2.5rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-[15px] leading-7 text-base-700 sm:text-base">
        {description}
      </p>
    </div>
  );
}