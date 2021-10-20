const API = "https://api.disneyapi.dev/characters"

//obtener los resultados de la API osea la url
const getData = (api) => {
    //retorna el resultado de la API ya que el fetch se encarga de consumir la API osea (api) que tiene la URL
    return fetch(api)
    .then((response)=> response.json())
    .then((json)=>{//guarda esos json en esta palabrita (json)<--hay 5 mil fotos
        fillData(json);//se envian esas 5 mil fotos a la funcion fill data para dibujarlos en el html
    })
    .catch((error)=> {
        console.log("Error:", error); //en caso tal de que haya un error
    });
}



const fillData = (aiuda) => {

    let html = "";
    aiuda.data.forEach(aber =>{
        html+= '<div class="col">';
        html+= '<div class="card h-100"> <style="width: 12rem;">';
        html+= `<img src="${aber.imageUrl}" class="card-img-top" alt="${aber.name}" width="300" height="300">`
        html+= '<div class="card-body">';
        html+= `<h5 class="card-title">${aber.name}</h5>`
        html+= "</div>";
        html+= "</div>";
        html+= "</div>";

    });

    document.getElementById("dataAlbum").innerHTML = html

};

//Se invoca la funcion automaticamente, ya que no tenemos el boton, se le envia la variable API
getData(API);