function sponsors_click() {
    // window.alert("entro");
    var divSponsorAnterior = document.getElementById("div-sponsor");

    var divSponsor = document.createElement("div");
    divSponsor.style.width = "100px";
    divSponsor.style.height = "100px";
    divSponsor.style.background = "red";
    divSponsor.style.color = "red";
    divSponsor.style.position = "absolute";
    divSponsor.style.top = "50%";
    divSponsor.style.left = "50%";
    divSponsor.innerHTML = "Hello";
    divSponsor.id = "div-sponsor";

    if (divSponsorAnterior != null) {
        divSponsorAnterior.remove();
        divSponsor.style.background = "blue";
    }

    document.getElementById("main").appendChild(divSponsor);
    divSponsor.addEventListener("click", close_cardSponsor);
}

function close_cardSponsor() {
    var divSponsor = document.getElementById("div-sponsor");
    divSponsor.remove();
}
// var element = document.getElementById("div-sponsor");
// element.addEventListener("click", close_cardSponsor);

