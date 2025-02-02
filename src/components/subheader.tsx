import { JSX } from "react";

/**
 * A customizable subheader component that renders a `<p>` element with text styling.
 * It accepts `className` to allow additional customization and `children` to display any content inside the subheader.
 *
 * @param {Object} props - The component properties.
 * @param {string} [props.className] - Optional additional class names to apply custom styling to the subheader.
 * @param {React.ReactNode} props.children - The content to be rendered inside the subheader.
 *
 * @returns {JSX.Element} A styled subheader element with customizable text and additional classes.
 */
export default function SubHeader({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <p className={`text-base text-header ${className}`}>
      {children}
    </p>
  )
}