import { HomeDocumentDataPinBoardLinksItem } from "../../../../prismicio-types";
import classes from "./PinBoard.module.css";
import { FilledLinkToWebField } from "@prismicio/client";

interface PinBoardProps {
  pins: HomeDocumentDataPinBoardLinksItem[];
}

const PinBoard: React.FC<PinBoardProps> = ({ pins }) => {
  return (
    <div className={classes.pinBoard}>
      <h2>Pinboard</h2>
      <ul>
        {pins.map(({ social_link, link_name }) => {
          const { url } = social_link as FilledLinkToWebField;
          return (
            <li key={url}>
              <a href={url} target="_blank">
                {link_name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { PinBoard };
