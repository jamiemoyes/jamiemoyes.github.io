import { LastFmResponse } from "@/app/shared/types/types";

const BASE_URL = "http://ws.audioscrobbler.com/2.0";

const url =
  "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&api_key=84112e023cb13f1243ad7855b3e6e296&format=json&user=jamiemoyes";

const params = new URLSearchParams({
  method: "user.getrecenttracks",
  user: "jamiemoyes",
  api_key: process.env.LAST_FM_API_KEY ?? "",
  format: "json",
});
export async function fetchLastFmTrack() {
  const res = await fetch(`${BASE_URL}/?${params.toString()}`).then((res) =>
    res.json()
  );
  return res as LastFmResponse;
}
