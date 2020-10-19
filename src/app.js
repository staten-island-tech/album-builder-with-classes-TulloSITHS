class Album {
    constructor(title, artist, url){
        this.title = title;
        this.artist = artist;
        this.url = url;
    }
}

class UI {
    //method to show new album
    addAlbumtoList(album){
        let html = `<!-- <div class="display-album flex-row"><div class="display-title">Abbey Road</div><div class="display-artist">Beatles</div><div class="display-cover"><img src="https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/09/beatles-abbey-road-1.jpg" alt=""></div><div class="remove-album">Remove Album X</div> -->`;
        let newHtml = newHtml.replace("%title%", album.title);
        newHtml = newHtml.replace("%artist%", album.artist);
        newHtml = newHtml.replace("%url%", album.url);
        document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
    }
    //method to clear out input fields
    clearFields(){
        document.getElementById(".title").value = "";
        document.getElementById(".artist").value = "";
        document.getElementById(".url").value = "";
    }
    //delete target album method
    deleteAlbum(target){
        if(target.className){

        }
    }
}

document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const artist = document.getElementById("artist").value;
    const url = document.getElementById("url").value;

    const album = new Album(title, artist, url);

    const UI = new UI();

    UI.addAlbumtoList(album);
    UI.clearFields();
});