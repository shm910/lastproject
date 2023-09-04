import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({ name, position, period, markdown, imgSrc }: WorkExperienceProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="1920"
            height="1080"
            alt={name}
          />
        )}
      </div>
    </div>
  );
};

export default WorkExperienceItem;
