function login() {
    const usuario = document.getElementById("user").value;
    const senha = document.getElementById("password").value;
    
    if (usuario == "admin" && senha == "admin") {
        window.location.href = "../index.html"
    }
    else {
        alert("Dados errados.")
    }

}