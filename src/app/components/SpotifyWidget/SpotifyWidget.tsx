"use client";
import { useEffect, useState } from "react";
import styles from "./SpotifyWidget.module.css";

interface TrackInfo {
  title: string;
  artist: string;
  href: string;
  images: Image[];
}

interface Image {
  height: number;
  url: string;
  width: number;
}
const SpotifyWidget: React.FC = () => {
  const [trackInfo, setTrackInfo] = useState<TrackInfo | undefined>(undefined);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/spotify`)
      .then((res) => res.json())
      .then((json) => setTrackInfo(JSON.parse(json.body)))
      .catch((error) => console.error(error));
  }, []);
  console.log({ trackInfo });

  return (
    <div className={styles.trackContainer}>
      {trackInfo ? (
        <>
          <img className={styles.artwork} src={trackInfo.images[0].url} />
          <a href={trackInfo.href} target="_blank">
            <div className={styles.trackInfo}>
              <p>🎧 Top listened to</p>
              <p className={styles.trackTitle}>{trackInfo.title}</p>
              <p>{trackInfo.artist}</p>
            </div>
          </a>
        </>
      ) : (
        <a>Loading</a>
      )}
    </div>
  );
};

export { SpotifyWidget };
