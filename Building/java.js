document.getElementById("toggle").addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.style.setProperty("--building-color1", "#000");
    document.documentElement.style.setProperty("--building-color2", "#000");
    document.documentElement.style.setProperty("--building-color3", "#000");
    document.documentElement.style.setProperty("--building-color4", "#000");
    document.documentElement.style.setProperty("--window-color1", "#777");
    document.documentElement.style.setProperty("--window-color2", "#777");
    document.documentElement.style.setProperty("--window-color3", "#777");
    document.documentElement.style.setProperty("--window-color4", "#777");
    document.querySelector(".sky").style.background ="radial-gradient(closest-corner circle at 15% 15%, #ccc, #ccc 20%, #445 21%, #223 100%)";
  } else {
    document.documentElement.style.setProperty("--building-color1", "#aa80ff");
    document.documentElement.style.setProperty("--building-color2", "#66cc99");
    document.documentElement.style.setProperty("--building-color3", "#cc6699");
    document.documentElement.style.setProperty("--building-color4", "#538cc6");
    document.documentElement.style.setProperty("--window-color1", "#bb99ff");
    document.documentElement.style.setProperty("--window-color2", "#8cd9b3");
    document.documentElement.style.setProperty("--window-color3", "#d98cb3");
    document.documentElement.style.setProperty("--window-color4", "#8cb3d9");
    document.querySelector(".sky").style.background ="radial-gradient(closest-corner circle at 15% 15%, #ffcf33, #ffcf33 20%, #ffff66 21%, #bbeeff 100%)";
  }
});
