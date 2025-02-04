let contador = 0;
document.body.addEventListener("click", function() {
    contador++;
    document.getElementById("contador").textContent = contador;
});
