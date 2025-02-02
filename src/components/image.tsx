import { JSX } from "react";

/**
 * A simple image component that renders an image (`<img>`) element with additional styling.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.src - The source URL of the image to display.
 *
 * @returns {JSX.Element} A styled image element with rounded corners, border, and shadow.
 */
export default function Image({
  src,
}: Readonly<{
  src: string;
}>): JSX.Element {
  return (
    <img src={src} className="rounded-lg border border-background shadow-sm"/>
  )
}