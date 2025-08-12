var pass = document.getElementById("password");
var msg = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if(pass.value.length < 4){
    strength.innerHTML="week";
    msg.style.color="red";
    pass.style.borderColor="red";
  }
  else if(pass.value.length >= 4 && pass.value.length < 8){
    strength.innerHTML="medium";
    msg.style.color="orange";
    pass.style.borderColor="orange";
  }
  else if(pass.value.length >= 8){
    strength.innerHTML="strong";
    msg.style.color="#26d730";
    pass.style.borderColor="#26d730";
  }

});
