import { JSX } from "react";

/**
 * A simple divider component that renders a horizontal dashed line (`<hr>`).
 * It serves as a visual separator within the UI.
 *
 * @returns {JSX.Element} A styled horizontal rule (`<hr>`) with dashed borders.
 */
export default function Divider(): JSX.Element {
  return (
    <hr className="border-dashed border-support"/>
  )
}