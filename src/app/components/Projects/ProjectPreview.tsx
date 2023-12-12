import { Colour } from "@/app/shared/types/types";
import styles from "./ProjectPreview.module.css";
import { ArrowRight } from "@/app/shared/icons";
import { Badge } from "../Badge/Badge";
import { ProjectDocumentData } from "../../../../prismicio-types";
import { formatDatePreview } from "@/app/shared/utils";
import { useEffect } from "react";

// interface Attribute {
//   text: string;
//   icon: string;
// }

interface ProjectPreviewType extends Partial<ProjectDocumentData> {
  reducedInfo: boolean;
  uid?: string;
  async?: string;
  badge?: boolean;
}

const ProjectPreview: React.FC<ProjectPreviewType> = ({
  title,
  accent_colour: colour,
  attributes,
  start_date: from,
  end_date: to,
  reducedInfo,
  uid,
  badge = true,
}) => {
  return (
    <div className={styles.project} data-reduced={reducedInfo}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        {!reducedInfo && badge && (
          <Badge variant="bold" colour={colour?.toString() as Colour}>
            {formatDatePreview(from?.toString(), to?.toString())}
          </Badge>
        )}
      </div>
      <ul>
        {attributes?.map(({ text, icon }) => (
          <li key={`${text}-${icon}`}>
            {icon} {text}
          </li>
        ))}
      </ul>
      {!reducedInfo && (
        <a href={`/project/${uid}`}>
          Read more <ArrowRight />
        </a>
      )}
    </div>
  );
};

export { ProjectPreview };
