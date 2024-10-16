let imgBox = document.getElementById("img-box");
let qrImage = document.getElementById("qr-image");
let input = document.getElementById("inputUser");

function generateQR() {
  if (input.value.length > 0) {
    qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    imgBox.classList.add("show-image");
  }
}
