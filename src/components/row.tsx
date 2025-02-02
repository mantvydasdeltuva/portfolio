import { JSX } from "react";

/**
 * A customizable row component that renders a `<div>` element with a flexbox layout.
 * It applies horizontal spacing between children and allows additional styling via `className`.
 *
 * @param {Object} props - The component properties.
 * @param {string} [props.className] - Optional additional class names to apply custom styling to the row.
 * @param {React.ReactNode} props.children - The content to be rendered inside the row.
 *
 * @returns {JSX.Element} A styled row element with a flexbox layout and customizable classes.
 */
export default function Row({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className={`flex flex-row gap-x-[1rem] ${className}`}>
      {children}
    </div>
  )
}