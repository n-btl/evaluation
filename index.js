const input= document.getElementById("nom");
const zone= document.getElementById("message");
const bouton= document.getElementById("valider");
bouton.addEventListener("click", function () {
    zone.innerHTML="Bonjour "+input.value+"";
    console.log("Bonjour "+input.value);
    if(input.value==""){

    }
});