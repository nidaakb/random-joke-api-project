// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', async function(){

    // 1. Hacer una petición GET a la API que nos ofrece el chiste de Chuck Norris. Existe un metodo nativo de JS que se llama FETCH, simplemente le tenemos que pasar como parametro la URL de la API que queremos consumir. El metodo fetch devuelve la respuesta de la API 
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    console.log("objeto response: ", response);

    // 2. El GET nos devulve un JSON entonces tenemos que convertirlo a un tipo de dato que entienda JS (tipicamente sera un objeto o un array de objetos)
    const data = await response.json();
    console.log("objeto data: ", data);

    // 3. Modificar el DOM para mostrar el chiste al usuario
    // del objeto data me quedo con la propiedad value
    jokeDIV.textContent = data.value;
});
