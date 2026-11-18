// Click a thumbnail to swap the main product image.
document.addEventListener('click', function (e) {
  var thumb = e.target.closest('.thumb');
  if (!thumb) return;
  e.preventDefault();
  var product = thumb.closest('.product');
  if (!product) return;
  var main = product.querySelector('.product-media img');
  var ti = thumb.querySelector('img');
  if (!main || !ti) return;
  main.src = ti.getAttribute('src');
  main.alt = ti.getAttribute('alt') || main.alt;
  product.querySelectorAll('.thumb').forEach(function (t) { t.classList.remove('active'); });
  thumb.classList.add('active');
});
