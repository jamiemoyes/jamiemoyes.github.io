import { TrackInfo } from "@/app/shared/types/types";
import styles from "./SpotifyWidget.module.css";
import { fetchSpotifyTopTrack } from "./spotify";

const SpotifyWidget: React.FC = async () => {
  console.log({ api_URL: process.env.NEXT_PUBLIC_API_URL });
  const trackInfo = await fetchSpotifyTopTrack();

  return (
    trackInfo && (
      <div className={styles.trackContainer}>
        <img
          className={styles.artwork}
          src={trackInfo.images?.[0]?.url}
          alt=""
        />
        <a href={trackInfo.href} target="_blank">
          <div className={styles.trackInfo}>
            <p>🎧 Top listened to</p>
            <p className={styles.trackTitle}>{trackInfo.title}</p>
            <p className={styles.trackArtist}>{trackInfo.artist}</p>
          </div>
        </a>
      </div>
    )
  );
};

export { SpotifyWidget };
