import { Colour } from "@/app/shared/types/types";
import styles from "./ProjectPreview.module.css";
import { ArrowRight } from "@/app/shared/icons";
import { Badge } from "../Badge/Badge";
import { ProjectDocumentData } from "../../../../prismicio-types";
import { formatDatePreview } from "@/app/shared/utils";

// interface Attribute {
//   text: string;
//   icon: string;
// }

interface ProjectPreviewType extends Partial<ProjectDocumentData> {
  reducedInfo: boolean;
  uid?: string;
  async?: string;
}

const ProjectPreview: React.FC<ProjectPreviewType> = ({
  title,
  accent_colour: colour,
  attributes,
  start_date: from,
  end_date: to,
  reducedInfo,
  uid,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles.titleContainer}>
        <h3>{title}</h3>
        {!reducedInfo && (
          <Badge variant="bold" colour={colour?.toString() || Colour.Blue}>
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
