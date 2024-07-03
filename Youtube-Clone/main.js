import YOUR_API_KEY from "./API_CONSTANTS.js";

const videoContainer = document.querySelector(".video-container");
const searchInput = document.querySelector(".search-bar");
const searchBtn = document.querySelector(".search-btn");
const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";
const search_http = "https://www.googleapis.com/youtube/v3/search?";

fetch(
  video_http +
    new URLSearchParams({
      key: YOUR_API_KEY,
      part: "snippet,contentDetails",
      chart: "mostPopular",
      maxResults: 40,
      regionCode: "IN",
    })
)
  .then((res) => res.json())
  .then((data) => {
    data.items.forEach((item) => {
      getChannelIcon(item);
    });
  })
  .catch((err) => console.log(err));

const getChannelIcon = (video_data) => {
  fetch(
    channel_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        id: video_data.snippet.channelId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.high.url;
        makeVideoCard(video_data);
      }
    })
    .catch((err) => console.log(err));
};

const makeVideoCard = (data) => {
  const videoCard = document.createElement("div");
  videoCard.classList.add("video");
  videoCard.addEventListener("click", () => {
    console.log(data.id);
    window.location.href = `video.html?id=${data.id}`;
  });
  videoCard.innerHTML = `
    <img src="${data.channelThumbnail}" class="thumbnail" alt="channel thumbnail image"/>
    <div class="content">
        <img src="${data.snippet.thumbnails.default.url}" class="channel-icon" alt="channel icon"/>
        <div class="info">
            <h4 class="title">${data.snippet.title}</h4>
            <p class="channel-name">${data.snippet.channelTitle}</p>
        </div>
    </div>
  `;
  videoContainer.appendChild(videoCard);
};

searchBtn.addEventListener("click", () => {
  let searchedValue = searchInput.value;
  if (searchedValue.length) {
    searchInput.value = "";
    searchVideo(searchedValue);
  }
});

const searchVideo = async (query) => {
  try {
    // console.log(query);
    const res = await fetch(
      search_http +
        new URLSearchParams({
          key: YOUR_API_KEY,
          part: "snippet",
          q: query,
          maxResults: 30,
          type: "video",
        })
    );
    // const res = await fetch(
    //   `${search_http}key=${YOUR_API_KEY}&part=snippet&q=${query}&maxResults=50&type=video`
    // );
    const data = await res.json();
    console.log(data);
    videoContainer.innerHTML = "";
    data?.items?.forEach((item) => {
      if (item.id.kind === "youtube#video") {
        getVideoDetails(item.id.videoId);
      }
    });
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getVideoDetails = (videoId) => {
  fetch(
    video_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        id: videoId,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        getChannelIcon(data.items[0]);
      }
    })
    .catch((err) => console.log("Error while fetching video details: ", err));
};
