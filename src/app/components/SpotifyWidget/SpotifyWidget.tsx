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
const SpotifyWidget: React.FC = async () => {
  const trackInfo = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/spotify`
  )
    .then((res) => res.json())
    .then((json) => JSON.parse(json.body))
    .catch((error) => console.error(error));

  return (
    <div className={styles.trackContainer}>
      <img className={styles.artwork} src={trackInfo.images[0].url} alt="" />
      <a href={trackInfo.href} target="_blank">
        <div className={styles.trackInfo}>
          <p>🎧 Top listened to</p>
          <p className={styles.trackTitle}>{trackInfo.title}</p>
          <p>{trackInfo.artist}</p>
        </div>
      </a>
    </div>
  );
};

export { SpotifyWidget };
