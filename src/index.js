import UI from "modules/ui";
import CanvasManager from "modules/canvas";
import Mosaic from "modules/mosaic";
import Mousetools from "modules/mousetools";

function App() {}

const p = App.prototype;

const mainImage = "src/images/original.png";
const samples = [
  "src/images/samples/1.jpg",
  "src/images/samples/2.jpg",
  "src/images/samples/3.jpg",
  "src/images/samples/4.jpg",
  "src/images/samples/5.jpg",
  "src/images/samples/6.jpg",
  "src/images/samples/7.jpg",
  "src/images/samples/8.jpg",
  "src/images/samples/9.jpg",
  "src/images/samples/10.jpg",
  "src/images/samples/11.jpg",
  "src/images/samples/12.jpg",
  "src/images/samples/13.jpg"
];

p.run = function() {
  const canvasManager = new CanvasManager("#mosaic_image");
  const canvas = canvasManager.getCanvas();
  const ctx = canvasManager.getContext();

  const mosaic = new Mosaic(canvas, ctx, "#loader");
  mosaic.loadImages(mainImage, samples);

  const onRedraw = function() {
    canvasManager.redraw();
    mosaic.render();
  };

  const mousetools = new Mousetools(canvas, ctx, onRedraw);
  mousetools.run();

  const onChange = function() {
    mosaic.calculate();
    mosaic.render();
  }

  const ui = new UI(onChange);
  ui.init();
};

window.onload = function() {
  const app = new App();
  app.run();
};
