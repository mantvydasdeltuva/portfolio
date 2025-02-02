import { JSX } from "react";

/**
 * A customizable text component that renders a `<p>` element with text styling.
 * It applies base text styling and allows for additional customization via the `className` prop.
 *
 * @param {Object} props - The component properties.
 * @param {string} [props.className] - Optional additional class names to apply custom styling to the text.
 * @param {React.ReactNode} props.children - The content to be rendered inside the text component.
 *
 * @returns {JSX.Element} A styled text element with customizable classes and padding.
 */
export default function Text({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <p className={`text-sm text-text py-[1rem] ${className}`}>
      {children}
    </p>
  )
}