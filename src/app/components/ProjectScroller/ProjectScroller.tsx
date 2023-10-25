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
  projects: (ProjectDocument | undefined)[];
};

const ProjectScroller: React.FC<ProjectPreviewType> = async ({ projects }) => {
  return (
    <div className={styles.projectContainer}>
      <h2>Projects</h2>
      <div className={styles.projectScroller}>
        {projects.map((project) => {
          console.log({ project });
          return (
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
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export { ProjectScroller };
