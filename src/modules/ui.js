import OPTS from "modules/config";

function UI(onChange) {
  this.onChange = onChange;
}

const p = UI.prototype;

p.init = function() {
  const gui = new dat.GUI();
  const onChange = this.onChange;

  gui.add(OPTS, "TILE_COLUMNS", 2, 200, 1).onFinishChange(onChange);
  gui.add(OPTS, "TILE_ALPHA", 0, 1, 0.01).onFinishChange(onChange);
  gui.add(OPTS, "IS_PIXELATED").onFinishChange(onChange);
  gui
    .add(OPTS, "COMPOSITE_OPERATION", [
      "source-over",
      "source-in",
      "source-out",
      "source-atop",
      "destination-over",
      "destination-in",
      "destination-out",
      "destination-atop",
      "lighter",
      "copy",
      "xor",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity"
    ])
    .onFinishChange(onChange);
};

export default UI;
