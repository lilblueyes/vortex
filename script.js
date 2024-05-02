const vortex = document.getElementById("vortex");
const branches = 6;

function addLayer() {
  const layer = document.createElement("div");
  layer.className = "layer";

  for (let i = 0; i < branches; i++) {
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    const square = document.createElement("div");
    square.className = "square";
    square.style.background = color;
    const initialAngle = i * (360 / branches);
    square.style.setProperty("--start-angle", `${initialAngle}deg`);
    layer.appendChild(square);
  }

  if (vortex.firstChild) {
    vortex.insertBefore(layer, vortex.firstChild);
  } else {
    vortex.appendChild(layer);
  }
}

setInterval(addLayer, 1000);
