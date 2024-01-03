import { Colour } from "@/app/shared/types/types";
import { ProjectPreview } from "../Projects/ProjectPreview";
import styles from "./ProjectScroller.module.css";
import { ProjectDocument } from "../../../../prismicio-types";

type ProjectPreviewType = {
  title?: string;
  projects: (ProjectDocument | undefined)[];
  wrap?: boolean;
};

const ProjectScroller: React.FC<ProjectPreviewType> = async ({
  title = "Projects",
  projects,
  wrap,
}) => {
  return (
    <div className={styles.projectContainer}>
      <h2>{title}</h2>
      <div className={styles.projectScroller} data-wrap={wrap}>
        {projects.map(
          (project) =>
            project && (
              <ProjectPreview
                key={project.uid}
                reducedInfo={false}
                accent_colour={project.data.accent_colour}
                attributes={project.data.attributes}
                company={project.data.company}
                end_date={project.data.end_date}
                start_date={project.data.start_date}
                is_current={project.data.is_current}
                uid={project.uid}
                title={project.data.title}
                badge={!wrap}
              />
            )
        )}
      </div>
    </div>
  );
};

export { ProjectScroller };
