document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(() => {
      if (document.getElementsByClassName("w-webflow-badge").length != 0) {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
      } else {
      }
    }, 0.1);
  });
  document.addEventListener("DOMContentLoaded", function () {
    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("background-video");

    window.addEventListener("scroll", function () {
        var offset = window.scrollY;
        videoContainer.style.opacity = 1 - offset / (videoContainer.clientHeight / 2);

        // If you want to stop the video when it's not visible
        if (offset >= videoContainer.clientHeight) {
            video.pause();
        } else {
            video.play();
        }
    });
});