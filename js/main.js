document.addEventListener("DOMContentLoaded", function () {
  const youtubeModal = document.getElementById("youtubeModal");

  if (youtubeModal) {
    const youtubeIframe = youtubeModal.querySelector("iframe");
    const originalSrc = youtubeIframe.src;

    youtubeModal.addEventListener("show.bs.modal", function () {
      youtubeIframe.src = originalSrc + "&autoplay=1";
    });

    youtubeModal.addEventListener("hidden.bs.modal", function () {
      youtubeIframe.src = "";
    });
  }
});
