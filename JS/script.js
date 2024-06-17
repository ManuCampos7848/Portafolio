/**
 * Funciones para redireccionar al usuario a los 
 * repositorios en Git Hub
 */
function redireccion_GitHub_Clinica() {
    var githubUrl = "https://github.com/ManuCampos7848/Clinica-la-Bien-Amada.git";
    window.open(githubUrl, "_blank");
}

function redireccion_GitHub_Ventanilla() {
    var githubUrl = "https://github.com/ManuCampos7848/Ventanilla-Gimli.git";
    window.open(githubUrl, "_blank");
}

function redireccion_GitHub_Storify() {
    var githubUrl = "https://github.com/ManuCampos7848/Storify.git";
    window.open(githubUrl, "_blank");
}

function redireccion_GitHub_BancoBrutal() {
    var githubUrl = "https://github.com/ManuCampos7848/Banco-Brutal.git";
    window.open(githubUrl, "_blank");
}
//________________________________________________________________________________


/**
 * Funciones para redireccionar al usuario al Email, linkedin y whatsapp
 */
function openEmail() {
    // Abrir enlace al hacer clic
    window.location.href = "mailto:juanmguarnizoc@gmail.com";
}

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/juan-guarnizo-7b74a3310/", "_blank");
}

function openWhatsApp() {
    window.open("https://web.whatsapp.com/send?phone=3107231726", "_blank");
}
//________________________________________________________________________________


/**
 * Metodo que permite navegar atraves de las secciones
 * @param {*} sectionId 
 */
function showSection(sectionId) {
    // Ocultar todas las secciones
    document.getElementById("home").setAttribute("hidden", true);
    document.getElementById("sobre-mi").setAttribute("hidden", true);
    document.getElementById("portafolio").setAttribute("hidden", true);
    document.getElementById("habilidades").setAttribute("hidden", true);
    document.getElementById("contacto").setAttribute("hidden", true);

    // Mostrar la sección clicada
    document.getElementById(sectionId).removeAttribute("hidden");
}

// Mostrar la sección "Home" por defecto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    showSection("home");
});
//________________________________________________________________________________


/**
 * Funcion que permite enviar un pequeño formulario al correo electronico
 */
function enviarFormulario() {
    // Obtiene los datos del formulario
    var formData = new FormData(document.getElementById("contact-form"));

    // Realiza la solicitud POST usando fetch
    fetch("https://ejemplo.com/tu-endpoint", {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            // Maneja la respuesta del servidor (puedes personalizar esto según tus necesidades)
            if (data.success) {
                document.querySelector(".status").innerHTML = "El mensaje se envió correctamente.";
            } else {
                document.querySelector(".status").innerHTML = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
            }
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            document.querySelector(".status").innerHTML = "Error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        });
}
//________________________________________________________________________________
