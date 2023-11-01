import classes from "./Bio.module.css";
import { HomeDocumentDataBioItem, Simplify } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface BioType {
  content: Simplify<HomeDocumentDataBioItem>;
}

const Bio: React.FC<BioType> = ({ content }) => {
  return (
    <div className={classes.aboutSection}>
      <img
        src={content.profile_picture.url?.toString()}
        alt={content.profile_picture.alt?.toString()}
      />
      <PrismicRichText field={content.description} />
    </div>
  );
};

export { Bio };
