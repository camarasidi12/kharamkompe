// API/TMDBApi.js

const API_TOKEN ="AIzaSyCm0TNypw7SDS_0zdc77SP5FWL-G7SYmUM";
// API/TMDBApi.js

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}


// API/TMDBApi.js
export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
export function getVideoFromApiWithSearchedText (title) {
  const vid=[]
  
  return fetch("https://www.googleapis.com/youtube/v3/search?key="+API_TOKEN+"&channelId=UC7pLNnKG-siOd8UvH4xoUZQ&part=snippet&q="+title+"&order=date&maxResults=30")
  .then(res=>res.json())
}

export const fetchVideos = async (title) => {
  const response = await fetch("https://www.googleapis.com/youtube/v3/search?key="+API_TOKEN+"&channelId=UC7pLNnKG-siOd8UvH4xoUZQ&part=snippet&order=date&maxResults=30")
  const items = await response.json()
  //console.log(items)
  console.log("logHHHHHHHHHH")
  return items
}