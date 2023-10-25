import styles from "./About.module.css";
import { RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";

interface IAbout {
  title?: string;
  description?: RichTextField;
}

const About: React.FC<IAbout> = ({ title, description }) => {
  return (
    <section className={styles.aboutSection}>
      <h2>{title}</h2>
      <div aria-hidden className={styles.divider} />
      <PrismicRichText field={description} />
    </section>
  );
};

export { About };
