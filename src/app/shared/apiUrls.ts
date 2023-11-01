export const apiUrls = {
  spotify: {
    accountAuthorize: `https://accounts.spotify.com/authorize?client_id=${process.env.VITE_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:5173&scope=user-top-read`,
    topTrack:
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=1&offset=0",
  },
};
