let params = [];

function processParams() {
  let paramstr = window.location.search.substr(1);
  let paramarr = paramstr.split('&');
  for (let i = 0; i < paramarr.length; i++) {
    let tmparr = paramarr[i].split('=');
    params[tmparr[0]] = tmparr[1];
  }
}

document.querySelector('#identificador').innerHTML = params['identificador'];
document.querySelector('#titulo').innerHTML = params['titulo'];
document.querySelector('#duracion').innerHTML = params['duracion'];
document.querySelector('#actores').innerHTML = params['actores'];
document.querySelector('#sinopsis').innerHTML = params['sinopsis'];
document.querySelector('#imagen').innerHTML = params['imagen'];
document.querySelector('#genero').innerHTML = params['genero'];
document.querySelector('#fecha').innerHTML = params['fecha'];

try {
  processParams();
  let response = await fetch(`/pistas/${params['index']}`);
  console.log(response);
  if (response.ok) {
    let t = await response.json();
    document.querySelector('#identificador').innerHTML = t['identificador'];
    document.querySelector('#titulo').innerHTML = t['titulo'];
    document.querySelector('#duracion').innerHTML = t['duracion'];
    document.querySelector('#interprete').innerHTML = t['interprete'];
    document.querySelector('#actores').innerHTML = t['actores'];
    document.querySelector('#sinopsis').innerHTML = t['sinopsis'];
    document.querySelector('#imagen').innerHTML = t['imagen'];
    document.querySelector('#genero').innerHTML = t['genero'];
    document.querySelector('#fecha').innerHTML = t['fecha'];
  }
  Else;
  container.innerHTML = '<h1>Error - Failed URL!</h1>';
} catch (response) {
  console.log(response);
  container.innerHTML = '<h1>Connection error</h1>';
}
