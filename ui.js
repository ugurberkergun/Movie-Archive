// Arayüz İşlemleri

function UI(){


}
UI.prototype.addFilmToUI = function(newFilm){
    const filmList = document.getElementById("films");
    
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
          </tr>
    
    `
    
}

UI.prototype.clearInputs = function(e1,e2,e3){
    e1.value = "";
    e2.value = "";
    e3.value = "";
}
UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body");
    // Alert div'i oluşturma

    const div = document.createElement("div");
    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div);
   
    setTimeout(() => {
        div.remove();
    }, 2000);

}
UI.prototype.loadAllFilms= function(films){

    const filmList = document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML += `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td>${film.title}</td>
        <td>${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
        `;
    });
}
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove()
}
UI.prototype.clearclearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films");

    while(filmList.firstElementChild !== null){
        filmList.firstElementChild.remove();
    }

}