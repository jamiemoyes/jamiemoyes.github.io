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

export async function generateStaticParams() {
  const client = createClient();
  const projects = await client.getAllByType("project");
  return projects.map((project) => ({
    uid: project.uid,
  }));
}

const Project = async ({ params }: { params: { uid: string } }) => {
  const project = await queryProject(params.uid);
  const projectContent = project.data;
  const otherProjects = await queryOtherProjects(project.id);

  return (
    <div className={styles.projectPage}>
      <div className={styles.leftColumn}>
        <div className={styles.fullProjectPreview} aria-hidden="true">
          <ProjectPreview
            attributes={projectContent.attributes}
            title={projectContent.title}
            accent_colour={projectContent.accent_colour}
            start_date={projectContent.start_date}
            end_date={projectContent.end_date}
            is_current={projectContent.is_current}
            reducedInfo={true}
          />
        </div>
        <ProjectScroller
          title="Other projects"
          projects={otherProjects}
          wrap={true}
        />
      </div>
      <div className={styles.rightColumn}>
        <Container colour={Colour.Yellow}>
          <div className={styles.badgeList}>
            <Badge variant="bold" colour={Colour.Blue}>
              {formatDatePreview(
                projectContent.start_date?.toString(),
                !projectContent.is_current &&
                  projectContent.end_date?.toString()
              )}
            </Badge>
            <Badge>📍 {projectContent.location}</Badge>
            <Badge>💼 {projectContent.company}</Badge>
          </div>
          <div className={styles.reducedProjectPreview}>
            <ProjectPreview
              attributes={projectContent.attributes}
              title={projectContent.title}
              accent_colour={projectContent.accent_colour}
              start_date={projectContent.start_date}
              end_date={projectContent.end_date}
              reducedInfo={true}
            />
          </div>
          <PrismicRichText field={projectContent.description} />
        </Container>
      </div>
    </div>
  );
};

export default Project;
