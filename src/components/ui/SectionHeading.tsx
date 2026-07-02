import { AnimateOnScroll } from "./AnimateOnScroll";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  const isDark = theme === "dark";

  return (
    <AnimateOnScroll className={`mb-14 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-widest ${
            isDark ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          isDark ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            isDark ? "text-gray-200" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </AnimateOnScroll>
  );
}
