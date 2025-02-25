import styles from "./SpotifyWidget.module.css";
import localFont from "next/font/local";

import Link from "next/link";
import { fetchSpotifyTopTrack } from "./spotify";
import { TrackInfo } from "@/app/shared/types/types";

const kyivType = localFont({
  src: "../../fonts/KyivTypeSans-Regular2.woff2",
  weight: "200",
});

const SpotifyWidget = async ({
  trackInfo,
}: {
  trackInfo: Partial<TrackInfo>;
}) => {
  return (
    trackInfo && (
      <div className={styles.trackContainer}>
        <img
          className={styles.artwork}
          // sizes="100vw"
          // width={300}
          // height={300}
          // style={{
          //   width: "100%",
          //   height: "auto",
          // }}
          // height="640"
          // layout="responsive"
          src={`${trackInfo.images?.[0]?.url}`}
          alt="Album cover art"
        />
        <Link href={`${trackInfo.href}`} target="_blank">
          <div className={styles.trackInfo}>
            <h3>🎧 Top listened to</h3>
            <p className={`${styles.trackTitle} ${kyivType.className}`}>
              {trackInfo.title}
            </p>
            <p className={styles.trackArtist}>{trackInfo.artist}</p>
          </div>
        </Link>
      </div>
    )
  );
};

export { SpotifyWidget };
