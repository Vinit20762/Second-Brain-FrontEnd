import { DocumentIcon } from "../icons/DocumentIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TrashIcon } from "../icons/TrashIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { PdfIcon } from "../icons/PDFIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";

interface CardProps {
  type: "document" | "youtube" | "twitter" | "pdf" | "github" | "linkedin";
  title: string;
  link: string;
}

export function Card({ type, title, link }: CardProps) {
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
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-100 max-w-86">
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-lg">
          {renderIcon()}
          {title}
        </div>
        <div className="flex gap-2">
          <a href={link} target="_blank">
          <ShareIcon />
          </a>
          <TrashIcon />
        </div>
      </div>
      <div className= "mt-4">
        {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
        {type === "twitter" && <blockquote className="twitter-tweet"> <a href={link.replace("x.com", "twitter.com")}></a> </blockquote>}
        {type === "document" && (
          <>
            {link.endsWith(".jpg") || link.endsWith(".jpeg") || link.endsWith(".png") ? (
              <img src={link} alt={title} className="w-full rounded-lg" />
            ) : link.endsWith(".pdf") ? (
              <iframe
                src={link}
                className="w-full h-96 rounded-lg"
                title={title}
              ></iframe>
            ) : link.endsWith(".doc") || link.endsWith(".docx") ? (
              <iframe
                src={`https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
                  link
                )}`}
                className="w-full h-96 rounded-lg"
                title={title}
              ></iframe>
            ) : (
              <p className="text-gray-500 text-sm">Unsupported document type</p>
            )}
          </>
         )}

        {type === "github" && (() => {
          try {
            const url = new URL(link);
            const parts = url.pathname.split("/").filter(Boolean);
            
            const isRepo = parts.length === 2;
            const username = parts[0];
            const repo = isRepo ? parts[1] : null;

            return (
              <div className="flex flex-col items-center p-4 border rounded-lg bg-gray-50">
                <GithubIcon />

                {isRepo ? (
                  <a href={link} target ="_blank">
                    <p className="font-medium text-lg">{repo}</p>
                    <img
                      src={`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}`}
                      alt="Repo Stats"
                      className="w-full rounded-lg mt-2"
                    />
                  </a>
                ) : (
                  <a href={link} target="_blank" className="flex flex-col items-center"> 
                    <p className="font-medium text-lg">{username}</p>
                    <p className="font-medium text-lg">Profile</p>
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="Generic GitHub Profile"
                      className="w-20 h-20 mt-2 rounded-full bg-white"
                    />
                  </a>
                )}

                <a
                  href={link}
                  target="_blank"
                  className="mt-3 text-blue-600 underline"
                >
                  View on GitHub
                </a>
              </div>
            );
          } catch (err) {
            return <p className="text-red-500 text-sm">Invalid GitHub link</p>;
          }
        })()}
      </div>
    </div>
  );
}
