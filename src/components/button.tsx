import { JSX } from "react";

/**
 * A reusable button component that renders as an anchor (`<a>`) element.
 * It supports customizable text color and navigation to external links.
 * 
 * @param {Object} props - The component properties.
 * @param {string} [props.icon] - Optional URL of the icon displayed before the button text.
 * @param {string} props.color - The text color of the button, which also affects hover and border styles.
 * @param {string} props.href - The URL the button navigates to when clicked.
 * @param {React.ReactNode} props.children - The content inside the button.
 * 
 * @returns {JSX.Element} A styled anchor button component.
 */
export default function Button({
  icon,
  color,
  href,
  children
}: Readonly<{
  icon?: string;
  color: string;
  href: string;
  children: React.ReactNode;
}>): JSX.Element {
  // Tailwind CSS poorly supports dynamic class names, so we need to define all possible color variants.
  // See: https://tailwindcss.com/docs/detecting-classes-in-source-files#dynamic-class-names
  // This approach is not scalable and requires manual maintenance. Don't use Tailwind CSS for generic components.
  const colorVariants: Record<string, string> = {
    linkedin: "text-linkedin hover:bg-linkedin border-linkedin",
    github: "text-github hover:bg-github border-github",
  }

  return (
    <a href={href} target="_blank" className={`${colorVariants[color]} inline-flex gap-[0.5rem] items-center px-4 py-1 bg-foreground font-semibold rounded-2xl hover:text-white border-solid border-2`}>
      {icon && <img src={icon} className="h-[1rem] rounded-sm"/>}
      {children}
    </a>
  )
}