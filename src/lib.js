/**
 * 数据绑定
 * @param data
 */
function databind(data) {
  var customBase = document.createElement('custom');
  var custom = d3.select(customBase);
  var join = custom.selectAll('rect').data(data).enter();

  console.log(join);
}

/**
 * draw chart
 * - 坐标原点
 */
function draw(context, histogram) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var elements = d3.selectAll('custom.rect');

  elements.each(function(d,i) {
    var node = d3.select(this);
    context.fillStyle = node.attr('fillStyle');

    context.fillRect(node.attr('x'), node.attr('y'),
      node.attr('width'), node.attr('height'))
  });
  context.closePath();
}
