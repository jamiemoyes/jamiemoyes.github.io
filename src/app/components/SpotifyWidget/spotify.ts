"use server";

import { TrackInfo } from "@/app/shared/types/types";

const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
const auth = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const playerEndpoint = "https://api.spotify.com/v1/me/top/tracks";

const options = {
  method: "POST",
  headers: {
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${encodeURI(
    `${process.env.NEXT_PUBLIC_API_URL}/.netlify/functions/callback`
  )}`,
};

export async function fetchSpotifyTopTrack(): Promise<Partial<TrackInfo>> {
  const accessToken = await fetch(tokenEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      return json.access_token;
    })
    .catch((err) => console.error(err));

  return fetch(`${playerEndpoint}?time_range=short_term&limit=1`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      if (json.items) {
        const [track] = json.items;
        const simplifiedTrack: TrackInfo = {
          title: track?.name,
          artist: track.artists?.[0].name,
          href: track.external_urls.spotify,
          images: track.album.images,
        };
        return simplifiedTrack;
      }
      return {};
    });
}
