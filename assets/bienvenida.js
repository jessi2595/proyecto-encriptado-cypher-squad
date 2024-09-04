

function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}
pintarNombre()

//continuacion para ir a las paginas de ayuda 
/*function genero(){
const form = document.getElementById('access-from');


    form.addEventListener('submit',(e) =>{
    e.preventDefault();
    const gender = document.querySelector('input[name="gender"]:checked').value;
    if (gender === 'female') {
        window.location.href = '../html/decodificador.html';
    } else if (gender === 'male') {
        window.location.href = '../html/men-only.html';
        
    }
}); 
}
genero()*/
