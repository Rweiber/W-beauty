function validateEmail() {
  var email = document.getElementById("input__footer").value;
  var message = document.getElementById("message");

  // Define a expressão regular para um e-mail válido
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Testa o e-mail

  if (re.test(String(email).toLowerCase())) {
    message.style.color = "green";
    message.innerHTML = "E-mail válido!";
  } else {
    message.style.color = "red";
    message.innerHTML = "E-mail inválido!";
  }
}
