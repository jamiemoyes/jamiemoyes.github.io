import classes from "./Bio.module.css";
import { HomeDocumentDataBioItem, Simplify } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";
interface BioType {
  content: Simplify<HomeDocumentDataBioItem>;
}

const Bio: React.FC<BioType> = ({ content }) => {
  return (
    <div className={classes.aboutSection}>
      <Image
        src={`${content.profile_picture.url}`}
        alt={`${content.profile_picture.alt}`}
        sizes="100vw"
        width="272"
        height="272"
        priority
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <PrismicRichText field={content.description} />
    </div>
  );
};

export { Bio };
