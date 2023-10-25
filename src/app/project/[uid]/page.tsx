import styles from "./page.module.css";
import { PrismicRichText } from "@prismicio/react";
import * as prismic from "@prismicio/client";
import { Container } from "../../components/Container/Container";
import { Colour } from "../../shared/types/types";
import { Badge } from "../../components/Badge/Badge";
import { ProjectPreview } from "../../components/Projects/ProjectPreview";
import { createClient } from "@/prismicio";
import { formatDatePreview } from "@/app/shared/utils";
import { ProjectScroller } from "@/app/components/ProjectScroller/ProjectScroller";

function queryProject(uid: string) {
  const client = createClient();
  return client.getByUID("project", uid);
}

function queryOtherProjects(id: string) {
  const client = createClient();
  return client.getAllByType("project", {
    filters: [prismic.filter.not("document.id", id)],
    limit: 2,
  });
}

const Project = async ({ params }: { params: { uid: string } }) => {
  const project = await queryProject(params.uid);
  console.log({ project });
  const projectContent = project.data;
  const otherProjects = await queryOtherProjects(project.id);
  return (
    <div className={styles.projectPage}>
      <Container colour={Colour.Yellow}>
        <div className={styles.badgeList}>
          <Badge variant="bold" colour={Colour.Blue}>
            {formatDatePreview(
              projectContent.start_date?.toString(),
              projectContent.end_date?.toString()
            )}
          </Badge>
          <Badge>📍 {projectContent.location}</Badge>
          <Badge>💼 {projectContent.company}</Badge>
        </div>
        <ProjectPreview
          attributes={projectContent.attributes}
          title={projectContent.title}
          accent_colour={projectContent.accent_colour}
          start_date={projectContent.start_date}
          end_date={projectContent.end_date}
          reducedInfo={true}
        />
        <PrismicRichText field={projectContent.description} />
      </Container>
      <ProjectScroller projects={otherProjects} />
    </div>
  );
};

export default Project;
