import styles from "./SpotifyWidget.module.css";
import localFont from "next/font/local";
import { fetchSpotifyTopTrack } from "./spotify";

const kyivType = localFont({
  src: "../../fonts/KyivTypeSans-Regular2.woff2",
  weight: "200",
});

const SpotifyWidget: React.FC = async () => {
  const trackInfo = await fetchSpotifyTopTrack();

  return (
    trackInfo && (
      <div className={styles.trackContainer}>
        <img
          className={styles.artwork}
          // width="640"
          // height="640"
          // layout="responsive"
          src={`${trackInfo.images?.[0]?.url}`}
          alt=""
        />
        <a href={trackInfo.href} target="_blank">
          <div className={styles.trackInfo}>
            <h3>🎧 Top listened to</h3>
            <p className={`${styles.trackTitle} ${kyivType.className}`}>
              {trackInfo.title}
            </p>
            <p className={styles.trackArtist}>{trackInfo.artist}</p>
          </div>
        </a>
      </div>
    )
  );
};

export { SpotifyWidget };
