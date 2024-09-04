/*alert()
for (let i = 8; i <=20;i++){
console.log(i);
}
const frutas = ["Manzana", "Uva", "Pera", "Naranja"];
for(let i = 0;i < frutas.length; i++){
console.log(frutas[i]);
}
for (let i= 0; i <=10; i +=2){
    console.log(i);
}*/
const equipo = ["Adamaris Paredes", "Jessica Padilla", "Kiara Ruiz", "Sayuri Fernández", "Rubi Rupay"]
let lista = "";
for (let i = 0;i < equipo.length; i++){
    lista += `<li>${equipo[i]}</li>`;
}

document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("lider").innerText = equipo[0];
