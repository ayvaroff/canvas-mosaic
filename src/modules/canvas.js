function CanvasManager(domId) {
  this.canvas = document.querySelector(domId);
  this.ctx = this.canvas.getContext("2d");
}

const p = CanvasManager.prototype;

p.getCanvas = function() {
  return this.canvas;
}

p.getContext = function() {
  return this.ctx;
}

p.redraw = function() {
  const ctx = this.ctx;
  const canvas = this.canvas;
  const p1 = ctx.transformedPoint(0, 0);
  const p2 = ctx.transformedPoint(canvas.width, canvas.height);
  ctx.clearRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);

  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
};

export default CanvasManager;
