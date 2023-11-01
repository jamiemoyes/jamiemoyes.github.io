import { NextResponse } from "next/server";

export async function GET() {
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

  const accessToken = await fetch(tokenEndpoint, options)
    .then((res) => res.json())
    .then((json) => json.access_token)
    .catch((err) => console.error(err));

  const response = await fetch(
    `${playerEndpoint}?time_range=short_term&limit=1`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
    .then((res) => res.json())
    .then((json) => {
      console.log({ items: json.items });
      const [track] = json.items || [];
      const simplifiedTrack = {
        title: track.name,
        artist: track.artists?.[0].name,
        href: track.external_urls.spotify,
        images: track.album.images,
      };

      return simplifiedTrack;
    })
    .then((json) => ({ statusCode: 200, body: JSON.stringify(json) }));

  return NextResponse.json(
    {
      body: response.body,
    },
    {
      status: 200,
    }
  );
}
