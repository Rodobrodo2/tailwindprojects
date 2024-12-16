console.log("Script caricato correttamente!");

const toggleDarkMode = () => {
    // Facciamo riferimento diretto al body
    // selezionandolo direttamente dal document
    document.body.classList.toggle("dark");
    /* Modifichiamo il valore dello status corrente
    in base alla presenza o meno della classe
    'dark' sul nostro body */
    document.querySelector("#darkModeStatus").innerHTML = document.body.classList.contains("dark") ? "Active" : "Inactive";
};

/* Aggiungiamo un event listener al bottone o all' elemento di trigger
usando come target ad esempio l'id 'darkModeToggle' */

document.querySelector("#darkModeToggle").addEventListener("click", toggleDarkMode);