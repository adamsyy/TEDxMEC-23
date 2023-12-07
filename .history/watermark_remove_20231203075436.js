document.addEventListener("DOMContentLoaded", (event) => {
    setInterval(() => {
      if (document.getElementsByClassName("w-webflow-badge").length != 0) {
        document.getElementsByClassName("w-webflow-badge")[0].remove();
      } else {
      }
    }, 0.1);
  });
