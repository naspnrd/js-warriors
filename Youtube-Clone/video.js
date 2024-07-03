import YOUR_API_KEY from "./API_CONSTANTS.js";

const videoPlayerContainer = document.getElementById("video-player");
const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get("id");
const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const comments_http = "https://www.googleapis.com/youtube/v3/commentThreads?";
console.log(videoId);
if (videoId) {
  fetch(
    video_http +
      new URLSearchParams({
        part: "snippet",
        id: videoId,
        key: YOUR_API_KEY,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      if (data.items && data.items.length > 0) {
        videoPlayerContainer.innerHTML = `
            <iframe width="1024" height="500" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer" autoplay clipboard-write; encrypted-media; picture-in-picture; gyroscope; allowfullscreen/>
        `;
      } else {
        videoPlayerContainer.innerHTML = "<p>Video unavailable</p>";
      }
    });
}

const fetchAndDisplayComments = () => {
  fetch(
    comments_http +
      new URLSearchParams({
        key: YOUR_API_KEY,
        part: "snippet",
        videoId: videoId,
        maxResults: 25,
      })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.items && data.items.length > 0) {
        data.items.forEach((item) => {
          console.log(item);
          const comment = item.snippet.topLevelComment.snippet;
          displayComment(comment);
        });
      }
    })
    .catch((err) => console.log("Error while fetching video details: ", err));
};

const displayComment = (comment) => {
  const commentList = document.getElementById("video-comments-list");
  const commentItem = document.createElement("li");
  commentItem.classList.add("comment-item");

  commentItem.innerHTML = `
    <div class="comment-author">
    <img
        src="${comment.authorProfileImageUrl}"
        alt="profile pic"
    />
    ${comment.authorDisplayName}
    </div>
    <div class="comment-body">
        <div class="comment-text">${comment.textDisplay}</div>
        <div class="comment-actions">
            <img src="img/like.png" alt="like icon" />
            <span class="action-count">${comment.likeCount}</span>
            <img src="img/dislike.png" alt="dislike icon" />
            <span class="action-count">Reply</span>
        </div>
    </div>
  `;
  commentList.appendChild(commentItem);
};
fetchAndDisplayComments();
