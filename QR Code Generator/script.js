const QrBox = document.getElementById("qr-box");
const QrImg = document.getElementById("qr");
const textField = document.getElementById("text-field");
const error = document.getElementById("error");

function generateQR() {
  if (textField.value.length > 0) {
    QrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="${textField.value}`;
    QrBox.classList.add("show-img");
  } else {
    textField.classList.add("error");
    setTimeout(() => {
       textField.classList.remove("error"); 
    }, 1000);
  }
}

generateQR();