document.querySelectorAll(".key").forEach((key) => {
  key.addEventListener("mousedown", () => {
    key.classList.add("pressed");
  });

  key.addEventListener("mouseup", () => {
    key.classList.remove("pressed");
  });

  key.addEventListener("mouseleave", () => {
    key.classList.remove("pressed");
  });
});
