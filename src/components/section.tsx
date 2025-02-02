import { JSX } from "react";

/**
 * A layout component that wraps content inside a `<section>` element.
 * It applies styling for a centered, responsive, and justified text layout.
 * 
 * @param {Object} props - The component properties.
 * @param {React.ReactNode} props.children - The content to be rendered inside the section.
 * 
 * @returns {JSX.Element} A styled section component.
 */
export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <section className="flex flex-col w-full max-w-lg mx-auto text-justify">
      {children}
    </section>
  )
}