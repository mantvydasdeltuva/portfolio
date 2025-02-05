import { JSX } from "react";

/**
 * A card component that displays job or role details, including an image, position, company, and term.
 * The card is clickable and navigates to the specified `href` link.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.href - The URL to navigate to when the card is clicked.
 * @param {string} props.src - The source URL for the image displayed in the card.
 * @param {string} props.position - The job position or title displayed as the main heading.
 * @param {string} props.company - The company name associated with the position.
 * @param {string} props.term - The term or duration of the position.
 *
 * @returns {JSX.Element} A styled card element with job details, including an image, text, and a clickable link.
 */
export default function Card({
  href,
  src,
  position,
  company,
  term,
}: Readonly<{
  href: string;
  src: string;
  position: string;
  company: string;
  term: string;
}>): JSX.Element {
  return (
    <a href={href} target="_blank" className="flex flex-row w-full gap-[1rem] p-6 my-2 bg-foreground hover:bg-background rounded-lg border border-background shadow-sm">
      <img src={src} className="w-[5rem] h-[5rem] rounded-[2.5rem]"/>
      <div className="flex flex-col w-full">
        <h1 className={`text-lg text-header font-bold`}>
          {position}
        </h1>
        <p className={`text-base text-header`}>
          {company}
        </p>
        <p className={`text-sm text-text`}>
          {term}
        </p>
      </div>          
    </a>
  )
}