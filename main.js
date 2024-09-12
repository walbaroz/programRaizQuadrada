const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = frm.inNumero.value;

    const raiz = Math.sqrt(numero);

    /*
    Executando com a maneira (isInteger):

    if (Number.isInteger(raiz)) { // verifica se valor da raiz é inteior (1,2..),
                                  // caso não seja (4.769241..), executa o else
    resp.innerText = `Raiz: ${raiz}`
    }
    */
    if (raiz % 1 == 0) {
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${raiz.toFixed(3)}...`
    }

    frm.addEventListener("reset", () => {
        resp.innerText = "";
    })
})