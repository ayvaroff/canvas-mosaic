function Mousetools(canvas, ctx, onRedraw) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.onRedraw = onRedraw;

  this.lastX = this.canvas.width / 2;
  this.lastY = this.canvas.height / 2;
  this.dragStart;
  this.dragged;
}

const p = Mousetools.prototype;

p.run = function() {
  this.trackTransforms();
  this.addDOMEvents();
};

p.trackTransforms = function() {
  const ctx = this.ctx;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let xform = svg.createSVGMatrix();
  ctx.getTransform = function() {
    return xform;
  };

  const savedTransforms = [];
  const save = ctx.save;
  ctx.save = function() {
    savedTransforms.push(xform.translate(0, 0));
    return save.call(ctx);
  };

  const restore = ctx.restore;
  ctx.restore = function() {
    xform = savedTransforms.pop();
    return restore.call(ctx);
  };

  const scale = ctx.scale;
  ctx.scale = function(sx, sy) {
    xform = xform.scaleNonUniform(sx, sy);
    return scale.call(ctx, sx, sy);
  };

  const rotate = ctx.rotate;
  ctx.rotate = function(radians) {
    xform = xform.rotate((radians * 180) / Math.PI);
    return rotate.call(ctx, radians);
  };

  const translate = ctx.translate;
  ctx.translate = function(dx, dy) {
    xform = xform.translate(dx, dy);
    return translate.call(ctx, dx, dy);
  };

  const transform = ctx.transform;
  ctx.transform = function(a, b, c, d, e, f) {
    var m2 = svg.createSVGMatrix();
    m2.a = a;
    m2.b = b;
    m2.c = c;
    m2.d = d;
    m2.e = e;
    m2.f = f;
    xform = xform.multiply(m2);
    return transform.call(ctx, a, b, c, d, e, f);
  };

  const setTransform = ctx.setTransform;
  ctx.setTransform = function(a, b, c, d, e, f) {
    xform.a = a;
    xform.b = b;
    xform.c = c;
    xform.d = d;
    xform.e = e;
    xform.f = f;
    return setTransform.call(ctx, a, b, c, d, e, f);
  };

  const pt = svg.createSVGPoint();
  ctx.transformedPoint = function(x, y) {
    pt.x = x;
    pt.y = y;
    return pt.matrixTransform(xform.inverse());
  };
};

p.addDOMEvents = function() {
  const canvas = this.canvas;
  const ctx = this.ctx;
  const self = this;

  canvas.addEventListener(
    "mousedown",
    function(evt) {
      document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect =
        "none";
      self.lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
      self.lastY = evt.offsetY || evt.pageY - canvas.offsetTop;
      self.dragStart = ctx.transformedPoint(self.lastX, self.lastY);
      self.dragged = false;
    },
    false
  );

  canvas.addEventListener(
    "mousemove",
    function(evt) {
      self.lastX = evt.offsetX || evt.pageX - canvas.offsetLeft;
      self.lastY = evt.offsetY || evt.pageY - canvas.offsetTop;
      self.dragged = true;
      if (self.dragStart) {
        const pt = ctx.transformedPoint(self.lastX, self.lastY);
        ctx.translate(pt.x - self.dragStart.x, pt.y - self.dragStart.y);
        self.onRedraw && self.onRedraw();
      }
    },
    false
  );

  canvas.addEventListener(
    "mouseup",
    function(evt) {
      self.dragStart = null;
      if (!self.dragged) zoom(evt.shiftKey ? -1 : 1);
    },
    false
  );

  const zoom = function(clicks) {
    const scaleFactor = 1.1;
    const pt = ctx.transformedPoint(self.lastX, self.lastY);
    ctx.translate(pt.x, pt.y);
    const factor = Math.pow(scaleFactor, clicks);
    ctx.scale(factor, factor);
    ctx.translate(-pt.x, -pt.y);
    self.onRedraw && self.onRedraw(factor);
  };

  const handleScroll = function(evt) {
    const delta = evt.wheelDelta
      ? evt.wheelDelta / 40
      : evt.detail
        ? -evt.detail
        : 0;
    if (delta) zoom(delta);
    return evt.preventDefault() && false;
  };

  canvas.addEventListener("DOMMouseScroll", handleScroll, false);
  canvas.addEventListener("mousewheel", handleScroll, false);
};

export default Mousetools;
