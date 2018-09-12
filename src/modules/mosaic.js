import OPTS from "modules/config";

function Mosaic(canvas, ctx, loaderId) {
  this.loader = document.querySelector(loaderId);
  this.canvas = canvas;
  this.ctx = ctx;
  this.mosaicImages;
  this.mainImage;

  this.maxWidth = Math.min(1000, window.innerWidth);
  this.titleWidth = Math.ceil(this.maxWidth / OPTS.TILE_COLUMNS);
  this.mainImageAspectRatio;
  this.colors;

  this.randomSamples = [];
}

const p = Mosaic.prototype;

p.calculate = function(scale) {
  const canvas = this.canvas;
  const TILE_COLUMNS = scale ? OPTS.TILE_COLUMNS * scale : OPTS.TILE_COLUMNS;

  canvas.width = canvas.style.width = this.maxWidth;
  canvas.height = canvas.style.height =
    Math.floor(TILE_COLUMNS * this.mainImageAspectRatio) * this.titleWidth;

  this.colors = this.getTileColors(this.mainImage, TILE_COLUMNS);
};

p.render = function(scale) {
  const canvas = this.canvas;
  const loader = this.loader;
  const ctx = this.ctx;
  const mainImage = this.mainImage;
  const mosaicImages = this.mosaicImages;
  let titleWidth = this.titleWidth;
  const colors = this.colors;
  let randomSamples = this.randomSamples;

  loader.style.display = "block";
  canvas.style.display = "none";

  const TILE_COLUMNS = scale ? OPTS.TILE_COLUMNS * scale : OPTS.TILE_COLUMNS;
  const TILE_COLUMNS_Y = Math.floor(
    TILE_COLUMNS * this.mainImageAspectRatio
  );
  titleWidth = Math.ceil(this.maxWidth / TILE_COLUMNS);

  if (randomSamples.length && randomSamples.length !== TILE_COLUMNS * TILE_COLUMNS_Y) {
    randomSamples = [];
    randomSamples.length = 0;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (!OPTS.IS_PIXELATED) {
    ctx.drawImage(mainImage, 0, 0, canvas.width, canvas.height);
  }

  for (var i = 0; i < TILE_COLUMNS; i++) {
    for (var j = 0; j < TILE_COLUMNS_Y; j++) {
      const x = i * titleWidth;
      const y = j * titleWidth;
      let randomSample;

      if (OPTS.IS_PIXELATED) {
        // Plain color
        const color = colors[i + j * TILE_COLUMNS];
        ctx.fillStyle = color;
        ctx.fillRect(x, y, titleWidth, titleWidth);
      }

      // Images
      ctx.globalAlpha = OPTS.TILE_ALPHA;
      ctx.globalCompositeOperation = OPTS.COMPOSITE_OPERATION;

      if (randomSamples.length === TILE_COLUMNS * TILE_COLUMNS_Y) {
        randomSample = randomSamples[TILE_COLUMNS_Y * i + j];
      } else {
        randomSample =
          mosaicImages[Math.floor(mosaicImages.length * Math.random())];

        randomSamples.push(randomSample);
      }

      randomSample && ctx.drawImage(randomSample, x, y, titleWidth, titleWidth);

      ctx.globalCompositeOperation = "source-over";
      ctx.globalAlpha = 1;

      if (i === TILE_COLUMNS - 1 && j === TILE_COLUMNS_Y - 1) {
        loader.style.display = "none";
        canvas.style.display = "block";
      }
    }
  }
};

p.getTileColors = function(image, size) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = (size * image.height) / image.width;
  context.drawImage(
    image,
    0,
    0,
    image.width,
    image.height,
    0,
    0,
    canvas.width,
    canvas.height
  );

  const data = Array.from(
    context.getImageData(0, 0, canvas.width, canvas.height).data
  );
  const colors = [];
  for (let i = 0; i < data.length; i += 4) {
    colors[i / 4] = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, 1)`;
  }
  return colors;
};

p.loadImages = function(mainImageSrc, mosaicImagesSrc) {
  let self = this;

  loadAsset(mainImageSrc).then(function(image) {
    self.mainImage = image;
    self.mainImageAspectRatio = image.height / image.width;

    Promise.all(mosaicImagesSrc.map(loadAsset)).then(function(images) {
      self.mosaicImages = images;
      self.calculate();
      self.render();
    });
  });
};

function loadAsset(url) {
  return new Promise(function(resolve, reject) {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(img);
    img.src = url;
  });
}

export default Mosaic;
