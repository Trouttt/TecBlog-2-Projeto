/*NAVBAR*/
var veriff = true;
document.getElementById("iconNav").addEventListener("click", verif);

function verif() {
  if (veriff == true) {
    //arrumando padding
    document.querySelector("#iconDiv").classList.remove("paddingOff");
    document.querySelector("#iconDiv").classList.add("paddingOn");
    //mudando a cor do icon
    document.querySelector("#iconNav").classList.add("white");
    document.querySelector("#iconNav").classList.remove("black");

    //background dos links
    document.querySelector("nav").classList.remove("none");
    document.querySelector("nav").classList.add("center");

    //fazendo aparecer os links
    for (let x = 1; x < 5; x++) {
      document.querySelector(`#nav-resp${x}`).classList.add("show");
      document.querySelector(`#nav-resp${x}`).classList.remove("none");
    }
  } else {
    //desativando tudo q foi feito ao clickar no ícone.
    document.querySelector("#iconDiv").classList.remove("paddingOn");
    document.querySelector("#iconDiv").classList.add("paddingOff");

    document.querySelector("#iconNav").classList.add("black");
    document.querySelector("#iconNav").classList.remove("white");

    document.querySelector("nav").classList.remove("center");
    document.querySelector("nav").classList.add("none");

    for (let x = 1; x < 5; x++) {
      document.querySelector(`#nav-resp${x}`).classList.add("none");
      document.querySelector(`#nav-resp${x}`).classList.remove("show");
    }
  }
  veriff = !veriff;
}
