
function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name");
}
pintarNombre()

function genero() {
    const form = document.getElementById('access-from');


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const gender = document.querySelector('input[name="gender"]:checked').value;
        if (gender === 'female') {
            window.location.href = 'inicio.html';
        } else if (gender === 'male') {
            window.location.href = 'men-only.html';

        }
    });
}
genero()