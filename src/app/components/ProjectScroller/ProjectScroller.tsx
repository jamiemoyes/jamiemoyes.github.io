import { Colour } from "@/app/shared/types/types";
import { ProjectPreview } from "../Projects/ProjectPreview";
import styles from "./ProjectScroller.module.css";
import {
  HomeDocumentDataProjectsItem,
  ProjectDocument,
} from "../../../../prismicio-types";
import { Client } from "@prismicio/client";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

const colors = [Colour.Red, Colour.Blue, Colour.LightBlue];

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
