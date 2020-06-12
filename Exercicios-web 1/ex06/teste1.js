var imagens = new Array();
imagens.push("img/foto2.jpg");
imagens.push("img/foto3.jpg");
imagens.push("img/foto4.jpg");
imagens.push("img/foto5.jpg");
imagens.push("img/cellbit.png");
imagens.push("img/foto7.png");
imagens.push("img/foto8.jpg");

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clicar() {
  document.random.src = imagens[aleatorio(0, imagens.length - 1)];
}
