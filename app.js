// Inicializamos el contador
let count = 0;

// Obtenemos los valores de los botones
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Recorremos por los valores de los botones
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {

        const styles = e.currentTarget.classList;

        //Modificando al contador
        if (styles.contains("decrease")) count--;

        if (styles.contains("reset")) count = 0;

        if (styles.contains("increase")) count++;

        //Asignando los colores
        if (count > 0) value.style.color = "green";

        if (count < 0) value.style.color = "red";
        
        if (count === 0) value.style.color = "black";

        //Asignando el valor
        value.textContent = count;
    });
});

// Done :D