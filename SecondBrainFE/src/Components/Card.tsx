import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TrashIcon } from "../icons/TrashIcon";

// Example: Add your other icons
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { PdfIcon } from "../icons/PDFIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

interface CardProps {
  type: "document" | "youtube" | "twitter" | "pdf" | "github" | "linkedin";
  title: string;
}

export function Card({ type, title }: CardProps) {
  const renderIcon = () => {
    switch (type) {
      case "document":
        return <DocumentIcon />;
      case "youtube":
        return <YoutubeIcon />;
      case "twitter":
        return <TwitterIcon />;
      case "pdf":
        return <PdfIcon />;
      case "github":
        return <GithubIcon />;
      case "linkedin":
        return <LinkedinIcon />;
      default:
        return <DocumentIcon />; // fallback
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-100 max-w-96">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-lg">
          {renderIcon()}
          {title}
        </div>
        <div className="flex gap-2">
          <ShareIcon />
          <TrashIcon />
        </div>
      </div>
    </div>
  );
}
