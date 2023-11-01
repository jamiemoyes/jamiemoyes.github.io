"use client";
import { useState } from "react";
import { HomeDocumentDataQuickLinksItem } from "../../../../prismicio-types";
import styles from "./QuickLinks.module.css";
import { LinkField, FilledLinkToWebField } from "@prismicio/client";

interface IQuickLinks {
  links: HomeDocumentDataQuickLinksItem[];
  collapsible?: boolean;
}

const QuickLinks: React.FC<IQuickLinks> = ({ links, collapsible = true }) => {
  const [expanded, setExpanded] = useState(!collapsible);
  function toggleExpanded() {
    if (collapsible) setExpanded((prevExpanded) => !prevExpanded);
  }
  return (
    <div className={styles.disclosure}>
      <h2 onClick={toggleExpanded}>Quick links</h2>
      {expanded && (
        <ul>
          {links.map((qLink) => {
            let href;
            let target;
            if (qLink.pageid) {
              href = `/project/${qLink.pageid.toString()}`;
              target = "";
            } else {
              href = (qLink.link as FilledLinkToWebField).url;
              target = "_blank";
            }
            return (
              <li key={`${qLink.title}-${href}`}>
                <a target={target} href={href.toString()}>
                  {qLink.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export { QuickLinks };
