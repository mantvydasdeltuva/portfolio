import { JSX } from "react";

/**
 * A customizable header component that renders a `<h1>` element with text styling.
 * It accepts `className` to allow additional customization and `children` to display any content inside the header.
 *
 * @param {Object} props - The component properties.
 * @param {string} [props.className] - Optional additional class names to apply custom styling to the header.
 * @param {React.ReactNode} props.children - The content to be rendered inside the header.
 *
 * @returns {JSX.Element} A styled header element with customizable text and additional classes.
 */
export default function Header({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <h1 className={`text-lg text-header font-bold ${className}`}>
      {children}
    </h1>
  )
}