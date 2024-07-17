const renderSize = { width: 640, height: 640 };

async function downloadTrait(url) {
  return new Promise((resolve) => {
    const image = document.createElement("img");
    image.src = url;
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
  });
}

async function renderTraitsOnImage(image, urls) {
  const canvas = document.createElement("canvas");
  console.log(`width`+ image.inner);
  canvas.width = renderSize.width;
  canvas.height = renderSize.height;

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const images = await Promise.all(urls.map(downloadTrait));
  images.forEach((_) => ctx.drawImage(_, 0, 0, canvas.width, canvas.height));
  image.src = canvas.toDataURL("image/png");
}

async function run() {
  var style = document.body.style;
  style.margin = "0px";
  style.padding = "0px";
  style.display = "flex";
  style.justifyContent = "center";
  style.alignItems = "center";

  const image = document.createElement("img");

  image.id = "img";
  image.style.objectFit = "contain";
  image.style.imageRendering = "auto";
  image.style.width = "100%";
  image.style.height = "100%";

  await renderTraitsOnImage(image, traitUrls);

  document.body.appendChild(image);
}

window.onload = run;