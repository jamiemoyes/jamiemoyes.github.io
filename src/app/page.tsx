import styles from "./page.module.css";
import { Container } from "./components/Container/Container";
import { Bio } from "./components/Bio/Bio";
import { Badge } from "./components/Badge/Badge";
import { PinBoard } from "./components/PinBoard/PinBoard";
import { Colour } from "./shared/types/types";
import { SpotifyWidget } from "./components/SpotifyWidget/SpotifyWidget";
import { ProjectScroller } from "./components/ProjectScroller/ProjectScroller";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import { About } from "./components/About/About";
import { HomeDocumentDataProjectsItem } from "../../prismicio-types";
import { QuickLinks } from "./components/QuickLinks/QuickLinks";

function queryHomepage() {
  const client = createClient();
  return client.getSingle("home");
}

function queryProjects(
  projectContentRelationships: HomeDocumentDataProjectsItem[]
) {
  const client = createClient();

  return Promise.all(
    projectContentRelationships.map((cR) => {
      if (prismic.isFilled.contentRelationship(cR.project) && cR.project.uid) {
        console.log({ cR });
        return client.getByUID("project", cR.project.uid);
      }
    })
  );
}

export default async function Home() {
  const page = await queryHomepage();

  const aboutData = page.data.about[0];
  const projects = await queryProjects(page.data.projects);

  return (
    <>
      <Container colour={Colour.Red}>
        <div className={styles.responsiveGrid}>
          {page.data.bio.map((bio) => (
            <Bio key={bio.location?.toString()} content={bio} />
          ))}
          <div className={styles.media}>
            <div className={styles.badgeList}>
              <Badge>
                <i>📍</i> Glasgow
              </Badge>
              <Badge>
                <i>💼</i> AND Digital
              </Badge>
            </div>
            <div className={styles.pinBoard}>
              <div className={styles.pinBoardLeft}>
                <PinBoard pins={page.data.pin_board_links} />
                <div className={styles.quickLinksFull}>
                  <QuickLinks
                    links={page.data.quick_links}
                    collapsible={false}
                  />
                </div>
              </div>
              <SpotifyWidget />
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.quickLinksSmall}>
        <QuickLinks links={page.data.quick_links} />
      </div>
      {projects && <ProjectScroller projects={projects} wrap={false} />}
      <About
        title={aboutData?.title?.toString()}
        description={aboutData?.description}
      />
    </>
  );
}
