let kisten = document.querySelectorAll(".kiste_ac"); 
let symbol = document.querySelectorAll(".symbol");    

kisten.forEach((kiste, index) => {
    kiste.addEventListener("click", () => {
        kisten.forEach(eachItem => {
            eachItem.classList.remove("active");
        });

        kiste.classList.add("active");
        symbol.forEach(sym => {
        sym.textContent = "+";
        });

        if (symbol[index]) {
            symbol[index].textContent = "-";
        }
    });
});




